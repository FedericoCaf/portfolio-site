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
                  link: 'https://federico-boolflix.netlify.app/',
                  title: 'Boolflix'    
              },
              {
                  img:   require("../assets/img/avada.png"),
                  link: 'https://avada-consultant-theme.netlify.app/', 
                  title: 'Avada Consult'         
              },
              {
                  img:   require("../assets/img/playstation.png"),
                  link:  'https://federicocaf.github.io/htmlcss-playstation/',  
                  title: 'Playstation'        
              },
              {
                  img:   require("../assets/img/spotify-img.png"), 
                  link:  'https://federicocaf.github.io/html-css-spotifyweb/', 
                  title: 'Spotify Web'          
              },
              {
                  img:   require("../assets/img/campoMinato.png"),
                  link: 'https://federicocaf.github.io/js-campominato-dom/',     
                  title: 'Minefield'       
              },        
              {
                  img:   require("../assets/img/freelancers.png"),  
                  link: 'https://github.com/FedericoCaf/freelancersB',
                  title: 'B-Freelancers'      
              },
              {
                  img:   require("../assets/img/dc-comic.png"),
                  link: 'https://github.com/FedericoCaf/vue-dc-comics',
                  title: 'Dc Comics'            
              },
              {
                  img:   require("../assets/img/boolzapp.png"), 
                  link: 'https://federicocaf.github.io/vue-boolzapp/',     
                  title: 'Boolzapp'     
              },
              {
                  img:   require("../assets/img/dischi-api.png"), 
                  link: 'https://federico-discs.netlify.app/',   
                  title: 'Discs'         
              },
             
              {
                  img:   require("../assets/img/discord.png"),
                  link: 'https://federicocaf.github.io/htmlcss-discord/', 
                  title: 'Discord'          
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
      color: white;
       
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
     box-shadow: 5px 3px 8px 3px #260080;
      height: 100px;
      width: 100px;
        transition: all 0.5s;
         &:hover{
                  box-shadow: 0 0 1px 5px rgba(rgba(0, 0, 0, 0.824), 0.4),
                  0 0 1px 10px #560eff,
                  0 0 1px 20px rgba(rgba(55, 0, 255, 0.856), 0.1);
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