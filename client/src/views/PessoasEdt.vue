<template>
  <div>
    <MenuComponent :user="$route.params.id"/>
    <div class="content-container edt">
      <PessoasEdtLstComponent @selected="passEdtInfo"/>
      <PessoasEdtInptComponent :newEdtUser="edtUser"/>
    </div>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import PessoasEdtInptComponent from '../components/PessoasEdtInptComponent.vue'
import PessoasEdtLstComponent from '../components/PessoasEdtLstComponent.vue'

export default {  
  name: 'pessoaslst',
  components: {
    MenuComponent,
    PessoasEdtInptComponent,
    PessoasEdtLstComponent
  },
  data(){
    return{
      edtUser: ''
    }
  },
  methods: {
    passEdtInfo(userId){
      this.edtUser = userId
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/edt-page-strocture";

</style>