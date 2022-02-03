module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("course", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        course_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Course
}