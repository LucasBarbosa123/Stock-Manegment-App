<template>
  <div>
    <MenuComponent :user="$route.params.id"/>
    <PessoasAddComponent/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import PessoasAddComponent from '../components/PessoasAddComponent.vue'

export default {  
  name: 'pessoaslst',
  components: {
    MenuComponent,
    PessoasAddComponent
  }
}
</script>

<style lang="scss">

</style>