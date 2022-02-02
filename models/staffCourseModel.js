module.exports = (sequelize, DataTypes) => {
    const Staff_Course = sequelize.define("staff_course", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        staff_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'staff', // 'staff' refers to Staff name
                key: 'id', // 'id' refers to primary key in staff table
             }
        },
        course_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'course', 
                key: 'id', 
             }
        }
    })

    return Staff_Course
}