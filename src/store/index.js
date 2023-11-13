import { createStore } from "vuex";
import tempImage from "../assets/img_placeholder_house@3x.png";

export default createStore({
  state: {
    tempImage: tempImage,
    formData: "",
    properties: [],
    displayedProperties: [],
    isPriceAscending: true,
    isSizeAscending: false,
    showModal: false,
    nothingFound: false,
    showX: false,
    category: "all",
  },
  getters: {
    getListingById: (state) => (id) => {
      let foundListing = state.properties.find((item) => {
        if (item.id == id) {
          return item;
        }
      });
      return foundListing;
    },
  },
  mutations: {
    setFavorite(state, id) {
      let listingFav = state.properties[id].favorite;
      if (!listingFav) {
        state.properties[id].favorite = true;
        state.properties[id].favoriteMessage = "UNFAVORITE";
      } else {
        state.properties[id].favorite = false;
        state.properties[id].favoriteMessage = "FAVORITE";
      }
      state.displayedProperties = state.properties;
    },
    setShowModal(state) {
      if (!state.showModal) {
        state.showModal = true;
      } else {
        state.showModal = false;
      }
    },
    setDisplayProperties(state) {
      state.category = "all";
      state.displayedProperties = state.properties;
    },
    setFormData(state, data) {
      // Generate a unique ID
      data.id = state.properties.length;
      if (data.picture == "") {
        data.picture = tempImage;
      }
      //format price value to a string with '.' as the seperator
      if (data.price > 999) {
        data.price = data.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      } else {
        data.price = data.price.toString();
      }
      state.properties.push(data);
      state.displayedProperties = state.properties;
    },
    setEditedData(state, data) {
      state.properties[data.listingId] = data.formData;
      state.displayedProperties = state.properties;
    },
    sortByFavorite(state) {
      state.category = "favorite";
      state.displayedProperties = state.displayedProperties.filter(
        (property) => property.favorite == true
      );
    },
    sortByPrice(state) {
      if (state.isPriceAscending) {
        state.displayedProperties.sort((a, b) => a.price - b.price);
        state.isPriceAscending = !state.isPriceAscending;
      } else {
        state.displayedProperties.sort((a, b) => b.price - a.price);
        state.isPriceAscending = !state.isPriceAscending;
      }
    },
    sortBySize(state) {
      if (state.isSizeAscending) {
        state.displayedProperties.sort((a, b) => a.size - b.size);
        state.isSizeAscending = !state.isSizeAscending;
      } else {
        state.displayedProperties.sort((a, b) => b.size - a.size);
        state.isSizeAscending = !state.isSizeAscending;
      }
    },
    deleteListing(state, itemToDelete) {
      const index = state.properties.findIndex(
        (item) => item.id === itemToDelete
      );
      if (index !== -1) {
        state.properties.splice(index, 1);
      }
      for (let i = 0; i < state.properties.length; i++) {
        state.properties[i].id = i;
      }
      state.displayedProperties = state.properties;
    },
    sortBySearch(state, searchQuery) {
      const query = searchQuery.toLowerCase();
      if (searchQuery.length > 0) {
        state.showX = true;
      } else {
        state.showX = false;
      }
      //state.category to determine if search query through all listings or just favorited list
      state.displayedProperties = state.properties.filter((listing) => {
        if (state.category == "all") {
          return listing.streetName.toLowerCase().includes(query);
        } else if (state.category == "favorite") {
          return (
            listing.streetName.toLowerCase().includes(query) &&
            listing.favorite == true
          );
        }
      });
      if (state.displayedProperties.length == 0) {
        state.nothingFound = true;
      } else {
        state.nothingFound = false;
      }
    },
    SET_PROPERTIES(state, properties) {
      let newData = properties.map((property) => {
        return {
          streetName: property.location.street,
          houseNumber: property.location.houseNumber,
          houseNumberAdd: property.location.houseNumberAddition,
          price: property.price,
          postalCode: property.location.zip,
          city: property.location.city,
          bedrooms: property.rooms.bedrooms,
          bathrooms: property.rooms.bathrooms,
          garage: property.hasGarage ? "Yes" : "No",
          size: property.size,
          constructionDate: property.constructionYear,
          picture: property.image,
          description: property.description,
          id: null,
          isUserMade: property.madeByMe,
          favorite: false,
          favoriteMessage: "FAVORITE",
        };
      });
      //re-assign all listing to page-id schema
      for (let i = 0; i < newData.length; i++) {
        newData[i].id = i;
        //re-format price to fit schema
        if (newData[i].price > 999) {
          newData[i].price = newData[i].price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
          newData[i].price = newData[i].price.toString();
        }
      }
      state.properties = newData;
      state.displayedProperties = state.properties;
    },
  },
  actions: {
    sortByPrice({ commit }) {
      commit("sortByPrice");
    },
    sortBySize({ commit }) {
      commit("sortBySize");
    },
    sortBySearch({ commit }) {
      commit("sortBySearch");
    },
    sortByFavorite({ commit }) {
      commit("sortByFavorite");
    },
    setDisplayProperties({ commit }) {
      commit("setDisplayProperties");
    },
    getApiProperties({ commit }) {
      fetch("https://api.intern.d-tt.nl/api/houses", {
        methods: "GET",
        headers: {
          Accept: "application/json",
          "X-Api-Key": "eZAMbHDt3QsdXruE-qUlyKYGxif5J9kN",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          commit("SET_PROPERTIES", data);
        })
        .catch((error) => console.log("ERROR" + error));
    },
  },
  modules: {},
});
