import cred from "./credentials"
import mysql from "mysql"

let connection = mysql.createConnection({
    host: cred.host,
    user: cred.host,
    password: cred.password
})

let connectMySQL = connection.connect(err => {
    if(err) {
        console.log('Error occurred');
        throw err
    } else {
        console.log('Connection successful!');
    }
})