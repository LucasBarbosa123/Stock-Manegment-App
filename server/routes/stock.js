const express = require('express')
const mongodb = require('mongodb')
const DbConnector = require('../dbconnector')

const router = express.Router()

async function placasFormater(placas){
    let placasF = []

    placas.forEach((placa)=>{
        let placaF = {
            Nome: placa.Nome,
            Tamanho: placa.Espessura + 'mm x ' + placa.Altura + 'mm x ' + placa.Largura + 'mm',
            ProductCode: placa.ProductCode,
            Quantidade: placa.Quantidade
        }

        placasF.push(placaF)
    })

    return placasF
}

async function rolosFormater(rolos){
    let rolosF = []

    rolos.forEach((rolo)=>{
        let roloF = {
            Nome: rolo.Nome,
            Tamanho: rolo.Largura + 'm x ' + rolo.Comprimento + 'm',
            Cor: rolo.Cor,
            Tipo: rolo.Tipo,
            ProductCode: rolo.ProductCode,
            Quantidade: rolo.Quantidade
        }

        rolosF.push(roloF)
    })

    return rolosF
}

//get the accesses and names from who logued for fill the menu
router.get('/lst', async (req, res)=>{
    
    const [ferrosConnector, geralConnector, placasConnector, rolosConnector, roupasConnector] = await Promise.all([
        DbConnector.loadFerros(),
        DbConnector.loadGeral(),
        DbConnector.loadPlacas(),
        DbConnector.loadRolos(),
        DbConnector.loadRoupas(),
    ])

    const projection = {projection: {_id: 0}}
    const [ferros, geral, placas, rolos, roupa] = await Promise.all([
        ferrosConnector.find({}, projection).toArray(),
        geralConnector.find({}, projection).toArray(),
        placasConnector.find({}, projection).toArray(),
        rolosConnector.find({}, projection).toArray(),
        roupasConnector.find({}, projection).toArray()
    ])

    const [stock] = await Promise.all([
        {
            ferros: ferros,
            geral: geral,
            placas: await placasFormater(placas),
            rolos: await rolosFormater(rolos),
            roupa: roupa
        }
    ])

    res.send(stock)
})

module.exports = router