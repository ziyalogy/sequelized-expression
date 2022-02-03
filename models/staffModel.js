module.exports = (sequelize, DataTypes) => {
    const Staff = sequelize.define("staff", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }/*,
        date_of_birth: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'role', // 'role' refers to Role name
                key: 'id', // 'id' refers to primary key in role table
             }
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'department', 
                key: 'id', 
             }
        }*/
    })

    return Staff
}