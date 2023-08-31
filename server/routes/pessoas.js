const express = require('express')
const mongodb = require('mongodb')
const DbConnector = require('../dbconnector')
const encrypter = require('../encrypter')

const router = express.Router()

//gets the information necessary to make the users list
router.get('/lst', async (req, res)=>{
    const logins = await DbConnector.loadLogins()
    const fields = {Nome: 1, Email: 1, Acessos: 1}
    res.send(await logins.find({}, {projection: fields}).toArray())
})

//deletes an account
router.delete('/:id', async (req, res)=>{
    const logins = await DbConnector.loadLogins()
    await logins.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.status(200).send()
})

//update acessos of an acount
router.post('/edt', async (req, res)=>{

    const logins = await DbConnector.loadLogins()
    await logins.updateOne({_id: new mongodb.ObjectId(req.body.id)}, {$set: {Acessos: req.body.acessos}})

    res.status(200).send()
})

//get all information about the loged user
router.get('/getmyaccount/:id', async (req, res)=>{
    const logins = await DbConnector.loadLogins()
    res.send(await logins.findOne({_id: new mongodb.ObjectId(req.params.id)}, {projection: {_id: 0, Pass: 0}}))
})

//update users own account
router.post('/edtmyuser', async (req, res)=>{
    const logins = await DbConnector.loadLogins()

    if(req.body.pass == ''){
        await logins.updateOne({_id: new mongodb.ObjectId(req.body.id)}, {$set: {Nome: req.body.nome, Email: req.body.email}})
    }else{
        let hashedPass = await encrypter.encrypt(req.body.pass)
        await logins.updateOne({_id: new mongodb.ObjectId(req.body.id)}, {$set: {Nome: req.body.nome, Email: req.body.email, Pass: hashedPass}})
    }
    res.status(200).send()
})

module.exports = router