import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      streetName: "",
      // houseNumber: "",
      // addition: "",
      // postalCode: "",
      // city: "",
      // picture: "",
      // price: "",
      // size: "",
      // garage: "select",
      // bedrooms: "",
      // bathrooms: "",
      // constructionDate: "",
      // description: "",
    },
    userMadeProperties: [
      {
        streetName: "Jan Evertsenplaats",
        // houseNumber: 98,
        // price: 790.0,
        // postalCode: "3012HS",
        // city: "Rotterdam",
        // bedrooms: 2,
        // bathrooms: 1,
        // size: 100,
      },
      {
        streetName: "Bergselaan",
        // houseNumber: 157,
        // price: 590.0,
        // postalCode: "3037BJ",
        // city: "Rotterdam",
        // bedrooms: 4,
        // bathrooms: 2,
        // size: 400,
      },
    ],
    preGeneratedProperties: [],
  },
  getters: {},
  mutations: {
    handleSubmit(state) {
      console.log("submitted");
      // state.userMadeProperties.push(state.user);
      // state.user.streetName = "";
      // state.user.houseNumber = "";
      // state.user.addition = "";
      // state.user.postalCode = "";
      // state.user.city = "";
      // state.user.picture = "";
      // state.user.price = "";
      // state.user.streetName = "";
    },
    updateStreetName(state, streetName) {
      state.streetName = streetName;
    },
    updateUser(state, field) {
      state.user.field = field.value;
    },
  },
  actions: {},
  modules: {},
});
