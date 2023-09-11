<template>
  <div>
    <MenuComponent/>
    <AccountEdtComponent/>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import AccountEdtComponent from '../components/AccountEdtComponent.vue'

export default {  
  name: 'pessoaslst',
  components: {
    MenuComponent,
    AccountEdtComponent
  }
}
</script>

<style lang="scss">

</style>