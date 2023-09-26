const Crown = require('../models/crownModel')
const mongoose = require('mongoose')

// get list of crown
const getCrown = async(req, res) => {
    const crownList = await Crown.find({}).sort({ orgname: 1})
    res.status(200).json(crownList)
}

module.exports = {
    getCrown
}