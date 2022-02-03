module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define("department", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Department
}