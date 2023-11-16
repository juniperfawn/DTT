<template>
  <DeleteListing :listingId="listingId" />
  <div class="listingCard__wrapper">
    <router-link
      class="listingCard"
      :to="{ name: 'byListing', params: { listingId: listingId } }"
    >
      <div class="imgWrapper">
        <img :src="picture" alt="picture of a house" />
      </div>
      <div class="listingCard__information">
        <div class="listingCard__header">
          <h2 class="listingCard--address">
            {{ streetName }} {{ houseNumber }} {{ houseNumberAdd }}
          </h2>
          <img
            v-if="favorite"
            class="listingCard__favorite--icon"
            src="../assets/star-icon.png"
          />
        </div>
        <p class="listingCard--price">€ {{ price }}</p>
        <p class="listingCard--zipcode">{{ postalCode }} {{ city }}</p>
        <div class="propertyDetails">
          <div class="propertyDetails__bedrooms">
            <p>{{ bedrooms }}</p>
            <img src="../assets/ic_bed@3x.png" />
          </div>
          <div class="propertyDetails__bathrooms">
            <p>{{ bathrooms }}</p>
            <img src="../assets/ic_bath@3x.png" />
          </div>
          <div class="propertyDetails__size">
            <p>{{ size }} m2</p>
            <img src="../assets/ic_size@3x.png" />
          </div>
        </div>
      </div>
    </router-link>
    <div v-if="isUserMade" class="listingCard__edit">
      <router-link :to="{ name: 'edit', params: { listingId: listingId } }">
        <img src="../assets/ic_edit@3x.png" />
      </router-link>
      <img src="../assets/ic_delete@3x.png" @click="setShowModal" />
    </div>
  </div>
</template>

<script>
import DeleteListing from "./DeleteListing.vue";
import { mapMutations } from "vuex";
export default {
  name: "ListingCard",
  components: { DeleteListing },
  props: {
    streetName: String,
    houseNumber: Number,
    houseNumberAdd: String,
    price: String,
    postalCode: String,
    city: String,
    bedrooms: Number,
    bathrooms: Number,
    size: Number,
    listingId: Number,
    picture: String,
    isUserMade: Boolean,
    favorite: Boolean,
  },
  methods: {
    ...mapMutations(["setShowModal"]),
  },
};
</script>

<style scoped>
.listingCard__wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 8px -1px rgb(183, 183, 183, 0.5);
}

.listingCard {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}

.listingCard:hover {
  .imgWrapper img {
    transform: scale(1.05);
  }
}

/*card house image*/
.imgWrapper {
  height: 100px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
  margin: 20px;
}
.imgWrapper img {
  transition-duration: 300ms;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

/*property details & information about listing */
.listingCard__information {
  margin-top: 20px;
}

.listingCard__header {
  display: flex;
  gap: 20px;
  align-items: center;
}

.listingCard__favorite--icon {
  height: 20px;
  padding-bottom: 8px;
}

.listingCard--address,
.listingCard--price,
.listingCard--zipcode {
  font-family: Montserrat;
  font-weight: semi-bold;
  font-size: 12px;
  margin: 0px 0px 7px 0px;
}

.listingCard--address h2 {
  font-size: 22px;
  font-weight: bold;
}

.listingCard--address {
  font-size: 16px;
}

.listingCard--price {
  color: #4a4b4c;
}

.listingCard--zipcode {
  color: #c3c3c3;
  margin: 0px;
}

/*property details with icons*/
.propertyDetails {
  display: flex;
  gap: 10px;
  color: rgba(74, 75, 76, 0.8);
  font-family: Montserrat;
  font-size: 12px;
}

.propertyDetails img {
  height: 15px;
}

.propertyDetails > * {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0px 0px 7px 0px;
}

/*edit and delete buttons*/
.listingCard__edit {
  display: flex;
  gap: 10px;
  margin: 20px;
}

.listingCard__edit img {
  height: 15px;
  right: 0px;
  top: 0px;
  transition-duration: 150ms;
}

.listingCard__edit img:hover {
  transform: scale(1.2);
  cursor: pointer;
}

/*mobile styles*/
@media (max-width: 750px) {
  .listingCard--address h2 {
    font-size: 22px;
  }
}
</style>
