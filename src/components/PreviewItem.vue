<template>

      <div class="container-glob">
        <div class="container-preview"> <img :src="preview.img" alt=""> 
            <div class="fc-overlay d-flex justify-content-center align-items-center"> 
                  <a :href="preview.link" target="_blank"> {{ preview.title }} </a>
            </div>
        </div>
      </div>
  
</template>

<script>
export default {
   name: "PreviewItem",
   props: {
     'preview': String
   }
}
</script>

<style lang = "scss" scoped>

@import "../assets/style/generals.scss";

.container-glob{
   width: calc(100% / 5);
          height: 19vw;
          position: relative;
          float: left;
          overflow: hidden;
}

.container-preview{
          position: absolute;
          top: 0;
          left: 0;
          transition: all 1s;
          /* border: 1px solid white; */
          
          /* width: 17.1vw;
          height: 17.1vw; */
          width: 100%;
          height: 100%;
             &:hover{
               transform: scale(1.4);
               z-index: 999;
             }

             &:hover .fc-overlay{
                background-color: rgba(31, 28, 28, 0);
                /* overflow: hidden; */
             }
             img{
              width: 100%;
              /* height: 100%; */
             }
       }
  .fc-overlay{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(112, 105, 105, 0.5);
          z-index: 999;
             &:hover a{
               display: block;
             }
             a{
                color: white;
                display: none;
                font-size: 14px;
                background-color: rgba(0, 0, 0, 0.6);
                border-radius: 30px;
                padding: 5px;
                transition: all 0.5s;
                  &:hover{
                     transform: scale(1.5);
                     color: white;
                  }
             }
           
       }

       @media (max-width:1100px){
          .container-glob{
              width: 300px;
              height: 300px;
               position: relative;
               display: flex;
               justify-content: center;
               overflow: hidden;

                 &:last-child{
                   display: none;
               }
         }
       }

       @media (max-width:900px){
          .container-glob:last-child{
             display: block;         
         }
       }

</style>