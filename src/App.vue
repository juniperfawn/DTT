<template>
  <Navigation class="showOnlyDesktop"/>
  <router-view/>
  <NavigationMobile class="showOnlyMobile"/>
</template>

<script>
import Navigation from './components/Navigation.vue'
import NavigationMobile from './components/NavigationMobile.vue';

export default {
  name: 'App',
  components: {
    Navigation, 
    NavigationMobile
  }
}
</script>

<style>
body{
  background-color: #f6f6f6;
  margin: 0px;
  padding: 0px;
}

 /*shows elements only for desktop view and hides elements for mobile view*/
 .showOnlyMobile{
        display: none;
  }

  @media (max-width: 750px){
    /*shows elements only for mobile view and hides elements for desktop view*/
    .showOnlyDesktop{
    display: none;
    }

    .showOnlyMobile{
      display: block;
    }
  }
</style>
