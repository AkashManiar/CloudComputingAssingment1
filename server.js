import express from "express"
import bodyParser from "body-parser"
import router from "./routes"

let app = express()
let port = process.env.PORT || 8080

app.use('/', bodyParser, router)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.listen(port)
console.log("Server is running at: "+port)