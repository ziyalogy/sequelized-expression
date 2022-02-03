const dbConfig = require('../config/dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');
const { dialect } = require('../config/dbConfig.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
        
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }

}  
)

sequelize.authenticate()
    .then(() => {
    console.log('Database connection established...')
    })
    .catch(err => {
    console.log('Error'+ err)
    })
const db = {}
db.sequelize = Sequelize
db.sequelize = sequelize

db.staff = require('./staffModel.js')(sequelize, DataTypes)
db.courses = require('./courseModel.js')(sequelize, DataTypes)
db.roles = require('./roleModel.js')(sequelize, DataTypes)
db.departments = require('./departmentModel.js')(sequelize, DataTypes)
db.staff_Courses = require('./staffCourseModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
    console.log('Database ready')
})

module.exports = db
