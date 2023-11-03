<template>
  <div
    class="listOfCards"
    v-for="item in $store.state.displayedProperties"
    :key="$store.state.displayedProperties.id"
  >
    <ListingCard
      :streetName="item.streetName"
      :houseNumber="item.houseNumber"
      :postalCode="item.postalCode"
      :city="item.city"
      :price="item.price"
      :size="item.size"
      :bedrooms="item.bedrooms"
      :bathrooms="item.bathrooms"
      :listingId="item.id"
    />
  </div>
</template>

<script>
import ListingCard from "./ListingCard.vue";
export default {
  name: "ListingList",
  components: {
    ListingCard,
  },
  mounted() {
    this.$store.state.displayedProperties =
      this.$store.state.userMadeProperties;
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
}
</style>
