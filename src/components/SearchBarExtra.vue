<template>
  <div class="searchBar__Extra">
    <div class="filterButtons">
      <button class="btn__filter--AllListings" @click="setDisplayProperties">
        All Listings
      </button>
      <button class="btn__filter--Favorite" @click="sortByFavorite">
        Favorites
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBarExtra",
  methods: {
    ...mapActions(["sortByFavorite", "setDisplayProperties"]),
  },
};
</script>

<style scoped>
.searchBar__Extra {
  font-family: Montserrat;
  margin: 20px 350px 20px 350px;
}

/*button styling*/
.filterButtons {
  display: flex;
  gap: 20px;
}

button {
  display: inline-block;
  border: none;
  text-decoration: none;
  color: #ffffff;
  background-color: #eb5440;
  opacity: 50%;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  transition-duration: 300ms;
}

button:hover {
  transform: scale(1.04);
  opacity: 100%;
  cursor: pointer;
}

/*mobile styles*/
@media (max-width: 750px) {
  .searchBar__Extra {
    margin: 0px;
    padding: 0px 20px 0px 20px;
  }

  .filterButtons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 10px;
  }

  .btn__filter--Favorite,
  .btn__filter--AllListings {
    width: 100%;
  }
}
</style>
