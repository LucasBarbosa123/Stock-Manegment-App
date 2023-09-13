<template>
  <div class="content-container">
    <div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-users fa-5x" style="padding-left: 0.5vw;"></i>
            </div>
            <div class="opt-text">
                <p>Listar contas</p>                
            </div>
            <div class="opt-btt">
                <button id="pessoasLst" @click="goTo('pessoaslst')">
                    <p>Listar</p>                    
                </button>
            </div>
        </div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-user-plus fa-5x" style="padding-left: 1vw;"></i>
            </div>
            <div class="opt-text">
                <p>Criar nova conta</p>                
            </div>
            <div class="opt-btt">
                <button id="pessoasAdd" @click="goTo('pessoasadd')">
                    <p>Criar</p>                    
                </button>
            </div>
        </div>
        <div class="opt-card">
            <div class="opt-icon">
                <i class="fa-solid fa-user-pen fa-5x" style="padding-left: 1vw;"></i>
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
                <i class="fa-regular fa-circle-user fa-6x"></i>
            </div>
            <div class="opt-text">
                <p>Minha Conta</p>                
            </div>
            <div class="opt-btt">
                <button id="myAcount" @click="goTo('accountedt')">
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
        goPplEdt(){
            this.$router.push({name: 'pessoasedt', params: {edtId: ' '}})
        },
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