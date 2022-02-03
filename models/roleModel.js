module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("role", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Role
}