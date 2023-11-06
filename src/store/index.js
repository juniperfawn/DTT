import { createStore } from "vuex";
import tempImage from "../assets/img_placeholder_house@3x.png";

export default createStore({
  state: {
    tempImage: tempImage,
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
        garage: "Yes",
        size: 100,
        constructionDate: 1990,
        picture: tempImage,
        description:
          "This charming A-frame cabin, nestled in the Rocky Mountains, offers a warm retreat with a rustic exterior, stone fireplace, and stunning views. Perfect for nature lovers and family getaways, it's surrounded by hiking trails and a peaceful stream.",
        id: 0,
        isUserMade: true,
      },
      {
        streetName: "Bergselaan",
        houseNumber: "157",
        price: 590.0,
        postalCode: "3037BJ",
        city: "Rotterdam",
        bedrooms: 4,
        bathrooms: 2,
        garage: "No",
        size: 400,
        constructionDate: 1990,
        picture: tempImage,
        description:
          "This sleek urban home in the city center features contemporary design, a rooftop terrace with city views, and smart home technology for modern living and entertainment.",
        id: 1,
        isUserMade: true,
      },
      {
        streetName: "Vista Drive",
        houseNumber: "275",
        price: 50000,
        postalCode: "81601",
        city: "Glenwood Springs",
        bedrooms: 4,
        bathrooms: 4,
        garage: "Yes",
        size: 50,
        constructionDate: 1990,
        picture: tempImage,
        description:
          "Impeccably preserved, this Victorian gem on a tree-lined street boasts ornate woodwork, stained glass windows, and an enchanting garden, offering a glimpse into a bygone era.",
        id: 2,
        isUserMade: true,
      },
    ],
    displayedProperties: [],
    isPriceAscending: true,
    isSizeAscending: false,
    showModal: false,
    nothingFound: false,
    showX: false,
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
    setShowModal(state) {
      if (!state.showModal) {
        state.showModal = true;
      } else {
        state.showModal = false;
      }
    },
    setDisplayProperties(state) {
      state.displayedProperties = state.userMadeProperties;
    },
    setFormData(state, data) {
      console.log(data);
      data.id = state.userMadeProperties.length; // Generate a unique ID
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
      if (searchQuery.length > 0) {
        state.showX = true;
      } else {
        state.showX = false;
      }
      state.displayedProperties = state.userMadeProperties.filter((listing) => {
        return listing.streetName.toLowerCase().includes(query);
      });
      if (state.displayedProperties.length == 0) {
        state.nothingFound = true;
      } else {
        state.nothingFound = false;
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
    sortBySearch({ commit }) {
      commit("sortBySearch");
    },
  },
  modules: {},
});
