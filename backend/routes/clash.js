const express = require('express')
const {
    getClash
} = require('../controllers/clashController')

const router = express.Router()

router.get('/', getClash)

module.exports = router