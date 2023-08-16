const express = require('express')
const mongodb = require('mongodb')
const DbConnector = require('../dbconnector')

const router = express.Router()

//get the accesses and names from who logued for fill the menu
router.get('/:id', async (req, res)=>{
    const logins = await DbConnector.loadLogins()   
    const fields = {Nome: 1, Acessos: 1, _id: 0}
    res.send(await logins.findOne({ _id: new mongodb.ObjectId(req.params.id)}, {projection: fields}))
})

module.exports = router