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
        constructionDate: 1990,
        description:
          "This charming A-frame cabin, nestled in the Rocky Mountains, offers a warm retreat with a rustic exterior, stone fireplace, and stunning views. Perfect for nature lovers and family getaways, it's surrounded by hiking trails and a peaceful stream.",
        id: 0,
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
        constructionDate: 1990,
        description:
          "This sleek urban home in the city center features contemporary design, a rooftop terrace with city views, and smart home technology for modern living and entertainment.",
        id: 1,
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
        constructionDate: 1990,
        description:
          "Impeccably preserved, this Victorian gem on a tree-lined street boasts ornate woodwork, stained glass windows, and an enchanting garden, offering a glimpse into a bygone era.",
        id: 2,
      },
    ],
    displayedProperties: [],
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
    setDisplayProperties(state) {
      state.displayedProperties = state.userMadeProperties;
    },
    setFormData(state, data) {
      data.id = state.userMadeProperties.length + 1; // Generate a unique ID
      state.userMadeProperties.push(data);
      state.displayedProperties = state.userMadeProperties;
    },
    setEditedData(state, data) {
      state.userMadeProperties[data.listingId] = data.formData;
      state.displayedProperties = state.userMadeProperties;
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
      const index = state.userMadeProperties.findIndex(
        (item) => item.id === itemToDelete
      );
      if (index !== -1) {
        state.userMadeProperties.splice(index, 1);
      }
      for (let i = 0; i < state.userMadeProperties.length; i++) {
        state.userMadeProperties[i].id = i;
      }
      state.displayedProperties = state.userMadeProperties;
    },
    sortBySearch(state, searchQuery) {
      const query = searchQuery.toLowerCase();
      state.displayedProperties = state.userMadeProperties.filter((listing) => {
        return listing.streetName.toLowerCase().includes(query);
      });
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
  },
  modules: {},
});
