<template>
<div class="content-container edt">
    <div class="list-container">
        <table id="table">
            <tr class="table-head">
                <th class="h-nome">Nome</th>
            </tr>
            <tr v-for="u in allUsers" :key="u.id" class="table-body" @click="selectToEdt(u.id)">
                <td>{{u.nome}}</td>
            </tr>
        </table>
    </div>


    <div class="input-container">
        <div class="edt-container">
            <h1 class="title">Editar Conta</h1>
            <input type="text" id="pNome" placeholder="Nome" readonly>
            <input type="text" id="sNome" placeholder="Apelido" readonly>


            <div class="acessos-container">
              <div>
                <input type="checkbox" class="check-box" name="Stock" id="Stock">
                <span class="check-marck"></span>
                <label for="Stock">Stock</label>
              </div>
              <div>
                <input type="checkbox" class="check-box" name="Pessoas" id="Pessoas">
                <span class="check-marck"></span>
                <label for="Stock">Pessoas</label>
              </div>
            </div>

            <button id="addPrsn" @click="tryEdtPrsn(toEdit)">
              <p>Gravar</p>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import PessoasService from '../PessoasService'
import GeneralService from '../GeneralService'
import Warnings from '../Warnings'

export default {
    props: ['edtId'],
    data(){
        let fillInputs = (userId)=>{
            this.allUsers.forEach(edtUser =>{
                if(edtUser.id == userId){
                    let pNome = edtUser.nome.split(' ')[0]
                    let sNome = edtUser.nome.split(' ')[1]
                    document.getElementById('pNome').value = pNome
                    document.getElementById('sNome').value = sNome

                    let inputs = document.querySelectorAll('.check-box')
                    for (let i = 0; i < inputs.length; i++) {
                      inputs[i].checked = false
                    }

                    edtUser.acessos.forEach(acesso =>{
                        document.getElementById('check'+acesso).checked = true
                    })

                    this.toEdit = edtUser.id
                }
            })
        }

        return{
            allUsers: [],
            toEdit: '',
            fillInputs,
            sessionToken: ''
        }
    },
    async created(){
        this.sessionToken = await GeneralService.getSession()

        try{
          this.allUsers = await PessoasService.getAll()
          if(this.edtId != ' '){
            this.fillInputs(this.edtId)
          }
        }catch(err){
          this.error = err.message
        }
    },
    methods: {
        tableSearcher() {
            var input, filter, table, tr, td, i
            input = document.getElementById("tableSearch")
            filter = input.value.toUpperCase()
            table = document.getElementById("table")
            tr = table.getElementsByTagName("tr")
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = ""
                    } else {
                        tr[i].style.display = "none"
                    }
                }       
            }
        },
        selectToEdt(userId){
            if(userId != this.sessionToken.user.user){
                this.fillInputs(userId)
            }else{
                let msg = 'Esta é a sua conta, vá para a pagina minha conta'
                Warnings.badWarning(msg)
            }
        },
        async tryEdtPrsn(userEdt){
            let newAcessos = []

            let inputs = document.querySelectorAll('.check-box')
            for (let i = 0; i < inputs.length; i++) {
              if(inputs[i].checked){
                newAcessos.push(inputs[i].id.slice(5))
              }
            }

            try{
                await PessoasService.updateUser(userEdt, newAcessos)
                let msg = 'Conta atualizada com sucesso'
                Warnings.goodWarning(msg)
                this.allUsers = await PessoasService.getAll()
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";
@import "../assets/scss/table";

table{
    margin-top: 12vh !important;

    .table-head{        

        & > .h-nome{
            width: 17vw;
        }
    }
}

</style>