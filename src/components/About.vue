<template>
<div id="2" class="container-fluid container-global">

   <div class="box-circles d-flex">

       <a href="#1"> 
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-one d-flex justify-content-center align-items-center">
             Home  
          </div>
       </a> 

       <a href="#5">
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-two d-flex justify-content-center align-items-center">
          Works
         </div>
       </a>
       
       <a href="#4"> 
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-three d-flex justify-content-center align-items-center">
          Contacts
          </div>
       </a>
     
    </div>


   <h2 class="pt-5 pb-5 container"> Riguardo a me </h2>
   <div id="3" class="container-skills container d-flex justify-content-center align-content-start flex-wrap">
 
     <div class="container-text p-4"> 
        <p> Sono un full stack web developer di Roma.
      
          Realizzo web application o siti di design utlizzando le più moderne ed efficienti tecnologie. <br>
          Cerco sempre di migliorarmi per scrivere un codice pulito ed elegante. 
          Sono una persona creativa, mi piace risolvere problemi con soluzioni semplici e belle da vedere. 
         </p>

     </div>
     <div class="container-photo text-center">
          <img src="../assets/img/profOK.png" alt="foto">
     </div>
      <div class="container-icon text-center">
          <img src="../assets/img/skills.png" alt="">
     </div>
     <div class="container-text p-2"> 
        <p> Non mi piace definirmi in base al lavoro che ho fatto. Io definisco me stesso in base al lavoro che voglio fare. Preferisco continuare ad imparare e sfidare me stesso nel fare cose interessanti che contano.
        Sono uno studente veloce, in grado di acquisire nuove abilità e destreggiarsi tra diversi progetti e ruoli con relativa facilità.
        Alimentato da un entusiasmo sconfinato, sono sempre più che disposto a seguire le mie passioni, <br> ovunque mi portino.
         </p>

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
    // display: block;
    // max-width: 1000px;
    // width: 65%;
       a{
          color: white;
          font-size: 15px;
        }
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
     
    }
    .fc-three{
    
      // background-color:rgba(204, 77, 19, 0.74);
      background-image: linear-gradient(to top, rgba(255, 255, 0, 0.822) , rgba(96, 32, 214, 0.822));
      height: 100px;
      width: 100px;
   

    }

.container-global{
  position: relative;
   width: 100%;
   background-color: #F5F3EA;
}

.container-skills{
 
    min-height: 100vh;

    .container-text{
       width: 500px;
      //  height: 250px;
        p{
          font-size: 20px;
        }
    }
    .container-photo{
      width:   500px;
      // height: 250px;
      padding-bottom: 40px;
      border-radius: 50%;
      // margin-bottom: 30px;
        img{
          width: 100%;
          border-radius: 10px;
        }
    }
    .container-icon{
      width:   500px;
      // height: 250px;
      border-radius: 50%;
        img{
          width: 100%;
          border-radius: 10px;
        }
    }
}

@media (max-width: 700px){

  .box-circles{ 
    visibility: hidden;
  }

     .container-skills .container-text p{
      font-size: 18px;
    }
}


  
</style>
