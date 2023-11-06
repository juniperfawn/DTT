<template>
  <div class="listingCard__wrapper">
    <router-link
      class="listingCard"
      :to="{ name: 'byListing', params: { listingId: listingId } }"
    >
      <div class="imgWrapper">
        <img src="../assets/img_placeholder_house@3x.png" />
      </div>
      <div class="listingCard__information">
        <h2 class="listingCard--address">{{ streetName }} {{ houseNumber }}</h2>
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
    <div class="listingCard__edit">
      <router-link :to="{ name: 'edit', params: { listingId: listingId } }">
        <img src="../assets/ic_edit@3x.png" />
      </router-link>
      <img src="../assets/ic_delete@3x.png" @click="deleteListing(listingId)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    streetName: String,
    houseNumber: String,
    price: String,
    postalCode: String,
    city: String,
    bedrooms: Number,
    bathrooms: Number,
    size: Number,
    listingId: Number,
  },
  name: "ListingCard",
  methods: {
    deleteListing(listingId) {
      this.$store.commit("deleteListing", listingId);
    },
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
}

/*property details & information about listing */
.listingCard__information {
  margin-top: 20px;
}

.listingCard--address,
.listingCard--price,
.listingCard--zipcode {
  font-family: Montserrat;
  font-weight: semi-bold;
  font-size: 14px;
  margin: 0px 0px 7px 0px;
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
  transition-duration: 300ms;
}

.listingCard__edit img:hover {
  transform: scale(1.2);
}
</style>
