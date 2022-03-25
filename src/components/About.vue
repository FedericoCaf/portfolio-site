<template>
<div class="container-fluid container-global">

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

.container-global{
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
