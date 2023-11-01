import { createStore } from "vuex";

export default createStore({
  state: {
    formData: "",
    userMadeProperties: [
      {
        streetName: "Jan Evertsenplaats",
        houseNumber: "98",
        price: 790.0,
        postalCode: "3012HS",
        city: "Rotterdam",
        bedrooms: 2,
        bathrooms: 1,
        size: 100,
        id: 1,
      },
      {
        streetName: "Bergselaan",
        houseNumber: "157",
        price: 590.0,
        postalCode: "3037BJ",
        city: "Rotterdam",
        bedrooms: 4,
        bathrooms: 2,
        size: 400,
        id: 2,
      },
      {
        streetName: "Vista Drive",
        houseNumber: "275",
        price: 50000,
        postalCode: "81601",
        city: "Glenwood Springs",
        bedrooms: 4,
        bathrooms: 4,
        size: 50,
        id: 3,
      },
    ],
    preGeneratedProperties: [],
    isPriceAscending: true,
    isSizeAscending: false,
  },
  getters: {
    getListingById: (state) => (id) => {
      let foundListing = state.userMadeProperties.find((item) => {
        if (item.id == id) {
          return item;
        }
      });
      return foundListing;
    },
  },
  mutations: {
    setFormData(state, data) {
      data.id = state.userMadeProperties.length + 1; // Generate a unique ID
      state.userMadeProperties.push(data);
    },
    sortByPrice(state) {
      if (state.isPriceAscending) {
        state.userMadeProperties.sort((a, b) => a.price - b.price);
        state.isPriceAscending = !state.isPriceAscending;
      } else {
        state.userMadeProperties.sort((a, b) => b.price - a.price);
        state.isPriceAscending = !state.isPriceAscending;
      }
    },
    sortBySize(state) {
      if (state.isSizeAscending) {
        state.userMadeProperties.sort((a, b) => a.size - b.size);
        state.isSizeAscending = !state.isSizeAscending;
      } else {
        state.userMadeProperties.sort((a, b) => b.size - a.size);
        state.isSizeAscending = !state.isSizeAscending;
      }
    },
    deleteListing(state, itemToDelete) {
      console.log("I made it to delete listing");
      console.log("itemToDelete is " + itemToDelete);
      const index = state.userMadeProperties.findIndex(
        (item) => item.id === itemToDelete
      );
      if (index !== -1) {
        state.userMadeProperties.splice(index, 1);
      }
    },
  },
  actions: {
    sortByPrice({ commit }) {
      commit("sortByPrice");
    },
    sortBySize({ commit }) {
      commit("sortBySize");
    },
  },
  modules: {},
});
