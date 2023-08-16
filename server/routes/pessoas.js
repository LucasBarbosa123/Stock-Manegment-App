const express = require('express')
const mongodb = require('mongodb')
const DbConnector = require('../dbconnector')

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
    res.send(200).send()
})

module.exports = router