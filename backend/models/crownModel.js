const mongoose = require('mongoose')

const Schema = mongoose.Schema

const crownSchema = new Schema({
    orgname: {
        type: String
    },
    name: {
        type: String
    },
    desc: {
        type: String
    },
    image: {
        type: String
    },
    longorgname: {
        type: String
    }

}, { collection: 'crown-quest' })

module.exports = mongoose.model('Crown', crownSchema)