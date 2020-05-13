import { Sequelize } from "sequelize"
import cred from "./credentials"


export const db = new Sequelize("CloudComputing_A1", "root", "", {
    dialect: "mysql",
    host: "127.0.0.1",
    logging: false
})

export const connectDB = db.authenticate()
    .then(() => console.log('Database connected..'))
    .catch(err => console.log('Error occurred', err))

