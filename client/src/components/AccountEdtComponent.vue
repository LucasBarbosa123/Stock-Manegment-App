<template>
    <div class="content-container">
        <h1 class="page-title">Minha Conta</h1>
        <hr>
        <div class="ac-input-container">
            <h2>Nome</h2>
            <div>
                <input type="text" id="pNome" readonly>
                <input type="text" id="sNome" readonly>
                <i class="fa-regular fa-pen-to-square" @click="editNome"></i>
            </div>
            <div>
                <h2>Email</h2>
                <p v-if="difEmail">Confira estes campos novamente</p>
            </div>
            <div>
                <input type="text" id="email" readonly @keyup="emailConf">
                <input type="text" id="emailS" class="editing" v-if="edtEmail" @keyup="emailConf">
                <i class="fa-regular fa-pen-to-square" @click="editEmail"></i>
            </div>
            <div>
                <h2>Password</h2>
                <p v-if="difPass" style="margin-left: 35vw">Confira estes campos novamente</p>
            </div>
            <div>
                <input type="password" id="pass" readonly @keyup="passConf">
                <input type="password" id="passS" class="editing" v-if="edtPass" @keyup="passConf">
                <i class="fa-regular fa-pen-to-square" @click="editPass"></i>
            </div>

            <button @click="edtMyAccount">
                <p>Editar</p>
            </button>
        </div>
    </div>
</template>

<script>
import PessoasService from '../PessoasService'
import Warnings from '../Warnings'

export default {
    props: ['user'],
    data(){
        
        let loadMyData = async () =>{
            try{
                this.myUser = await PessoasService.getMyAccount(this.user)

                let pNome = this.myUser.Nome.split(' ')[0]
                let sNome = this.myUser.Nome.split(' ')[1]
                document.getElementById('pNome').value = pNome
                document.getElementById('sNome').value = sNome

                document.getElementById('email').value = this.myUser.Email
                document.getElementById('pass').value = this.myUser.Pass

            }catch(err){
                console.log(err)
            } 
        }

        return{
            edtEmail: false,
            edtPass: false,
            myUser: {},
            difEmail: false,
            difPass: false,
            loadMyData
        }
    },
    async created(){

        this.loadMyData()
    },
    methods:{
        editNome(){
            document.getElementById('pNome').removeAttribute('readonly')
            document.getElementById('pNome').classList.add('editing')
            document.getElementById('sNome').removeAttribute('readonly')
            document.getElementById('sNome').classList.add('editing')
        },
        editPass(){
            document.getElementById('pass').removeAttribute('readonly')
            document.getElementById('pass').classList.add('editing')
            this.edtPass = true
        },
        editEmail(){
            document.getElementById('email').removeAttribute('readonly')
            document.getElementById('email').classList.add('editing')
            this.edtEmail = true
        },
        emailConf(){
            let email = document.getElementById('email').value
            let emailRep = document.getElementById('emailS').value

            if(email != emailRep){
              this.difEmail = true
            }else{
              this.difEmail = false
            }
        },
        passConf(){
            let Pass = document.getElementById('pass').value
            let PassRep = document.getElementById('passS').value

            if(Pass != PassRep){
              this.difPass = true
            }else{
              this.difPass = false
            }
        },
        edtMyAccount(){
            let nome, email, pass
            
            if(this.difPass || this.difEmail){
                let msg = 'Confira os campos assinalados'
                Warnings.badWarning(msg)
            }else{
                nome = document.getElementById('pNome').value + ' ' + document.getElementById('sNome').value
                email = document.getElementById('email').value
                pass = document.getElementById('pass').value

                if(email == '' || pass == ''){
                    let msg = 'Preencha todos os campos'
                    Warnings.badWarning(msg)
                }else{
                    PessoasService.updateMyUser(this.user, nome, email, pass)
                    location.reload()

                }
            }
            
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";

    .page-title{
        margin: 0;
        margin-top: 4vh;
        margin-left: 1vw;
        display: flex;
    }

    .ac-input-container{
        display: flex;
        flex-direction: column;
        margin-left: 3vw;
        margin-top: 6vh;
        text-align: left;

        & > button{
            background-color: $positive-color;
            border-color: $light-grey;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 20px;
            border-radius: 1vh;
            font-size: 1.1vw;
            cursor: pointer;
            width: 10vw;            
            margin-right: 0.5vw;
            margin-top: 7vh;

            & > p{
                padding: 1vh;
                margin: 0;
                color: $dark-grey;

                &:hover{
                    color: $white;
                }
            }                    
        }

        & > div{
            display: flex;

            & > h2{
                font-size: 2.8vh;
                margin: 0;
            }

            & > p{
                margin: 0;
                margin-top: 0.5vh;
                margin-left: 38vw;
                font-size: 0.9vw;
                color: $negative-color;
            }
            
            input:nth-child(2) {
              margin-left: 1vw;
            }

            & > i{
                margin-left: 0.5vw;
            }

            & > input{
                margin-bottom: 4vh;
                height: 3.5vh;
                width: 25vw;
                border-radius: 1vh;
                font-size: 2.25vh;
                padding-left: 0.5vw;
                padding-right: 0.5vw;
                background-color: $light-grey;
                color: $dark-grey;
                cursor: default;

                &.editing{
                    background-color: white;
                    color: inherit;
                    cursor: auto;
                }
            }
        }        

        & > .acessos-container{
            margin-bottom: 3vh;
            display: flex;
            justify-content: space-between;
            width: 19vw;
            margin-top: 1.5vh;

            & > div{
              display: flex;
              align-items: center;

              & > input{
                height: 3.5vh;
                width: 2vw;
                cursor: pointer;
              }

              & > label{
                padding: 0;
                margin: 0;
              }
            }
        }
    }
</style>