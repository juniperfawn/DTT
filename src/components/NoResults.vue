<template>
  <div v-if="nothingFound" class="noResults__wrapper">
    <img src="../assets/img_empty_houses@3x.png" />
    <p>No results found.</p>
    <p>Please try another keyword.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NoResults",
  computed: {
    ...mapState(["nothingFound"]),
  },
};
</script>

<style scoped>
.noResults__wrapper {
  color: #4a4b4c;
  font-family: Montserrat;
  text-align: center;
  margin-top: 150px;
  font-size: 12px;
}

.noResults__wrapper img {
  height: 200px;
  margin: auto;
  padding-bottom: 20px;
}

/*mobile styles*/
@media (max-width: 750px) {
  .noResults__wrapper img {
    height: 100px;
  }
}
</style>
