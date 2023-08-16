const mongodb = require('mongodb')

//if u want a clone of my database so u can use the aplication freely dm me
const connectionString = 'mongodb+srv://Lucas:<pass>@<dbname>.91dvyia.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    loadLogins: async function(){        

        const cliente = await mongodb.MongoClient.connect(connectionString,
        {useNewUrlParser: true})

        return cliente.db('StockVilatoldos').collection('Users')
    }
}