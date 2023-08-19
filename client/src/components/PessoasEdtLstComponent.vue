<template>
    <div class="list-container">
        <div class="serch-container">
            <i class="fa-brands fa-searchengin fa-xl"></i>
            <input type="text" id="tableSearch" @keyup="tableSearcher">
        </div>
        <table id="table">
            <tr class="table-head">
                <th class="h-nome">Nome</th>
            </tr>
            <tr v-for="u in allUsers" :key="u.id" class="table-body" @click="selectToEdt(u.id)">
                <td>{{u.nome}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import PessoasService from '../PessoasService'

export default {
    props: ['user'],
    data(){
        return{
            allUsers: []
        }
    },
    async created(){
        try{
          this.allUsers = await PessoasService.getAll()
        }catch(err){
          this.error = err.message
        }
    },
    methods: {
        tableSearcher() {
            var input, filter, table, tr, td, i;
            input = document.getElementById("tableSearch");
            filter = input.value.toUpperCase();
            table = document.getElementById("table");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }       
            }
        },
        selectToEdt(userId){
            this.$emit('selected', userId)
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/table";

table{
    .table-head{        

        & > .h-nome{
            width: 17vw;
        }
    }
}

</style>