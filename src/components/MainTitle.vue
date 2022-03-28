<template>

  <div class="container main-container d-flex align-items-center">

    <div class="box-circles d-flex flex-wrap justify-content-center">
      <div data-aos="zoom-in-right" data-aos-duration="2000" class="fc-circle fc-one d-flex justify-content-center align-items-center">
         <a href="#2"> About </a>
      </div>
       <div data-aos="zoom-in-left" data-aos-duration="2000" class="fc-circle fc-two d-flex justify-content-center align-items-center">
         <a href="#5"> Works</a>
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="2000" class="fc-circle fc-three d-flex justify-content-center align-items-center">
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

.main-container{

  height: calc(100vh - 90px);
  margin-top: -50px;
  // background-color: rgb(89, 65, 197);
 
 // background-color: rgb(89, 65, 197);
 
}

  .box-circles{
    max-width: 1000px;
    width: 53%;
    
  }

  .box-img-title{
    width: 47%;
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
  
      background-image: linear-gradient(to right, rgba(255, 0, 0, 0.856) , rgba(255, 238, 0, 0.822));

       height: 23vw;
       width: 23vw;

       transition: box-shadow 400ms cubic-bezier(.2,0,.7,1), transform 200ms cubic-bezier(.2,0,.7,1);
      
       
         &:hover{
            transform: rotate(45deg);
            box-shadow: 0 0 1px 15px rgba(rgba(0, 0, 0, 0.824), 0.4),
            0 0 1px 30px rgba(rgba(76, 25, 177, 0.824), 0.1),
            0 0 1px 45px rgba(rgba(76, 25, 177, 0.824), 0.1);
        }
    }

    

    .fc-two{
      // background-color:rgba(32, 171, 196, 0.747);
 
       background-image: linear-gradient(to bottom right, rgba(76, 25, 177, 0.824) , rgba(255, 0, 0, 0.856));
      height: 25vw;
      width: 25vw;
      margin-left: -90px;
      margin-top: -30px;

        transition: box-shadow 400ms cubic-bezier(.2,0,.7,1), transform 200ms cubic-bezier(.2,0,.7,1);
       
         &:hover{
            transform: rotate(45deg);
            box-shadow: 0 0 1px 15px rgba(rgba(0, 0, 0, 0.824), 0.4),
            0 0 1px 30px rgba(rgba(76, 25, 177, 0.824), 0.1),
            0 0 1px 45px rgba(rgba(76, 25, 177, 0.824), 0.1);
        }
    }
    .fc-three{
      // background-color:rgba(204, 77, 19, 0.74); -webkit-border-radius: 50%;
      background-image: linear-gradient(to top, rgba(255, 255, 0, 0.822) , rgba(96, 32, 214, 0.822));
      height: 20vw;
      width: 20vw;
      margin-top: -100px;

        transition: box-shadow 400ms cubic-bezier(.2,0,.7,1), transform 200ms cubic-bezier(.2,0,.7,1);
       
            &:hover{
            transform: rotate(45deg);
            box-shadow: 0 0 1px 15px rgba(rgba(0, 0, 0, 0.824), 0.4),
            0 0 1px 30px rgba(rgba(76, 25, 177, 0.824), 0.1),
            0 0 1px 45px rgba(rgba(76, 25, 177, 0.824), 0.1);
        }

    }

    @media (min-width: 1500px) {
   .fc-one{
    max-width: 350px;
    width: 350px;
    height: 350px;
  }
   .fc-two{
    min-width: 350px;
    width: 350px;
    height: 350px;
    margin-left: -60px;
      margin-top: -30px;
  }
   .fc-three{
    min-width: 350px;
    width: 350px;
    height: 350px;
    margin-top: -80px;
  }
}
    @media (max-width: 1100px) {
   .fc-one{
    min-width: 200px;
    width: 200px;
    height: 200px;
  }
   .fc-two{
    min-width: 200px;
    width: 200px;
    height: 200px;
    margin-left: 0;
      margin-top: -30px;
  }
   .fc-three{
    min-width: 200px;
    width: 200px;
    height: 200px;
    margin-top: -60px;
  }

  .box-img-title{
      h1{
        font-size: 60px;
      } 
      h3{
        font-size: 18px;
      } 
  }
}

@media (max-width: 700px){
    .box-img-title h1{
      font-size: 40px;
  }
}

    @media (max-width: 470px) {

 .fc-circle{
        a{
          font-size: 15px;
        }
    }

    .box-img-title{
      h1{
        font-size: 30px;
      } 
      h3{
        font-size: 13px;
      } 
  }

   .fc-one{
    min-width: 120px;
    width: 120px;
    height: 120px;
  }
   .fc-two{
    min-width: 120px;
    width: 120px;
    height: 120px;
    margin-left: 0;
      margin-top: -20px;
  }
   .fc-three{
    min-width: 120px;
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
}

</style>
