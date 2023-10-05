const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clashSchema = new Schema({
    game: {
        Type: String
    },
    level: {
        Type: Number
    },
    showteams: {
      Type: Boolean
    },
    showgame: {
      Type: Boolean
    },
    gamelogo: {
        Type: String
    },
    teams: {
        Type: [[{
          org: {
            type: String
          },
          orglogo: {
            type: String
          },
        }]]
    },
}, { collection: 'cyber-clash' })

module.exports = mongoose.model('Clash', clashSchema)