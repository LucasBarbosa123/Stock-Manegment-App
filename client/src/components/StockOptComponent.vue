<template>
    <div class="content-container">
    <div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-cubes fa-5x"></i>
            </div>
            <div class="opt-text">
                <p>Listar Stock</p>
            </div>
            <div class="opt-btt">
                <button id="pessoasLst" @click="goTo('stocklst')">
                    <p>Listar</p>
                </button>
            </div>
        </div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-circle-plus fa-5x"></i>
            </div>
            <div class="opt-text">
                <p>Adicionar Tipo de Stock</p>
            </div>
            <div class="opt-btt">
                <button id="pessoasAdd">
                    <p>Adicionar</p>
                </button>
            </div>
        </div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-trash-can fa-5x"></i>
            </div>
            <div class="opt-text">
                <p>Remover Tipo de Stock</p>
            </div>
            <div class="opt-btt">
                <button id="pessoasEdt">
                    <p>Remover</p>
                </button>
            </div>
        </div>
    </div>
    <div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-magnifying-glass-chart fa-6x"></i>
            </div>
            <div class="opt-text">
                <p>Stock Gasto</p>
            </div>
            <div class="opt-btt">
                <button id="myAcount">
                    <p>Ver</p>
                </button>
            </div>
        </div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-caret-down fa-6x"></i>
            </div>
            <div class="opt-text">
                <p>Stock em Falta</p>
            </div>
            <div class="opt-btt">
                <button id="myAcount1">
                    <p>Ver</p>
                </button>
            </div>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
methods: {
        goTo(page){
            let pageTo = page.toLowerCase()
            this.$router.push({name: pageTo})
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/option-cards";

</style>