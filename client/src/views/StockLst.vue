<template>
  <div>
    <MenuComponent/>
    <StockLst/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import StockLst from '../components/StockLstComponent.vue'

export default {  
  name: 'stock',
  components: {
    MenuComponent,
    StockLst
  }
}
</script>

<style lang="scss">

</style>