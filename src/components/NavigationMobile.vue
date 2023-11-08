<template>
  <nav>
    <div class="nav__mobile--Wrapper">
      <ul>
        <router-link :to="{ name: 'home' }">
          <img :src="homeSvg" />
        </router-link>
        <router-link :to="{ name: 'about' }">
          <img :src="aboutSvg" />
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationMobile",
  computed: {
    homeSvg() {
      const currentRoute = this.$route.name;
      let svgPath = require("../assets/ic_mobile_navigarion_home@3x.png");
      if (currentRoute === "home") {
        svgPath = require("../assets/ic_mobile_navigarion_home_active@3x.png");
      } else {
        svgPath = require("../assets/ic_mobile_navigarion_home@3x.png");
      }
      return svgPath;
    },
    aboutSvg() {
      const currentRoute = this.$route.name;
      let svgPath = require("../assets/ic_mobile_navigarion_info@3x.png");
      if (currentRoute === "about") {
        svgPath = require("../assets/ic_mobile_navigarion_info_active@3x.png");
      } else {
        svgPath = require("../assets/ic_mobile_navigarion_info@3x.png");
      }
      return svgPath;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #ffffff;
  width: 100vw;
  position: fixed;
  bottom: 0;
}

.nav__mobile--Wrapper {
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 0px 0px 8px -1px rgb(183, 183, 183, 0.5);
}

ul {
  display: flex;
  gap: 200px;
  margin: 16px;
  padding: 0px;
}

a {
  transition-duration: 300ms;
}

/* a:hover, a.router-link-exact-active{
        font-weight: bold;
        color: #000000;
    } */

img {
  height: 25px;
}
</style>
