const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Middleware
app.use(bodyParser.json())
app.use(cors())

const loginPage = require('./routes/login')
const mainPage = require('./routes/main')
const generalPage = require('./routes/general')
const homePage = require('./routes/home')
const pessoasPage = require('./routes/pessoas')

app.use('/', mainPage)

app.use('/login', loginPage)

app.use('/general', generalPage)

app.use('/home', homePage)

app.use('/pessoas', pessoasPage)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log('server started on port ' + port)
})