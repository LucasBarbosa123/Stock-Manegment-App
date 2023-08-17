<template>
  <div class="content-container">
    <div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-users fa-5x"></i>
            </div>
            <div class="opt-text">
                <p>Listar contas</p>                
            </div>
            <div class="opt-btt">
                <button id="pessoasLst" @click="goPplLst">
                    <p>Ver</p>                    
                </button>
            </div>
        </div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-user-plus fa-5x"></i>
            </div>
            <div class="opt-text">
                <p>Criar nova conta</p>                
            </div>
            <div class="opt-btt">
                <button id="pessoasAdd" @click="goPplAdd">
                    <p>Adicionar</p>                    
                </button>
            </div>
        </div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-user-pen fa-5x"></i>
            </div>
            <div class="opt-text">
                <p>Editar conta</p>                
            </div>
            <div class="opt-btt">
                <button id="pessoasEdt" @click="goPplEdt">
                    <p>Editar</p>
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
                <p>Minha Conta</p>                
            </div>
            <div class="opt-btt">
                <button id="myAcount">
                    <p>Ir</p>
                </button>
            </div>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
    methods: {
        goPplLst(){
            this.$router.push({name: 'pessoaslst', params: {id: this.user}})
        },
        goPplAdd(){
            this.$router.push({name: 'pessoasadd', params: {id: this.user}})
        },
        goPplEdt(){
            this.$router.push({name: 'pessoasedt', params: {id: this.user}})
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/option-cards";

</style>