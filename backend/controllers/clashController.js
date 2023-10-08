const Clash = require('../models/clashModel')
const mongoose = require('mongoose')

// get list of clash
const getClash = async(req, res) => {
    const clashList = await Clash.find({}).sort({level: -1})
    res.status(200).json(clashList)
}

module.exports = {
    getClash
}