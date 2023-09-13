<template>
    <div class="header">
        <div class="home-logo">

        </div>
        <div class="header-options">
            <div class="h-opt" v-for="option in acessos" :key="option" @click="goTo(option)" :id="option">
                {{option}}
            </div>
        </div>
        <div class="header-icon">
            <i class="fa-solid fa-circle-user fa-2x" @click="goTo('accountedt')"></i>
        </div>
    </div>
</template>

<script>
import GeneralService from '../GeneralService'

export default {
    data(){
        return{
            userName: '',
            acessos: [],
            error: ''
        }
    },
    async created(){
        let sessionToken = await GeneralService.getSession()

        let tokenInfo = await GeneralService.getTokenInfo(sessionToken.user.token)

        this.userName = tokenInfo.Nome
        this.acessos = tokenInfo.Acessos
    },
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

.header{
    height: 6vh;
    padding: 2vh;
    background-color: $other-color;
    display: flex;
    position: fixed;
    width: 98.05vw;
    
    .home-logo{
        height: 100%;
        width: 9vw;
        background-color: white;
        margin-right: 3vw;
        cursor: pointer;
    }

    .header-options{
        height: 100%;
        width: 85.05vw;            
        display: flex;
        font-size: 3vh;

        .h-opt{                
            margin-top: 1.5vh;
            margin-bottom: 1vh;
            margin-right: 1.5vw;
            color: $white;
            cursor: pointer;

            &:hover{
                color: $negative-color;                    
            }
        }
    }

    .header-icon{
        height: 100%;
        width: 5vh;
        margin-right: 1vw;

        & > i{
            margin-top: 0.8vh;
            cursor: pointer;
            color: $white;
            
            &:hover{
                color: $negative-color;
            }
        }
    }
}
</style>