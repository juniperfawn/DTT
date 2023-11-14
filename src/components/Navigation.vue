<template>
  <nav>
    <div class="nav__items--Wrapper">
      <router-link :to="{ name: 'home' }">
        <img src="../assets/img_logo_dtt@3x.png" />
      </router-link>
      <ul>
        <li class="link___houses">
          <router-link :to="{ name: 'home' }">Houses</router-link>
        </li>
        <li class="link___about">
          <router-link :to="{ name: 'about' }">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
nav {
  background-color: #ffffff;
  width: 100vw;
}

.nav__items--Wrapper {
  margin-left: 350px;
  margin-right: 350px;
  align-items: center;
  display: flex;
}

ul {
  display: flex;
  gap: 40px;
}

li {
  list-style-type: none;
}

a {
  font-family: Montserrat;
  font-weight: medium;
  text-decoration: none;
  color: #e8e8e8;
  font-size: 14px;
  transition-duration: 300ms;
}

a:hover,
a.router-link-exact-active {
  font-weight: bold;
  color: #000000;
}

img {
  height: 30px;
}
</style>
