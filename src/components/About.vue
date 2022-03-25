<template>
<div id="2" class="container-fluid container-global">

   <div class="box-circles">
      <div class="fc-circle fc-one d-flex justify-content-center align-items-center">
         <a href="#1"> Home</a>
      </div>
       <div class="fc-circle fc-two d-flex justify-content-center align-items-center">
         <a href="#5"> Works</a>
      </div>
      <div class="fc-circle fc-three d-flex justify-content-center align-items-center">
         <a href="#4">Contacts</a>
      </div>
    </div>

  <div class="container">
   <h2 class="pt-5 pb-5"> Riguardo a me </h2>
   <div id="3" class="container-skills container d-flex flex-wrap">
 
     <div class="container-text"> 
        <p> Non mi piace definirmi in base al lavoro che ho fatto. Io definisco me stesso in base al lavoro che voglio fare. Preferisco continuare ad imparare e sfidare me stesso nel fare cose interessanti che contano.
        Sono uno studente veloce, in grado di acquisire nuove abilità e destreggiarsi tra diversi progetti e ruoli con relativa facilità.
        Alimentato da un entusiasmo sconfinato, sono sempre più che disposto a seguire le mie passioni, <br> ovunque mi portino.
         </p>

     </div>
     <div class="container-icon text-center">
          <img src="../assets/img/skills.png" alt="">
     </div>
     <div class="container-text"> 
        <p> Non mi piace definirmi in base al lavoro che ho fatto. Io definisco me stesso in base al lavoro che voglio fare. Preferisco continuare ad imparare e sfidare me stesso nel fare cose interessanti che contano.
        Sono uno studente veloce, in grado di acquisire nuove abilità e destreggiarsi tra diversi progetti e ruoli con relativa facilità.
        Alimentato da un entusiasmo sconfinato, sono sempre più che disposto a seguire le mie passioni, <br> ovunque mi portino.
         </p>

     </div>
     <div class="container-icon text-center">
          <img src="../assets/img/skills.png" alt="">
     </div>

   </div>


 </div>
</div> 
</template>

<script>

export default {
  
  name: 'About', 

}
</script>

<style lang="scss" scoped>

@import "../assets/style/generals.scss";


  .box-circles{
    position: absolute;
    top: 0;
    right:0;
    padding: 20px;
    // max-width: 1000px;
    // width: 65%;
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
          font-size: 20px;
        }
    }

    .fc-one{
      // background-color: rgba(47, 201, 47, 0.808);
      background-image: linear-gradient(to bottom left, rgba(0, 110, 255, 0.856) , rgba(235, 12, 235, 0.904));
       height: 100px;
      width: 100px;
    }
    .fc-two{
      // background-color:rgba(32, 171, 196, 0.747);
       background-image: linear-gradient(to bottom right, rgba(71, 15, 182, 0.87) , rgba(255, 0, 0, 0.856));
      height: 100px;
      width: 100px;
      // margin-left: -90px;
      margin-top: -15px;
    }
    .fc-three{
    
      // background-color:rgba(204, 77, 19, 0.74);
      background-image: linear-gradient(to top, rgba(255, 255, 0, 0.822) , rgba(96, 32, 214, 0.822));
      height: 100px;
      width: 100px;
      margin-top: -15px;

    }

.container-global{
  position: relative;
   width: 100%;
   background-color: #F5F3EA;
}

.container-skills{
 
    height: 100vh;
  // padding: 0 0 0px 120px;
  //  margin-bottom: 500px;
    .container-text{
      // width: 40%;
      width: 600px;
      // height: 500px;
      // overflow: auto;
      // padding: 20px;
      // padding-top: 40px;
        p{
          font-size: 21px;
        }
    }
    .container-icon{
      // width: 60%;
      width: 600px;
      border-radius: 50px;
      overflow: hidden;
      // height: 500px;
        img{
          width: 100%;
        }
    }
}

.skill-item{
  height: 130px;
  // display: flex;
  line-height: 130px;
  // width: calc(100% / 9);
  width: 130px;
  float: left;
  // margin: 0 60px 20px 30px;
  // background-image: url('../assets/img/laravel-logo.png');
  // background-position: center;
  // background-size: contain;
  // background-repeat: no-repeat;
  // margin-left: 100px;
  // animation: slide 15s linear infinite;

     img{
        //height: 100%;;
        width: 100%;
     }
}


  
</style>
