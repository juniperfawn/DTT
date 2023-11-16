<template>
  <div class="searchBar">
    <div class="searchBar__topWrapper showOnlyDesktop">
      <h1>Houses</h1>
      <router-link :to="{ name: 'form' }">
        <button class="btn__createNew">+ CREATE NEW</button>
      </router-link>
    </div>
    <div class="searchBar__topWrapper--mobile showOnlyMobile">
      <div></div>
      <h1>Houses</h1>
      <router-link :to="{ name: 'form' }">
        <img src="../assets/ic_plus_grey@3x.png" />
      </router-link>
    </div>
    <div class="searchBar__bottomWrapper">
      <div class="inputContainer">
        <img class="inputSearch__loupe" src="../assets/ic_search@3x.png" />
        <img
          v-if="showX"
          class="inputSearch__x"
          src="../assets/ic_clear@3x.png"
        />
        <input
          ref="searchField"
          type="search"
          placeholder="search for a house"
          v-model="searchQuery"
          @input="sortBySearch(searchQuery)"
        />
      </div>
      <div class="filterButtons">
        <button class="btn__filterPrice" @click="sortByPrice">Price</button>
        <button class="btn__filterSize" @click="sortBySize">Size</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(["properties", "showX"]),
  },
  methods: {
    ...mapActions(["sortByPrice", "sortBySize"]),
    sortBySearch(searchQuery) {
      this.$store.commit("sortBySearch", searchQuery);
    },
  },
};
</script>

<style scoped>
/*shows elements only for desktop view and hides elements for mobile view*/
.showOnlyMobile {
  display: none;
}

.searchBar {
  font-family: Montserrat;
  margin: 20px 350px 20px 350px;
}

.searchBar__topWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.searchBar__topWrapper h1 {
  font-size: 24px;
  font-weight: bold;
}

.searchBar__bottomWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 20px 0px;
}

/*button styling*/
button {
  display: inline-block;
  border: none;
  text-decoration: none;
  color: #ffffff;
  background-color: #eb5440;
  padding: 10px;
  transition-duration: 300ms;
}

button:hover {
  transform: scale(1.04);
  cursor: pointer;
}

.btn__createNew {
  width: 150px;
  border-radius: 5px;
}

.btn__filterPrice {
  width: 120px;
  border-radius: 5px 0px 0px 5px;
}

.btn__filterSize {
  background-color: #c3c3c3;
  width: 120px;
  border-radius: 0px 5px 5px 0px;
}

/*input styling*/
.inputContainer {
  width: 350px;
  position: relative;
}

.inputContainer img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.inputSearch__loupe {
  left: 10px;
  width: 16px;
}

.inputSearch__x {
  right: 10px;
  width: 16px;
}

input {
  border: none;
  background-color: #e8e8e8;
  border-radius: 5px;
  padding: 8px;
  padding-left: 40px;
  width: 100%;
}

input[type="search"]:focus {
  border: 1.5px solid #eb5440;
  outline: none;
}

/*to get rid of automatic blue 'x' in search bar*/
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  opacity: 0;
}

.inputSearch__x {
  opacity: 1;
}

.inputContainer__images {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  padding: 0px 10px 0px 10px;
  width: 100%;
  height: 100%;
}

.inputContainer__images img {
  height: 15px;
}

/*mobile styles*/
@media (max-width: 750px) {
  /*shows elements only for mobile view and hides elements for desktop view*/
  .showOnlyDesktop {
    display: none;
  }

  .showOnlyMobile {
    display: block;
  }

  .searchBar {
    margin: 0px;
    padding: 0px 20px 0px 20px;
  }

  .searchBar__topWrapper--mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .searchBar__topWrapper--mobile h1 {
    font-size: 18px;
  }

  .searchBar__topWrapper--mobile img {
    height: 20px;
  }

  .searchBar__bottomWrapper {
    display: block;
    margin-top: 10px;
  }

  button {
    font-size: 12px;
  }

  .filterButtons {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    align-self: center;
  }

  .btn__filterPrice,
  .btn__filterSize {
    width: 100%;
  }

  .inputContainer {
    width: 100%;
  }

  input {
    padding-left: 40px;
    width: 100%;
  }
}
</style>
