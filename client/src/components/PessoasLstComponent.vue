<template>
    <div class="content-container">
        <div class="search-container">
            <div class="search-radio">
                <input type="radio" id="radioNome" name="searchedColumn" value="0" @click="columnChooser" checked>
                <label for="radioNome">Nome</label>
                <input type="radio" id="radioEmail" name="searchedColumn" value="1" @click="columnChooser">
                <label for="radioEmail">Email</label>
                <input type="radio" id="radioAcessos" name="searchedColumn" value="2" @click="columnChooser">
                <label for="radioAcessos">Acessos</label>
            </div>

            <div class="search-bar">
                <i class="fa-brands fa-searchengin fa-xl"></i>
                <input type="text" id="tableSearch" @keyup="tableSearcher">
            </div>
        </div>
        <table id="table">
            <tr class="table-head">
                <th class="h-nome">Nome</th>
                <th class="h-email">Email</th>
                <th class="h-acessos">Acessos</th>
                <th class="h-utilidades">Utilidades</th>
            </tr>
            <tr v-for="u in allUsers" :key="u.id" class="table-body">
                <td>{{u.nome}}</td>
                <td>{{u.email}}</td>
                <td>
                    <p v-for="acesso in u.acessos" :key="acesso">
                        {{acesso}}
                    </p>
                </td>
                <td>
                    <div class="utility-btts">
                        <button @click="toEdtPage(u.id)">
                            <i class="fa-solid fa-pen-nib"></i>
                        </button>
                        <button @click="delConfirmator(u.id)">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </table>

        <div class="confirm-del-bg" v-if="delForm">
            <div class="confirm-del">
                <p>Insira a sua password</p>
                <input type="password" id="delPass" @keydown="clickBttDel">
                <div>
                    <button class="negative-btt" id="negativeBtt" @click="cancelDel">
                        <p>
                            Cancelar
                        </p>
                    </button>
                    <button class="positive-btt" id="positiveBtt" @click="confirmDel">
                        <p>
                            Apagar
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PessoasService from '../PessoasService'
import Warnings from '../Warnings'
import GeneralService from '../GeneralService'

export default {
    data(){
        let tryDelPerson = async (id, passOwner, pass)=>{
            let confirmation
            try{
              confirmation = await GeneralService.passConfirmation(passOwner, pass)
            }catch(err){
              console.log(err.message)
            }
            
            if(confirmation){                
                try{
                    //remove a conta
                    await PessoasService.deleteUser(id)
                    this.toDel = ''
                    this.delForm = false
                    let msg = 'Conta eliminada'
                    Warnings.goodWarning(msg)
                    
                    this.allUsers = await PessoasService.getAll()
                }catch(err){
                    console.log(err)
                }

            }else{                
                document.getElementById('delPass').value = '';
                let msg = 'Password incorreta'
                Warnings.badWarning(msg)
            }
        }

        return{
            allUsers: [],
            delForm: false,
            toDel: '',
            tryDelPerson,
            sessionToken:'',
            searchedColumn: 0
        }
    },
    async created(){
        this.sessionToken = await GeneralService.getSession()

        try{
          this.allUsers = await PessoasService.getAll()
        }catch(err){
          this.error = err.message
        }
    },
    methods: {
        delConfirmator(id){
            if(id == this.user){
                let msg = 'Não pode eliminar a sua própria conta'
                Warnings.badWarning(msg)
            }else{
                this.toDel = id
                this.delForm = true
            }
        },
        cancelDel(){
            this.toDel = ''
            this.delForm = false
        },
        confirmDel(){
            let pass = document.getElementById('delPass').value

            if(this.toDel == ''){
                console.log('bug stoped')
                
            }else if(pass != '' ){
                this.tryDelPerson(this.toDel ,this.sessionToken.user.user ,pass)

            }else{
                let msg = 'Precisa incerir a sua password'
                Warnings.badWarning(msg)
            }
        },
        clickBttDel(e){
          if(e.code == 'Enter'){
            document.getElementById('positiveBtt').click()
          }
        },
        tableSearcher() {
            var input, filter, table, tr, td, i;
            input = document.getElementById("tableSearch")
            filter = input.value.toUpperCase()
            table = document.getElementById("table")
            tr = table.getElementsByTagName("tr")
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[this.searchedColumn]
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = ""
                    } else {
                        tr[i].style.display = "none"
                    }
                }       
            }
        },
        toEdtPage(id){
            if(id == this.sessionToken.user.user){
                //to my acount page
            }else{
                this.$router.push({name: 'pessoasedt', params: {id: this.sessionToken.user.user, edtId: id}})
            }
        },
        columnChooser(e){
            this.searchedColumn = e.target.value
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";
@import "../assets/scss/table";
@import "../assets/scss/confirmations";

table{    

    .table-head{

        & > .h-nome{
            width: 12vw !important;
        }

        & > .h-email{
            width: 15vw;
        }

        & > .h-acessos{
            width: 15vw;
        }

        & > .h-utilidades{
            width: 10vw;
        }
    }
}

.search-container{
    margin-left: 44vw !important;
}

</style>