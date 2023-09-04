const express = require('express')
const DbConnector = require('../dbconnector')
const encrypter = require('../encrypter')
const uuid = require('uuid')

const sessions = {}
const expiresAt = 5000

const router = express.Router()

router.get('/tryLogin/:nome/:pass', async (req, res)=>{
    const logins = await DbConnector.loadLogins()
    const fields = {Nome: 1, Pass: 1}
    const data = await logins.findOne({Nome: req.params.nome}, {projection: fields})
    let userId = ''
    const isPassCorrect = await encrypter.comparePass(req.params.pass, data.Pass)
    
    if(isPassCorrect){
      userId = data._id
      const sessionToken = uuid.v4()

      sessions[sessionToken] = {
        expiresAt,
        userId: userId
      }

      res.cookie('session_token', sessionToken, {maxAge: expiresAt})
    }    
        
    res.send(userId)
})

module.exports = router