<template>
  <router-link class="back__btn" :to="{ name: 'home' }">
    <img src="../assets/ic_back_grey@3x.png" />
    <p>Back to overview</p>
  </router-link>
</template>

<script>
export default {
  name: "OverviewBtn",
};
</script>

<style>
.back__btn {
  margin-left: 350px;
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  transition-duration: 300ms;
}

a {
  text-decoration: none;
  color: #000000;
}

.back__btn img {
  height: 25px;
}

.back__btn:hover {
  transform: scale(1.02);
}
</style>
