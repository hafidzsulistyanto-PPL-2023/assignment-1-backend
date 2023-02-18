const { Router } = require('express')
const { getUser, saveUser } = require('../controllers/userController')

const router = Router()

router.get('/', getUser)
router.post('/save', saveUser)

module.exports = router