<template>
  <div>
    <MenuComponent/>
    <StockAdd/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import StockAdd from '../components/StockAddComponent.vue'

export default {  
  name: 'stock',
  components: {
    MenuComponent,
    StockAdd
  }
}
</script>

<style lang="scss">

</style>