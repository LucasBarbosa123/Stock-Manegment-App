const bcrypt = require('bcrypt')

module.exports = {
    encrypt: async function(pass){        

        const hash = await bcrypt.hash(pass, 13)        

        return hash
    },
    comparePass: async function(pass, hashedPass){
        const isEqual = await bcrypt.compare(pass, hashedPass)

        return isEqual
    }
}