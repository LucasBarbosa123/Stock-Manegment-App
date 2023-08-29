import axios from "axios"

//para funcionar em maquinas exteriores ao host é preciso estar escrito o ip em vez de localhost
const url = 'http://localhost:5000/pessoas'

class PessoasService {
  
    static async getAll(){
      try{
        const res = await axios.get(url+'/lst')
        const data = res.data
        const users = data.map(user =>({
          nome: user.Nome,
          email: user.Email,
          acessos: user.Acessos,
          id: user._id
        }))
        return users
      }catch(err){
        return Promise.reject(err)  
      }
    }

    static deleteUser(id){
      return axios.delete(url+'/'+id)
    }

    static updateUser(id, acessos){

      let postData = {
        id: id,
        acessos: acessos
      }

      return axios.post(url+'/edt', postData)
    }

    static async getMyAccount(id){
      try{
        const res = await axios.get(url+'/getmyaccount/'+ id)
        const data = res.data
        return data
      }catch(err){
        return Promise.reject(err)
      }
    }
}

export default PessoasService