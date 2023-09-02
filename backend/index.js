const express = require('express')

app = express()

app.use('/api/hello', (req, res) => {
    res.send("Hello!")
})