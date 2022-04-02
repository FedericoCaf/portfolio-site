<template>

  <div class="container main-container d-flex align-items-center">

    <div class="box-circles d-flex flex-wrap justify-content-center">
      <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-one d-flex justify-content-center align-items-center">
         <a href="#2"> About </a>
      </div>
       <div data-aos="fade-down" data-aos-duration="2000" class="fc-circle fc-two d-flex justify-content-center align-items-center">
         <a href="#5"> Works</a>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" class="fc-circle fc-three d-flex justify-content-center align-items-center">
         <a href="#4">Contacts</a>
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



@media screen and (max-width: 768px) {
  [data-aos] {
    pointer-events: auto !important;
  }

  html:not(.no-js) [data-aos^=fade][data-aos^=fade] {
    opacity: 1 !important;
  }

  html:not(.no-js) [data-aos=fade-right] {
    transform: none !important;
  }
  html:not(.no-js) [data-aos=fade-down] {
    transform: none !important;
  }
  html:not(.no-js) [data-aos=fade-up] {
    transform: none !important;
  }

}


@media screen and (max-height: 500px) {
  [data-aos] {
    pointer-events: auto !important;
  }

  html:not(.no-js) [data-aos^=fade][data-aos^=fade] {
    opacity: 1 !important;
  }

  html:not(.no-js) [data-aos=fade-right] {
    transform: none !important;
  }
  html:not(.no-js) [data-aos=fade-down] {
    transform: none !important;
  }
  html:not(.no-js) [data-aos=fade-up] {
    transform: none !important;
  }

}


.main-container{

  height: calc(100vh - 75px);
  margin-top: -50px;
  // background-color: rgb(89, 65, 197);
 
 // background-color: rgb(89, 65, 197);
 
}

  .box-circles{

    max-width: 1000px;
    // width: 53%;
    // height: 500px;

        .fc-circle{
          border-radius: 50%;
            a{
              color: white;
              font-size: 30px;
            }
        }

          .fc-one{
            box-shadow: 5px 10px 8px 10px #260080;
            height: 20vw;
            width: 20vw;
            // transition: box-shadow 400ms cubic-bezier(.2,0,.7,1), transform 5ms cubic-bezier(.2,0,.7,1);
          }

          
          .fc-two{
            box-shadow: 5px 10px 8px 10px rgba(135, 53, 2, 0.801);
            height: 22vw;
            width: 22vw;
            margin-left: -60px;
            margin-top: -100px;
          }

          .fc-three{
            box-shadow: 5px 10px 8px 10px #029c42;
            height: 18vw;
            width: 18vw;
            margin-top: -100px;
          }
    
  }

  .box-img-title{
    width: 47%;
      h1{
        font-size: 80px;
        font-weight: 700;
      }
  }

  @media (min-width: 800px){
       .box-circles{
          .fc-one{
            transition: all 2s;
              &:hover{
                  transform: rotate(45deg);
                  box-shadow: 0 0 1px 15px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 30px #4c00fff3,
                  0 0 1px 45px rgba(rgba(85, 0, 255, 0.824), 0.1);
              }
          }

          
          .fc-two{
             transition: all 2s;
              &:hover{
                  transform: rotate(45deg);
                  box-shadow: 0 0 1px 15px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 30px rgba(rgba(255, 94, 0, 0.995), 0.8),
                  0 0 1px 45px rgba(rgba(255, 128, 0, 0.952), 0.1);
              }
          }

          .fc-three{
              transition: all 2s;
              &:hover{
                  transform: rotate(45deg);
                  box-shadow: 0 0 1px 15px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 30px rgba(rgba(0, 255, 132, 0.945), 0.7),
                  0 0 1px 45px rgba(rgba(0, 255, 132, 0.945), 0.1);
              }
          }
    
  }
  }


  @media (max-width: 1250px){

   .box-circles{

        .fc-circle{
         
            a{
              font-size: 23px;
            }
        }

          .fc-two{
            margin-left: -60px;
            margin-top: -100px;
          }

          .fc-three{
            margin-top: -100px;  
            margin-left: 100px;     
          }
    
    }

  }
  @media (max-width: 1000px){

   .box-circles{

        .fc-circle{
         
            a{
              font-size: 18px;
            }
        }

          .fc-one{
            width: 200px;
            height: 200px;
          }

          .fc-two{
           width: 200px;
            height: 200px;
          }

          .fc-three{
            width: 200px;
            height: 200px;   
          }
    
    }

     .box-img-title{
      
      h1{
        font-size: 60px;
      }
  }


  }


  @media (max-width: 800px){

   .box-circles{

        .fc-circle{
         
            a{
              font-size: 18px;
            }
        }

          .fc-one{
            width: 165px;
            height: 165px;
            margin: 0;   
          }

          .fc-two{
            width: 165px;
            height: 165px;
            margin: 0;
          }

          .fc-three{
             width: 165px;
            height: 165px; 
            margin: 0;  
          }
    
    }

  }

  @media (max-width:550px){

       .box-img-title{
        h1{
          font-size: 45px;
        }

        h3{
          font-size: 17px;
        }
  }
  }

  @media (max-width:450px){

 .box-circles{

   margin-top: -100px;

        .fc-circle{

            a{
              font-size: 18px;
            }
        }

          .fc-one{
            width: 135px;
            height: 135px;
            margin: 0;
          }

          .fc-two{
            width: 135px;
            height: 135px;
            margin: 0;
          }

          .fc-three{
             width: 135px;
            height: 135px; 
            margin: 0;  
          }
    
    }


       .box-img-title{
         margin-top: -70px;
        h1{
          font-size: 35px;
        }

        h3{
          font-size: 17px;
        }
  }
  }

  @media (max-height:500px){
         .box-img-title{
        h1{
          font-size: 45px;
        }

        h3{
          font-size: 17px;
        }
  }

  .box-circles{

        .fc-circle{
         
            a{
              font-size: 18px;
            }
        }

          .fc-one{
            width: 135px;
            height: 135px;
            margin: 0;
          }

          .fc-two{
            width: 135px;
            height: 135px;
            margin: 0;
          }

          .fc-three{
             width: 135px;
            height: 135px; 
            margin: 0;  
          }
    
    }
  }


</style>
