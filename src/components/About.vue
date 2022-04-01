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
   <div id="3" class="container-skills container d-flex justify-content-center flex-wrap">
 
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

         .fc-circle{
      // height: 24vw;
      // width: 24vw;
      border-radius: 50%;
      color: black;
       
    }

        .fc-one{
      // background-color: rgba(47, 201, 47, 0.808);
      // background-image: linear-gradient(to bottom left, rgba(0, 110, 255, 0.856) , rgba(235, 12, 235, 0.904));
      box-shadow: 5px 3px 8px 3px #9a0707e0;
       height: 100px;
      width: 100px;
      transition: all 0.5s;
         &:hover{
                  box-shadow: 0 0 1px 5px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 10px #ff0026f3,
                  0 0 1px 20px rgba(rgba(255, 0, 0, 0.824), 0.1);
              }
     
      }

    .fc-two{
      box-shadow: 5px 3px 8px 3px rgba(255, 98, 0, 0.801);
      height: 100px;
      width: 100px;
        transition: all 0.5s;
         &:hover{
                  box-shadow: 0 0 1px 5px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 10px #ff4d00f3,
                  0 0 1px 20px rgba(rgba(255, 89, 0, 0.824), 0.1);
              }
    }
    
    .fc-three{
      box-shadow: 5px 3px 8px 3px rgba(0, 255, 55, 0.804);
      height: 100px;
      width: 100px;
        transition: all 0.5s;
         &:hover{
                  box-shadow: 0 0 1px 5px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 10px #03f86df3,
                  0 0 1px 20px rgba(rgba(5, 242, 76, 0.824), 0.1);
              }
    }




  }

  .box-img-title{
    width: 35%;
      h1{
        font-size: 80px;
        font-weight: 700;
      }
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
       margin: 10px;
      //  height: 250px;
        p{
          font-size: 17px;
        }
    }
    .container-photo{
      width:   400px;
      border-radius: 50%;
      margin: 10px;
        img{
          width: 100%;
          border-radius: 10px;
        }
    }
    .container-icon{
      width:   500px;
      margin: 10px;
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
