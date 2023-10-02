const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orgSchema = new Schema({
    cluster: {
        type: String,
        required: true
    },
    comp_name: {
        type: String,
        required: true
    },
    abbrv_name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    vision: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    fb_link: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    imageURL: {
        type: [String],
        required: true
    },
    videoURL: {
        type: String,
        required: true
    },
    logoURL: {
        type: String,
        required: true
    },
    logo2URL: {
        type: String,
        required: true
    },
    memURL: {
        type: String,
        required: true
    },
    mainURL: {
        type: String,
        required: true
    },
    regURL: {
        type: String,
        required: true
    },
    bgURL: {
        type: String,
        required: true
    },
}, { collection: 'organizations' })

module.exports = mongoose.model('Org', orgSchema)