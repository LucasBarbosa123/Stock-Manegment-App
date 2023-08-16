const express = require('express')
const mongodb = require('mongodb')
const DbConnector = require('../dbconnector')

const router = express.Router()

router.get('/tryLogin/:nome/:pass', async (req, res)=>{
    const logins = await DbConnector.loadLogins()
    const fields = {Nome: 1, Pass: 1}
    const data = await logins.find({}, {projection: fields}).toArray()
    let userId = ''
    data.forEach((user)=>{
      if(user.Nome == req.params.nome && user.Pass == req.params.pass){
        userId = user._id
      }
    })
    res.send(userId)
})

module.exports = router