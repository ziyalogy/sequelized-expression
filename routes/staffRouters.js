const staffController = require('../controllers/staffController.js')

const router = require('express').Router()

router.post('/add', staffController.addStaff)
router.get('/all', staffController.getAllStaff)
router.get('/:id', staffController.getOneStaff)
router.put('/update/:id', staffController.updateStaff)
router.delete('/delete/:id', staffController.deleteStaff)

module.exports = router