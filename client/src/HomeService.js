import axios from "axios"

//para funcionar em maquinas exteriores ao host é preciso estar escrito o ip em vez de localhost
const url = 'http://localhost:5000/home'

class HomeService {
    //Get information about the user that just loged in
    static async getUser(id) {
        try {
            const res = await axios.get(url+'/'+id)
            const data = res.data
            
            return data
        } catch(err) {
            return err
        }
    }    
}

export default HomeService