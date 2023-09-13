import axios from "axios"

//para funcionar em maquinas exteriores ao host é preciso estar escrito o ip em vez de localhost
const url = 'http://localhost:5000/stock'

class StockService {
    //Get information about the user that just loged in
    static async getAll() {
        const res = await axios.get(url+'/lst')
        console.log(res.data)
        return res.data
    }    
}

export default StockService