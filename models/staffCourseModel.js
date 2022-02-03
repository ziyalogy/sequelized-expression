module.exports = (sequelize, DataTypes) => {
    const Staff_Course = sequelize.define("staff_course", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        staff_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        course_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Staff_Course
}