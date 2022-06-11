const Router = require('express')
const router = new Router()
const controller = require('../controller/kanalservice.controller')

router.get('/table', controller.getTable)

module.exports = router