import { Sequelize } from "sequelize"
import cred from "./credentials"


export const db = new Sequelize("A3_CloudComputing", "admin", "?A8Ps[<=", {
    dialect: "mysql",
    host: "db-cloud-computing.cu5vlmpnkcu5.us-east-1.rds.amazonaws.com",
    logging: false
})

export const connectDB = db.authenticate()
    .then(() => console.log('Database connected..'))
    .catch(err => console.log('Error occurred', err))

