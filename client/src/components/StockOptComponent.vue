<template>
    <div class="content-container">
    <div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-users fa-5x"></i>
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
                <i class="fa-solid fa-user-plus fa-5x"></i>
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
                <i class="fa-solid fa-user-pen fa-5x"></i>
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
                <i class="fa-regular fa-circle-user fa-6x" style="padding-left: 0vw"></i>
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
                <i class="fa-regular fa-circle-user fa-6x" style="padding-left: 0vw"></i>
            </div>
            <div class="opt-text">
                <p>Stock em Falta</p>
            </div>
            <div class="opt-btt">
                <button id="myAcount">
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