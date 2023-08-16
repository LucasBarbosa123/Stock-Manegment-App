import axios from "axios"

//para funcionar em maquinas exteriores ao host é preciso estar escrito o ip em vez de localhost
const url = 'http://localhost:5000/login'

class LoginService {
  
    static async tryLogin(nome, pass){
      try{
        const res = await axios.get(url+'/tryLogin/'+ nome + '/' + pass)
        const data = res.data
        return data
      }catch(err){
        return Promise.reject(err)  
      }
    }
}

export default LoginService