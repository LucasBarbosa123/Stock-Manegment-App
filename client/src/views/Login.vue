<template>
  <div class="login-background">
    <div class="login-container">
      <h1 class="title" id="title">{{greeting}}</h1>
      <LoginComponent/>
    </div>    
  </div>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue'
import GeneralService from '../GeneralService'

export default {
  name: 'login',
  data(){
    return{
      greeting: ''
    }
  },
  components: {
    LoginComponent
  },
  async created(){
    let time = await GeneralService.getClientTime()
    time = time.slice(0, -6)

    if(time>5 && time<12){
      this.greeting = 'Bom dia'
    } else if(time>11 && time<20){
      this.greeting = 'Boa Tarde'
    } else{
      this.greeting = 'Boa Noite'
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/colors";

.login-background{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url('../assets/images/login-img.jpg');
  background-size: cover;
  color: $white;

  .login-container{
    background-color: #0c0c0cc4;
    margin: auto;
    width: fit-content;
    margin-top: 25vh;
    border-radius: 20px;
    padding: 0.1vw;
  }

  .title{
    margin-bottom: 0;
  }
}
</style>