<template>
  <div class="works-container">

       <div class="box-circles d-flex">

       <a href="#1"> 
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-one d-flex justify-content-center align-items-center">
             Home  
          </div>
       </a> 

       <a href="#2">
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-two d-flex justify-content-center align-items-center">
          About
         </div>
       </a>
       
       <a href="#4"> 
          <div data-aos="fade-right" data-aos-duration="2000" class="fc-circle fc-three d-flex justify-content-center align-items-center">
          Contacts
          </div>
       </a>
     
    </div>

      <h2 id="5" class="text-white container mb-5 pt-5">Alcuni dei miei lavori</h2>
     
     <div class="wrapper-items d-flex justify-content-center flex-wrap">
        
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
              {
                  img:   require("../assets/img/boolflix.png"),
                  link: 'https://github.com/FedericoCaf/vue-boolflix'         
              },
              {
                  img:   require("../assets/img/freelancers.png"),  
                  link: 'https://github.com/FedericoCaf/freelancersB'      
              },
              {
                  img:   require("../assets/img/dc-comic.png"),
                  link: 'https://github.com/FedericoCaf/vue-dc-comics',            
              },
              {
                  img:   require("../assets/img/boolzapp.png"), 
                  link: 'https://github.com/FedericoCaf/vue-boolzapp',          
              },
              {
                  img:   require("../assets/img/avada.png"),
                  link: 'https://github.com/FedericoCaf/proj-html-vuejs',          
              },
              {
                  img:   require("../assets/img/playstation.png"),
                  link:  'https://github.com/FedericoCaf/htmlcss-playstation',          
              },
              {
                  img:   require("../assets/img/dischi-api.png"), 
                  link: 'https://github.com/FedericoCaf/php-ajax-dischi',            
              },
              {
                  img:   require("../assets/img/spotify-img.png"), 
                  link:  'https://github.com/FedericoCaf/html-css-spotifyweb',           
              },
              {
                  img:   require("../assets/img/discord.png"),
                  link: 'https://github.com/FedericoCaf/htmlcss-discord',           
              },
              {
                  img:   require("../assets/img/campoMinato.png"),
                  link: 'https://github.com/FedericoCaf/js-campominato-dom'            
              },
                


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
      a{
          color: white;
          font-size: 15px;
        }
    // max-width: 1000px;
    // width: 65%;
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
      margin-top: -5px;
    }
    .fc-two{
      // background-color:rgba(32, 171, 196, 0.747);
        background-image: linear-gradient(to right, rgba(255, 0, 0, 0.856) , rgba(255, 255, 0, 0.822));
      height: 100px;
      width: 100px;
      // margin-left: -90px;
      margin-top: -5px;
      // margin-left: -10px;
    }
    .fc-three{
    
      // background-color:rgba(204, 77, 19, 0.74);
      background-image: linear-gradient(to top, rgba(255, 255, 0, 0.822) , rgba(96, 32, 214, 0.822));
      height: 100px;
      width: 100px;
      margin-top: -5px;
      // margin-left: -10px;

    }

  .works-container{
   //   padding-top: 100px;
    position: relative;
    min-height: 100vh;
   // margin-bottom: 300px;
      .wrapper-items{
        width: 100%;
      }
  }

  @media (max-width: 700px){

  .box-circles{ 
    visibility: hidden;
  }
}

  
</style>