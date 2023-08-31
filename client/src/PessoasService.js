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

    //update the accesses of an user
    static updateUser(id, acessos){

      let postData = {
        id: id,
        acessos: acessos
      }

      return axios.post(url+'/edt', postData)
    }

    //geting the data from the users account for a profile update
    static async getMyAccount(id){
      try{
        const res = await axios.get(url+'/getmyaccount/'+ id)
        const data = res.data
        return data
      }catch(err){
        return Promise.reject(err)
      }
    }

    //update users own account
    static updateMyUser(id, nome, email, pass){

      let postData = {
        id: id,
        nome: nome,
        email: email,
        pass: pass
      }

      return axios.post(url+'/edtmyuser', postData)
    }
}

export default PessoasService