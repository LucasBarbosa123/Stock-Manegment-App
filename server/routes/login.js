const express = require('express')
const DbConnector = require('../dbconnector')
const encrypter = require('../encrypter')
const jwt = require('jsonwebtoken')


const expiresAt = 1000 * 60 * 60 * 24 * 7 // 1 week

const router = express.Router()

router.get('/tryLogin/:nome/:pass', async (req, res)=>{
    const logins = await DbConnector.loadLogins()
    const fields = {Nome: 1, Pass: 1, Acessos: 1, UserName:1}
    const data = await logins.findOne({Nome: req.params.nome}, {projection: fields})
    let userId = ''
    if(data){
      const isPassCorrect = await encrypter.comparePass(req.params.pass, data.Pass)
    
      if(isPassCorrect){
        userId = data._id
        delete data.Pass

        const token = jwt.sign(data, DbConnector.tokenSecret())

        req.session.user = {
          user: data._id,
          name: 'session_token',
          token: token
        }

        req.session.cookie.maxAge = expiresAt

        req.session.save(err => {
          if(err){
            console.log(err);
          } else {
            res.cookie('session_token', token, {originalMaxAge: expiresAt})
            res.send(userId)
          }
        })      
      }else{
        res.send(userId)
      }
    }else{
      res.send(userId)
    }
})

router.get('/logout', async (req, res) => {
  req.session.destroy()
  res.send('success')
})

module.exports = router