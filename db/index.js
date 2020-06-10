import { Sequelize } from "sequelize"
import cred from "./credentials"


export const db = new Sequelize("A4_Cloud_Computing", "akashAdmin@azure-db-cloud-a4", "?A8Ps[<=", {
    dialect: "mysql",
    host: "azure-db-cloud-a4.mysql.database.azure.com",
    logging: false
})

export const connectDB = db.authenticate()
    .then(() => console.log('Database connected..'))
    .catch(err => console.log('Error occurred', err))
