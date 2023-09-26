const express = require('express')
const {
    getCrown
} = require('../controllers/crownController')

const router = express.Router()

router.get('/', getCrown)

module.exports = router