<template>

  <Header/>

  <MainTitle/>

  <About/>

  <Works/>

  <Contacts/>



</template>

<script>
import Header from './components/Header.vue'
import MainTitle from './components/MainTitle.vue'
import Works from './components/Works.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainTitle,
    Works,
    About,
    Contacts
  }
}
</script>

<style lang="scss">

@import "./assets/style/generals.scss";


</style>
