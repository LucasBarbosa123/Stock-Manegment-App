<template>
	<div class="content-container">
		<div class="serch-container">
		    <i class="fa-brands fa-searchengin fa-xl"></i>
		    <input type="text" id="tableSearch" @keyup="tableSearcher">
		</div>
		<table id="table">
			<tr class="table-head">
                <th class="h-nome">Nome</th>
                <th class="h-tamanho">Tamanho</th>
				<th class="h-cor">Cor</th>
                <th class="h-quantidade">Quantidade</th>
                <th class="h-tipo">Tipo</th>
                <th class="h-marca">Marca</th>
				<th class="h-product-code">Cód. Proguto</th>
            </tr>

			<tr v-for="ferro in ferros" :key="ferro.Nome" class="table-body">
				<td>{{ferro.Nome}}</td>
				<td>{{ferro.Comprimento}}m</td>
				<td class="empty"></td>
				<td>{{ferro.Quantidade}}</td>
				<td class="empty"></td>
				<td class="empty"></td>
				<td>{{ferro.ProductCode}}</td>
			</tr>

			<tr v-for="ger in geral" :key="ger.Nome" class="table-body">
				<td>{{ger.Nome}}</td>
				<td class="empty"></td>
				<td>{{ger.Cor}}</td>
				<td>{{ger.Quantidade}}</td>
				<td class="empty"></td>
				<td class="empty"></td>
				<td>{{ger.ProductCode}}</td>
			</tr>

			<tr v-for="placa in placas" :key="placa.Nome" class="table-body">
				<td>{{placa.Nome}}</td>
				<td>{{placa.Tamanho}}</td>
				<td class="empty"></td>
				<td>{{placa.Quantidade}}</td>
				<td class="empty"></td>
				<td class="empty"></td>
				<td>{{placa.ProductCode}}</td>
			</tr>

			<tr v-for="rolo in rolos" :key="rolo.Nome" class="table-body">
				<td>{{rolo.Nome}}</td>
				<td>{{rolo.Tamanho}}</td>
				<td>{{rolo.Cor}}</td>
				<td>{{rolo.Quantidade}}</td>
				<td>{{rolo.Tipo}}</td>
				<td class="empty"></td>
				<td>{{rolo.ProductCode}}</td>
			</tr>

			<tr v-for="roupa in roupas" :key="roupa.Nome" class="table-body">
				<td>{{roupa.Nome}}</td>
				<td>{{roupa.Tamanho}}</td>
				<td>{{roupa.Cor}}</td>
				<td>{{roupa.Quantidade}}</td>
				<td class="empty"></td>
				<td>{{roupa.Marca}}</td>
				<td>{{roupa.ProductCode}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import Warnings from '../Warnings'
import GeneralService from '../GeneralService'
import StockService from '../StockService'

export default {
    data(){
		return{
			ferros: [],
			geral: [],
			placas: [],
			rolos: [],
			roupa: []
		}
	},
	async created(){
		const stock = await StockService.getAll()

		this.ferros = stock.ferros
		this.geral = stock.geral
		this.placas = stock.placas
		this.rolos = stock.rolos
		this.roupa = stock.roupa
	},
	methods: {
		tableSearcher() {
            var input, filter, table, tr, td, i;
            input = document.getElementById("tableSearch")
            filter = input.value.toUpperCase()
            table = document.getElementById("table")
            tr = table.getElementsByTagName("tr")
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0]
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = ""
                    } else {
                        tr[i].style.display = "none"
                    }
                }       
            }
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
            width: 10vw !important;
        }

        & > .h-tamanho{
            width: 10vw;
        }

        & > .h-product-code{
            width: 10vw;
        }

        & > .h-quantidade{
            width: 10vw;
        }

        & > .h-cor{
            width: 10vw;
        }
		
        & > .h-tipo{
            width: 10vw;
        }

        & > .h-marca{
            width: 10vw;
        }
    }
}
</style>