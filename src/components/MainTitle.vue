<template>

  <div class="container main-container d-flex align-items-center">

    <div class="box-circles d-flex flex-wrap justify-content-center">
      <div class="fc-circle fc-one d-flex justify-content-center align-items-center">
         <p> <a href="#"> About</a></p>
      </div>
       <div class="fc-circle fc-two d-flex justify-content-center align-items-center">
         <p> <a href="#"> Works</a></p>
      </div>
      <div class="fc-circle fc-three d-flex justify-content-center align-items-center">
         <p> <a href="#">Contacts</a> </p>
      </div>
    </div>
      

    <div class="box-img-title">
       <h1 class="text-white">Ciao, sono <span class="text-secondary">Federico</span> </h1>
       <h3 class="text-white mt-3">benvenuti nel mio portfolio</h3>
    </div>
    
  </div>
 
</template>

<script>
export default {
  name: 'MainTitle',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.main-container{
  height: calc(100vh - 90px);
  // background-color: rgb(89, 65, 197);
 
 // background-color: rgb(89, 65, 197);
 
}

  .box-circles{
    max-width: 1000px;
    width: 65%;
  }

  .box-img-title{
    width: 35%;
      h1{
        font-size: 80px;
        font-weight: 700;
      }
  }

    .fc-circle{
      // height: 24vw;
      // width: 24vw;
      border-radius: 50%;
        a{
          color: white;
          font-size: 30px;
        }
    }

    .fc-one{
      // background-color: rgba(47, 201, 47, 0.808);
      background-image: linear-gradient(to right, rgba(255, 0, 0, 0.856) , rgba(255, 255, 0, 0.822));
       height: 23vw;
      width: 23vw;
    }
    .fc-two{
      // background-color:rgba(32, 171, 196, 0.747);
       background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));
      height: 25vw;
      width: 25vw;
      margin-left: -90px;
      margin-top: -30px;
    }
    .fc-three{
      // background-color:rgba(204, 77, 19, 0.74);
      background-image: linear-gradient(to top, rgba(255, 255, 0, 0.822) , rgba(76, 25, 177, 0.822));
      height: 20vw;
      width: 20vw;
      margin-top: -100px;

    }

</style>
