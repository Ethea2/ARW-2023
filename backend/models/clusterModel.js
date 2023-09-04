const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clusterSchema = new Schema({
    name: {
        Type: String
    },
    location: {
        Type: String
    }
}, { collection: 'clusters' })

module.exports = mongoose.model('Cluster', clusterSchema)