<template>
  <div>
    <MenuComponent :user="$route.params.id"/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'

export default {  
  name: 'stock',
  components: {
    MenuComponent
  }
}
</script>

<style lang="scss">

</style>