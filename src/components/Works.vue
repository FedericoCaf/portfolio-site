<template>
  <div id="2" class="works-container">
      <h2 class="text-white container mt-5 mb-5">Alcuni dei miei lavori</h2>
     
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

  .works-container{
   //   padding-top: 100px;
    height: 100vh;
   // margin-bottom: 300px;
      .wrapper-items{
        width: 100%;
      }
  }

  
</style>