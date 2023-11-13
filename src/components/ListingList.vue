<template>
  <div class="listOfCards__wrapper">
    <div
      v-if="!nothingFound"
      class="listOfCards"
      v-for="item in $store.state.displayedProperties"
      :key="item.id"
    >
      <ListingCard
        :streetName="item.streetName"
        :houseNumber="item.houseNumber"
        :houseNumberAdd="item.houseNumberAdd"
        :postalCode="item.postalCode"
        :city="item.city"
        :price="item.price"
        :size="item.size"
        :bedrooms="item.bedrooms"
        :bathrooms="item.bathrooms"
        :listingId="item.id"
        :picture="item.picture"
        :isUserMade="item.isUserMade"
        :favorite="item.favorite"
      />
    </div>
  </div>
</template>

<script>
import ListingCard from "./ListingCard.vue";
import { mapState } from "vuex";
export default {
  name: "ListingList",
  components: {
    ListingCard,
  },
  computed: {
    ...mapState(["nothingFound"]),
  },
  mounted() {
    this.$store.state.displayedProperties = this.$store.state.properties;
  },
};
</script>

<style scoped>
.listOfCards {
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin: 20px 350px 20px 350px;
}

@media (max-width: 750px) {
  .listOfCards {
    margin: 0px;
    padding: 0px 20px 10px 20px;
  }

  .listOfCards__wrapper {
    margin-bottom: 70px;
  }
}
</style>
