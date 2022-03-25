<template>

  <header class="d-flex justify-content-between">
    <div class="box-logo text-white">Logo</div>
     <ul class="d-flex">
       <li> <a href="#">Linkedin</a> </li>
       <li> <a href="#">Github</a> </li>
       <!-- <li> <a href="#">Works</a> </li>
       <li> <a href="#">Contacts</a> </li> -->
    
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
 
 header{
  //  height: 70px;
  //  line-height: 70px;
   padding: 25px;
  //  background-color: aqua;
     li{
       margin-left: 70px;
     }

     a{
       color: white;
     }
 }

</style>
