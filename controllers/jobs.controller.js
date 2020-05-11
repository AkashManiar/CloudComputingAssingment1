import { jobs446 } from "../data"

let jobsController = {

    getJobs: (req, res) => {
        res.json({success: true, jobs: jobs446}) 
    },

    getJobIndex: (job_name, part_id) => {
        let isJobFound = false
        let index = -1
        for (let i=0; i < jobs446.length; i++) {
            let job = jobs446[i]
            if (job.jobName == job_name || job.partId == part_id) {
                isJobFound = true
                index = i
            }
        }
        return index
    },

    getQuantity: (req,res) => {
        let job_name = req.query.jobName
        let part_id = req.query.partId
        if (getJobIndex(job_name, part_id) != -1) {
            res.json({success: true, message: "Successfully found a job", job: job})
        } else {
            res.json({success: false, message: "Sorry no matching job is found!"})
        } 
    },
    
    addPart: (req, res) => {
        if (req.body != {} && !!req.body) {
            if (jobsController.getJobIndex(req.body.job_name, req.body.part_id) == -1) {
                let obj = {
                    jobName: req.body.job_name,
                    partId: req.body.part_id,
                    qty: req.body.quantity
                }
                jobs446.push(obj)
                res.json({success: true, message: "Successfully added the job, call /API446/jobs to view your newly added job."})
            } else {
                res.json({success: false, message: "Job with provided data already exists" })
            }
        } else {
            res.json({success: false, message: "Oops! some error with adding data"})
        }
    },

    updatePart: (req, res) => {
        if (req.body != {} && !!req.body && req.body.job_name && req.body.part_id) {
            let jobIndex = jobsController.getJobIndex(req.body.job_name, req.body.part_id)
            if (jobIndex != -1) {
                jobs446[jobIndex] = req.body
                res.json({success: true, message: "Successfully updated your job"})
            } else {
                res.json({success: false, message: "Job with provided data does not exists"})
            }
        } else {
            res.json({success: false, message: "Oops! some error with updating data"}) 
        }
    }
}

module.exports = jobsController