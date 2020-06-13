import { Sequelize } from "sequelize"
import cred from "./credentials"


export const db = new Sequelize("A4_Cloud_Computing", "akash-admin@db-cloud-computing", "Pass9988!", {
    dialect: "mysql",
    host: "db-cloud-computing.mysql.database.azure.com",
    logging: false
})

export const connectDB = db.authenticate()
    .then(() => console.log('Database connected..'))
    .catch(err => console.log('Error occurred', err))
