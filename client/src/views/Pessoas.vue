<template>
  <div>
    <MenuComponent/>
    <PessoasOpt/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import PessoasOpt from '../components/PessoasOptComponent.vue'

export default {  
  name: 'pessoas',
  components: {
    MenuComponent,
    PessoasOpt
  }
}
</script>

<style lang="scss">

</style>