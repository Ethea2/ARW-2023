const Org = require('../models/orgModel')
const mongoose = require('mongoose')

// get list of orgs
const getOrgList = async(req, res) => {
    const orgList = await Org.find({}, 'cluster comp_name abbrv_name').sort({ cluster: 1, abbrv_name: 1 })

    res.status(200).json(orgList)
}

//get one org
const getOrg = async (req, res) => {
    const { id } = req.params

    console.log(id)

    if (id instanceof String) {
        return res.status(404).json({ error: 'No such organization' })
    }

    const orgDetails = await Org.findOne({ 'abbrv_name': id.toUpperCase() })

    if (!orgDetails) {
        return res.status(404).json({ error: 'No such organization' })
    }

    res.status(200).json(orgDetails)
}

module.exports = {
    getOrgList,
    getOrg
}