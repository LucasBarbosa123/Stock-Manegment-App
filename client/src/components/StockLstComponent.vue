<template>
	<div class="content-container">
		<div class="search-container">
			
			<div class="search-options" id="choosenColumn" @click="openOptions">Nome</div>
            <div class="search-drop-down" id="searchDropDown" v-if="searchDropDown">
                <div id="nomeOpt" data-custom-value="0" @click="columnChooser">Nome</div>
                <div id="tamanoOpt" data-custom-value="1" @click="columnChooser">Tamano</div>
                <div id="corOpt" data-custom-value="2" @click="columnChooser">Cor</div>
                <div id="quantidadeOpt" data-custom-value="3" @click="columnChooser">Quantidade</div>
                <div id="tipoOpt" data-custom-value="4" @click="columnChooser">Tipo</div>
                <div id="marcaOpt" data-custom-value="5" @click="columnChooser">Marca</div>
                <div id="codProdOpt" data-custom-value="6" @click="columnChooser">Cód. Produto</div>
            </div>

		    <div class="search-bar">
                <i class="fa-brands fa-searchengin fa-xl"></i>
                <input type="text" id="tableSearch" @keyup="tableSearcher">
            </div>
		</div>
		<table id="table">
			<tr class="table-head">
                <th class="h-nome">Nome</th>
                <th class="h-tamanho">Tamanho</th>
				<th class="h-cor">Cor</th>
                <th class="h-quantidade">Quantidade</th>
                <th class="h-tipo">Tipo</th>
                <th class="h-marca">Marca</th>
				<th class="h-product-code">Cód. Produto</th>
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
import StockService from '../StockService'

export default {
    data(){
		return{
			ferros: [],
			geral: [],
			placas: [],
			rolos: [],
			roupas: [],
			searchedColumn: 0,
			searchDropDown: false
		}
	},
	async created(){
		const stock = await StockService.getAll()

		this.ferros = stock.ferros
		this.geral = stock.geral
		this.placas = stock.placas
		this.rolos = stock.rolos
		this.roupas = stock.roupas
	},
	methods: {
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
		openOptions(){
            this.searchDropDown = !this.searchDropDown

        },
		columnChooser(e){
            let columnName = document.getElementById(e.target.id).textContent
            document.getElementById('choosenColumn').textContent = columnName

            this.searchedColumn = document.getElementById(e.target.id).getAttribute('data-custom-value')

            this.searchDropDown = false
        },
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

.search-container{
	margin-left: 59.5vw;

	& > .search-drop-down{
		left: 61.95vw;
	}
}
</style>