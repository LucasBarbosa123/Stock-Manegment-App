import axios from "axios"

//para funcionar em maquinas exteriores ao host é preciso estar escrito o ip em vez de localhost
const url = 'http://localhost:5000/general'

class GeneralService {
    //Get client's machine time
  static async getClientTime() {
    try {
      const res = await axios.get(url+'/time')
      const time = res.data
      return time            
    } catch(err) {
      return Promise.reject(err)
    }
  }

  static async passConfirmation(id, pass){    
    try {
      const res = await axios.get(url+'/confirmation'+'/'+id+'/'+pass)
      const data = res.data
      return data            
    } catch(err) {
      return Promise.reject(err)
    }
  }
}

export default GeneralService