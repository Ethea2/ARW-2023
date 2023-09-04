const express = require('express')
const {
    getClusterList,
    getCluster
} = require('../controllers/clusterController')

const router = express.Router()

router.get('/', getClusterList)

router.get('/:id', getCluster)

module.exports = router