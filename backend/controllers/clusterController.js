const Cluster = require('../models/clusterModel')
const mongoose = require('mongoose')

// get list of cluster
const getClusterList = async(req, res) => {
    const clusterList = await Cluster.find({}).sort({ name: 1})

    res.status(200).json(clusterList)
}

//get one cluster
const getCluster = async (req, res) => {
    const { id } = req.params

    console.log(id)

    if (id instanceof String) {
        return res.status(404).json({ error: 'No such cluster' })
    }

    const cluster = await Cluster.findOne({ 'name': id })

    if (!cluster) {
        return res.status(404).json({ error: 'No such cluster' })
    }

    res.status(200).json(cluster)
}

module.exports = {
    getClusterList,
    getCluster
}