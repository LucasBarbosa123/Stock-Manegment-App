<template>
  <div>
    <MenuComponent/>
    <PessoasEdtComponent :edtId="$route.params.edtId"/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import PessoasEdtComponent from '../components/PessoasEdtComponent.vue'

export default {  
  name: 'pessoaslst',
  components: {
    MenuComponent,
    PessoasEdtComponent
  }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/edt-page-strocture";

</style>