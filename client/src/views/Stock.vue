<template>
  <div>
    <MenuComponent/>
    <StockOpt/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import StockOpt from '../components/StockOptComponent.vue'

export default {  
  name: 'stock',
  components: {
    MenuComponent,
    StockOpt
  }
}
</script>

<style lang="scss">

</style>