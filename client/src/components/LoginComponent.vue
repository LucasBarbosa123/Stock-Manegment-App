<template>
<div>
  <div class="login-form">
    <input type="text" name="nome" id="nome" placeholder="Nome" @keydown="clickBtt">
    <input type="password" name="pass" id="pass" placeholder="Password" @keydown="clickBtt">
    
    <button id="login" @click="TryToLogin">Login</button>
    <i class="fa-solid fa-spinner fa-spin-pulse fa-3x" style="color: #ffffff;" v-if="waiting"></i>
  </div>
</div>     
</template>

<script>
import LoginService from '../LoginService'
import GeneralService from '../GeneralService'
import Warnings from '../Warnings'

export default {
  data(){
    return{
      logedUser: '',
      error: '',
      waiting: false
    }
  },
  async created(){
  let sessionToken = await GeneralService.getSessi
  
    if(sessionToken){
      this.$router.push({name: 'home'})
    }
  },
  methods:{
    async TryToLogin(){      

      let nome = document.getElementById('nome').value
      let pass = document.getElementById('pass').value

      if(nome == ''){
        let msg = 'Precisa inserir o seu nome'
        Warnings.badWarning(msg)

      }else if(pass == ''){
        let msg = 'Precisa inserir a sua password'
        Warnings.badWarning(msg)

      }else{
        this.waiting = true
        
        try{
          this.logedUser = await LoginService.tryLogin(nome, pass)
        }catch(err){
          this.error = err.message
        }

        this.waiting = false

        if(this.logedUser != ''){
          //removing all the warnings 
          const warnings = document.querySelectorAll('.bad-warning')
          warnings.forEach(warning => {
            warning.remove()
          })
  
          location.reload()
        }else{
          let msg = 'Nome ou Password errada'
          Warnings.badWarning(msg)
        }
        }            
    },
    clickBtt(e){
      if(e.code == 'Enter'){
        document.getElementById('login').click()
      }
    }
  }
}
</script>


<style scoped lang="scss">
@import "../assets/scss/colors";

.login-form{
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin: 3vh;
  text-align: left;
  margin-top: 0;

  #login{
    border-radius: 40px;
    margin-top: 2.7vh;
    background: $positive-color;
    border: 1px solid $positive-color;
    color: #000;
    font-size: 2.3vh;
    text-transform: uppercase;
    height: 6.2vh;    
  }

  input{
    height: 5vh;
    color: $white;
    border: 1px solid transparent;
    background: rgb(255 255 255 / 16%);
    border-radius: 40px;    
    display: block;
    padding: 0.4vw;
    padding-left: 1.5vw;
    padding-right: 1.5vw;
    font-size: 2.3vh;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 3.5vh;
  }

  .logFailed{
    color: $negative-color;
  }

  & > i{
    margin-left: auto;
    margin-right: auto;
    margin-top: 2vh;

    &::before{
      animation: spin .5s linear infinite;
    }
  }  
}


</style>
