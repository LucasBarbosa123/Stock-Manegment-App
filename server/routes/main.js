const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Hello')
})

module.exports = router