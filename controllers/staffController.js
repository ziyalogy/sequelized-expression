const db = require('../models')

//create main model
const Staff = db.Staff
const Course = db.Courses

//Main tasks
//To Add staff

const addStaff = async (req, res) => {
    let info = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        /*date_of_birth: req.body.date_of_birth,
        role_id: req.body.role_id,
        department_id: req.body.department_id*/
    }

    const staff = await Staff.create(info)
    res.status(200).send(staff)
}

//To get all staff

const getAllStaff = async (req, res) => {
    let staff = await Staff.findAll({
        /*attributes: [
            'first_name',
            'last_name',
            'date_of_birth',
            'role_id',
            'department_id'
        ]
    */})
    res.status(200).send(staff)
}

//To get single staff
const getOneStaff = async (req, res) => {
    let id = req.params.id
    let staff = await Staff.findOne({ where: { id: id}})
    res.status(200).send(staff)
}

//To update Staff
const updateStaff = async (req, res) => {
    let id = req.params.id
    const staff = await Staff.update(req.body, { where: { id: id } })
    
    res.status(200).send(staff)
}

//To delete single staff
const deleteStaff = async (req, res) => {
    let id = req.params.id
    await Staff.destroy( { where: { id: id } })
    res.status(200).send('Staff record was removed')
}

module.exports = {
    addStaff,
    getAllStaff,
    getOneStaff,
    updateStaff,
    deleteStaff
}