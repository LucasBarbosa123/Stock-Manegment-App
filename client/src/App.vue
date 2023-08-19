<template>
  <div id="warnings-container"></div>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/scss/colors";
@import "./assets/scss/warnings";

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  margin: 0;
}

::-webkit-scrollbar {
  width: 0.5vw;
}
::-webkit-scrollbar-track {
  background: $light-grey;  
}
::-webkit-scrollbar-thumb {
  background: $grey;
  border-radius: 10vh;

  &:hover{
    background: mix($dark-grey, $grey);
  }
}

.content-container{
  padding: 5vh;
  padding-top: 10vh;
  min-height: 85vh;
}

#warnings-container{
  position: absolute;
}
</style>
