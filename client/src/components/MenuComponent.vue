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
            <i class="fa-solid fa-circle-user fa-2x" @click="openOptMenu"></i>
        </div>

        <div class="opt-menu-container" v-if="optMenu">
            <div class="opt-menu-triangle"></div>
            <div class="opt-menu">
                <div id="myAccount" @click="goTo('accountedt')">
                    <i name="account" class="fa-solid fa-user fa-lg"></i>
                    <label for="account">Minha Conta</label>
                </div>
                <div id="logout" @click="logout">
                    <i name="logout" class="fa-solid fa-right-from-bracket fa-xl"></i>
                    <label for="logout">Logout</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GeneralService from '../GeneralService'
import LoginService from '../LoginService'

export default {
    data(){
        return{
            userName: '',
            acessos: [],
            error: '',
            optMenu: false
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
        },
        openOptMenu(){
            this.optMenu = !this.optMenu
        },
        async logout(){
            let res = await LoginService.logout()
            if(res == 'success'){
                location.reload();
            }
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

    & > .opt-menu-container{
        top: 7.5vh;
        left: 90vw;
        position: absolute;

        & > .opt-menu{
            height: 10vh;
            width: 8vw;
            background-color: white;
            border: 1px solid $dark-grey;
            border-radius: 0.5vh;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 1vh;
            padding-right: 1vh;

            & > div{
                margin-top: 1.5vh;
                color: $dark-grey;
                cursor: pointer;

                &:hover{
                    color: $negative-color;
                }

                & > i{
                    margin-right: 0.5vw;
                }

                & > label{
                    cursor: pointer;
                }
            }
        }

        & > .opt-menu-triangle{
            width: 0;
            height: 0;
            border-left: 1.3vh solid transparent;
            border-right: 1.3vh solid transparent;
            border-bottom: 1.3vh solid $dark-grey;
            margin-left: 6.2vw;
        }
    }
}
</style>