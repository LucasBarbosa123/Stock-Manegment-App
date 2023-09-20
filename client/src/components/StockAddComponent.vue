<template>
  <div class="content-container">
    <div class="add-container">
        <h1 class="title">Adicionar Stock</h1>
        <input type="text" id="Nome" placeholder="Nome">
        <input type="text" id="Tamanho" placeholder="Tamanho">
        <input type="text" id="email" placeholder="Email">
        <div>
          <input type="text" id="emailRep" placeholder="Confirmar email">
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

        <button id="addPrsn">
          <p>Adicionar</p>
        </button>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/add-forms";

</style>