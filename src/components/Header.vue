<template>

  <header id="1" class="d-flex justify-content-between">
      <a href="#1"> 
        <div class="fc-circle fc-one d-flex justify-content-center align-items-center">
         
             
                 <span class="logo-font"> fc </span> 
           
          
         </div>
        </a>
     <ul class="d-flex">
       <li> <a target="_blank" href="https://www.linkedin.com/in/federico-cafiero-228ab3aa/"> <i class="fab fa-linkedin"></i>  </a> </li>
       <li> <a target="_blank" href="https://github.com/FedericoCaf"> <i class="fab fa-github-square"></i> </a> </li>
     </ul>
  </header>
 
</template>

<script>
export default {
  name: 'Header',

}
</script>


<style scoped lang="scss">

@import "../assets/style/generals.scss";

  .logo-font{
    font-family: 'Inspiration', cursive;
  }

  .fa-linkedin, .fa-github-square{
    font-size: 60px;
  }

 .fc-circle{
      // height: 24vw;
      // width: 24vw;
      border-radius: 50%;
        span{
          color: white;
          font-size: 45px;
        }
    }


      // background-color: rgba(47, 201, 47, 0.808);
      // background-image: linear-gradient(to bottom left, rgba(0, 110, 255, 0.856) , rgba(235, 12, 235, 0.904));
      //  height: 70px;
      // width: 70px;
      // min-width: 70px;

  .fc-one{
            box-shadow: 5px 3px 8px 3px #fe0000;
            height: 70px;
            width: 70px;
            min-width: 70px;
       
              }
    


 
 header{
   width: 100%;
  //  height: 70px;
  //  line-height: 70px;
    padding: 25px;
  //  background-color: aqua;
     li{
       margin-left: 40px;
     }

     a{
       color: white;
         &:hover{
           color: white;
         }
     }

 }

</style>
