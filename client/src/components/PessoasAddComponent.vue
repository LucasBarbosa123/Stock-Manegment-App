<template>
  <div class="content-container">
    <div class="add-container">
        <h1 class="title">Adicionar Conta</h1>
        <input type="text" id="pNome" placeholder="Nome" @keyup="wrongConf">
        <input type="text" id="sNome" placeholder="Apelido" @keyup="wrongConf">
        <input type="text" id="email" placeholder="Email" @keyup="wrongConf">
        <div>
          <input type="text" id="emailRep" placeholder="Confirmar email" @keyup="wrongConf">
          <p v-if="repError">Confira este campo novamente</p>
        </div>
        
        <div class="acessos-container">
          <div>
            <input type="checkbox" name="Stock" id="Stock" checked>
            <span class="check-marck"></span>
            <label for="Stock">Stock</label>
          </div>
          <div>
            <input type="checkbox" name="Pessoas" id="Pessoas">
            <span class="check-marck"></span>
            <label for="Pessoas">Pessoas</label>
          </div>
        </div>

        <button id="addPrsn" @click="tryAddPrsn">
          <p>Adicionar</p>
        </button>
    </div>
  </div>
</template>

<script>
import Warnings from '../Warnings'

export default {
  data(){
    return{
      repError: false
    }
  },
  methods: {
    tryAddPrsn(){
      let pNome = document.getElementById('pNome').value
      let sNome = document.getElementById('sNome').value
      let email = document.getElementById('email').value
      let emailRep = document.getElementById('emailRep').value

      if(pNome == '' || sNome == '' || email == '' || emailRep == ''){
        let msg = 'Todos os campos de texto precisam estar preenchidos'
        Warnings.badWarning(msg)
      }else if(email != emailRep){
        let msg = 'O campo confirmar email está diferente do campo email'
        Warnings.badWarning(msg)
      }else{
        console.log('os campos estao preenchidos corretamente')
      }
    },
    wrongConf(e){
      let email = document.getElementById('email').value
      let emailRep = document.getElementById('emailRep').value

      if(email != emailRep){
        this.repError = true
      }else{
        this.repError = false
      }

      if(e.code == 'Enter'){
        document.getElementById('addPrsn').click()
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/add-forms";

</style>