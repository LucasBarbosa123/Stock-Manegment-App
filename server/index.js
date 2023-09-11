const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoDBStore = require('connect-mongo')(session)

const app = express()

//Middleware
app.use(bodyParser.json())

//so that i could get cookies to the front end
const corsOptions ={
    origin:'http://localhost:8080',
    credentials:true,
    optionsSuccessStatus:200
}
app.use(cors(corsOptions))

app.use(cookieParser())

const dbconnector = require('./dbconnector')

let store = new MongoDBStore({
  url: dbconnector.sessionsConnectionString(),
  ttl: 1000 * 60 * 60 * 24 * 7, // 1 week
  databaseName: 'StockVilatoldos',
  collection: 'Sessions',
  autoRemove: 'native'
})

app.use(session({
  secret: 'This is a secret',
  store: store,    
  resave: false,
  saveUninitialized: false
}))

store.on('error', function (error) {
  console.error('MongoDBStore error:', error)
})

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

const port = 5000

app.listen(port, ()=>{
    console.log('server started on port ' + port)
})