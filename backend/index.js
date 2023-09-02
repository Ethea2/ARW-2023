require('dotenv').config()
const express = require('express')

app = express()

app.use('/api/hello', (req, res) => {
    res.send("Hello!")
})

app.listen(process.env.PORT, () => {
    console.log('listening to port ' + process.env.PORT)
})