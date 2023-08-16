const express = require('express')
const mongodb = require('mongodb')
const DbConnector = require('../dbconnector')

const router = express.Router()

router.get('/time', (req, res)=>{
    let time = new Date().toLocaleString()
    time = time.slice(12)
    res.send(time)
})

//confirms the password with the id for delete processes
router.get('/confirmation/:id/:pass', async (req, res)=>{
    const logins = await DbConnector.loadLogins()    
    const fields = {Pass: 1, _id: 0}
    const passW = await logins.findOne({_id: new mongodb.ObjectId(req.params.id)}, {projection: fields})
    if(req.params.pass == passW.Pass){
        res.send(true)
    }else{
        res.send(false)
    }
})

module.exports = router