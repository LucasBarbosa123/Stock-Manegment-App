<template>
  <div>
    <MenuComponent :user="$route.params.id"/>
    <PessoasLstComponent :user="$route.params.id"/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import PessoasLstComponent from '../components/PessoasLstComponent.vue'

export default {  
  name: 'pessoaslst',
  components: {
    MenuComponent,
    PessoasLstComponent
  }
}
</script>

<style lang="scss">

</style>