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
    num_imgs: {
        type: Number,
        required: true
    },
    video: {
        type: Boolean,
        required: true
    },
}, { collection: 'organizations' })

module.exports = mongoose.model('Org', orgSchema)