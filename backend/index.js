require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const orgRoutes = require("./routes/orgs");
const clusterRoutes = require("./routes/clusters");
const crownRoutes = require("./routes/crown");
const clashRoutes = require("./routes/clash");
const cors = require("cors");

// express app
const app = express();
app.use(cors());
app.use(
    cors({
        origin: [],
        methods: ["GET", "POST", "PATCH", "DELETE"],
    })
);

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use("/api/orgs", orgRoutes);
app.use("/api/clusters", clusterRoutes);
app.use("/api/crown", crownRoutes);
app.use("/api/clash", clashRoutes);

// connect to db

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log(
                "connected to db and listening on port (production)",
                process.env.PORT
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
