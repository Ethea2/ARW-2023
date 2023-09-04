const express = require('express')
const {
    getOrgList,
    getOrg
} = require('../controllers/orgController')

const router = express.Router()

router.get('/', getOrgList)

router.get('/:id', getOrg)

module.exports = router