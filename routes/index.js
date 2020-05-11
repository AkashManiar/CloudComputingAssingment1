import { Router } from "express"
import bodyParser from "body-parser"
import {
    getJobs,
    getQuantity,
    addPart,
    updatePart
} from "../controllers/jobs.controller"

let router = Router()
let jsonParser = bodyParser.json()

router.get('/API446/jobs', getJobs)
router.get('/API446/quantity/*', getQuantity)
router.get('/API446/quantity/:jobName/:partId', getQuantity)
router.post('/API446/addPart',jsonParser, addPart)
router.put('/API446/updatePart',jsonParser, updatePart)

module.exports = router