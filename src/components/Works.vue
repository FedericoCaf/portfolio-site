<template>
  <div class="works-container">

       <div class="box-circles d-flex">
            <div class="fc-circle fc-one d-flex justify-content-center align-items-center">
              <a href="#1"> Home</a>
            </div>
            <div class="fc-circle fc-two d-flex justify-content-center align-items-center">
              <a href="#2"> About</a>
            </div>
            <div class="fc-circle fc-three d-flex justify-content-center align-items-center">
              <a href="#4">Contacts</a>
            </div>
        </div>

      <h2 id="5" class="text-white container mb-5 pt-5">Alcuni dei miei lavori</h2>
     
     <div class="wrapper-items">
        
         <PreviewItem
            v-for="(preview, index) in previews" :key="index"
            :preview="preview"

         />
     </div>
           
      
  </div>
</template>

<script>

import PreviewItem from './PreviewItem.vue';

export default {
  
  name: 'Works',
  components:{
     PreviewItem
  },

  data(){
     return{

          previews:[ 
           
                    require("../assets/img/boolflix.png"),
                    require("../assets/img/freelancers.png"),   
                    require("../assets/img/dc-comic.png"), 
                    require("../assets/img/boolzapp.png"), 
                    require("../assets/img/avada.png"), 
                    require("../assets/img/playstation.png"),  
                    require("../assets/img/dischi-api.png"), 
                    require("../assets/img/spotify-img.png"), 
                    require("../assets/img/discord.png"), 
                    require("../assets/img/campoMinato.png"), 
                    

                 ]
     }
  }

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

   .fc-circle{
      // height: 24vw;
      // width: 24vw;
      border-radius: 50%;
        a{
          color: white;
          font-size: 15px;
        }
    }

    .fc-one{
      // background-color: rgba(47, 201, 47, 0.808);
      background-image: linear-gradient(to bottom left, rgba(0, 110, 255, 0.856) , rgba(235, 12, 235, 0.904));
       height: 100px;
      width: 100px;
      margin-top: -5px;
    }
    .fc-two{
      // background-color:rgba(32, 171, 196, 0.747);
        background-image: linear-gradient(to right, rgba(255, 0, 0, 0.856) , rgba(255, 255, 0, 0.822));
      height: 100px;
      width: 100px;
      // margin-left: -90px;
      margin-top: -5px;
      margin-left: -10px;
    }
    .fc-three{
    
      // background-color:rgba(204, 77, 19, 0.74);
      background-image: linear-gradient(to top, rgba(255, 255, 0, 0.822) , rgba(96, 32, 214, 0.822));
      height: 100px;
      width: 100px;
      margin-top: -5px;
      margin-left: -10px;

    }

  .works-container{
   //   padding-top: 100px;
    position: relative;
    height: 100vh;
   // margin-bottom: 300px;
      .wrapper-items{
        width: 100%;
      }
  }

  
</style>