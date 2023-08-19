<template>
  <div class="input-container">
    <div class="edt-container">
        <h1 class="title">Editar Conta</h1>
        <input type="text" id="pNome" placeholder="Nome">
        <input type="text" id="sNome" placeholder="Apelido">
        
        
        <div class="acessos-container">
          <div>
            <input type="checkbox" name="Stock" id="">
            <span class="check-marck"></span>
            <label for="Stock">Stock</label>
          </div>
          <div>
            <input type="checkbox" name="Pessoas" id="">
            <span class="check-marck"></span>
            <label for="Stock">Pessoas</label>
          </div>
        </div>

        <button id="addPrsn" @click="tryEdtPrsn">
          <p>Gravar</p>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['newEdtUser'],
  data(){

    return{
      currentEdtUser: ''
    }
  },
  created(){
    
  },
  methods:{
    tryEdtPrsn(){
      console.log(1)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/add-forms";

</style>