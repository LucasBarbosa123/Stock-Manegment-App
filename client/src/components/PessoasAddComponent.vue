<template>
  <div class="content-container">
    <div class="add-container">
        <input type="text" id="pNome" placeholder="Nome">
        <input type="text" id="pSome" placeholder="Apelido">
        <input type="text" id="email" placeholder="Email">
        <input type="text" id="emailRep" placeholder="Confirmar email">
        
        <div class="acessos-container">
          <div>
            <input type="checkbox" name="Stock" id="">
            <label for="Stock">Stock</label>
          </div>
          <div>
            <input type="checkbox" name="Pessoas" id="">
            <label for="Stock">Pessoas</label>
          </div>
        </div>

        <button>
          <p>
            Adicionar
          </p>
        </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/scss/colors";

.add-container{
    display: flex;
    flex-direction: column;
    width: 20vw;
    margin-left: 33.5vw;
    margin-top: 12vh;
    background-color: $white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border: 0.5vh solid $grey;
    border-radius: 1vh;
    padding: 1.5vw;
    
    & > input{
      margin-bottom: 3vh;
      height: 3.5vh;
      width: 18vw;
      border-radius: 1vh;
      font-size: 2.25vh;
      padding-left: 0.5vw;
      padding-right: 0.5vw;
    }

    & > .acessos-container{
      margin-bottom: 3vh;
      display: flex;
      justify-content: space-between;

      & > div{
        & > input{
          height: 3.5vh;
          width: 2vw;
        }

        & > label{
          margin-bottom: max;
        }
      }
    }

    & > button{
        background-color: $positive-color;
        border-color: $light-grey;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 20px;
        border-radius: 1vh;
        font-size: 1.1vw;
        cursor: pointer;
        width: 10vw;
        margin-left: auto;
        margin-right: 0.5vw;
        
        & > p{
            padding: 1vh;
            margin: 0;
            color: $dark-grey;

            &:hover{
                color: $white;
            }
        }                    
    }
}
</style>