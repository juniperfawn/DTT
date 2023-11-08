<template>
  <DeleteListing :listingId="+listingId" />
  <OverviewBtn class="showOnlyDesktop" />
  <div class="listingCard__large">
    <div class="house__imgWrapper">
      <img :src="listingById(listingId).picture" />
    </div>

    <div class="mobile__wrapper showOnlyMobile">
      <div>
        <div class="listing__header--mobile">
          <router-link :to="{ name: 'home' }">
            <img
              class="btn__back--mobile"
              src="../assets/ic_back_white@3x.png"
            />
          </router-link>
          <div
            v-if="listingById(listingId).isUserMade"
            class="listing__edit--mobile"
          >
            <router-link
              :to="{ name: 'edit', params: { listingId: listingId } }"
            >
              <img src="../assets/ic_edit_white@3x.png" />
            </router-link>
            <img src="../assets/ic_delete_white@3x.png" @click="setShowModal" />
          </div>
        </div>
      </div>
    </div>

    <div class="listingInfo__wrapper">
      <div class="listing__topElements">
        <h1>
          {{ listingById(listingId).streetName }}
          {{ listingById(listingId).houseNumber }}
          {{ listingById(listingId).houseNumberAdd }}
        </h1>
        <div
          v-if="listingById(listingId).isUserMade"
          class="listingCard__edit showOnlyDesktop"
        >
          <router-link :to="{ name: 'edit', params: { listingId: listingId } }">
            <img src="../assets/ic_edit@3x.png" />
          </router-link>
          <img src="../assets/ic_delete@3x.png" @click="setShowModal" />
        </div>
      </div>
      <div class="listing--address">
        <img src="../assets/ic_location@3x.png" />
        <p>
          {{ listingById(listingId).postalCode }}
          {{ listingById(listingId).city }}
        </p>
      </div>
      <div class="listing__attributes">
        <div class="attributes--cost">
          <img src="../assets/ic_price@3x.png" />
          <p>{{ listingById(listingId).price }}</p>
        </div>
        <div class="attributes--size">
          <img src="../assets/ic_size@3x.png" />
          <p>{{ listingById(listingId).size }} m2</p>
        </div>
        <div class="attributes--year">
          <img src="../assets/ic_construction_date@3x.png" />
          <p>Built in 1990</p>
        </div>
      </div>
      <div class="propertyDetails">
        <div class="propertyDetails--bedrooms">
          <img src="../assets/ic_bed@3x.png" />
          <p>{{ listingById(listingId).bedrooms }}</p>
        </div>
        <div class="propertyDetails--bathrooms">
          <img src="../assets/ic_bath@3x.png" />
          <p>{{ listingById(listingId).bathrooms }}</p>
        </div>
        <div class="propertyDetails--garage">
          <img src="../assets/ic_garage@3x.png" />
          <p>{{ listingById(listingId).garage }}</p>
        </div>
      </div>
      <p class="listingDescription">
        {{ listingById(listingId).description }}
      </p>
    </div>
  </div>
</template>

<script>
import OverviewBtn from "./OverviewBtn.vue";
import DeleteListing from "./DeleteListing.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Listing",
  components: {
    OverviewBtn,
    DeleteListing,
  },
  props: {
    listingId: String, //? number
  },
  computed: {
    ...mapGetters(["getListingById"]),
    listingById() {
      return (listingId) => this.getListingById(listingId);
    },
  },
  methods: {
    ...mapMutations(["setShowModal"]),
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*shows elements only for desktop view and hides elements for mobile view*/
.showOnlyMobile {
  display: none;
}
.listing__topElements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
}
.listingCard__large {
  margin-left: 350px;
  width: 550px;
  background-color: #ffffff;
  font-family: Montserrat;
}

/*image of house listing*/
.house__imgWrapper {
  height: 350px;
  display: cover;
}

.house__imgWrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

/*house listing information & details*/
.listingInfo__wrapper {
  padding: 10px 30px 0px 30px;
}

.listingInfo__wrapper * {
  margin: 0px;
}

.listing--address,
.listing__attributes,
.propertyDetails {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 12px;
  color: #4a4b4c;
  margin-top: 20px;
}

.listing--address {
  gap: 5px;
}

.listingInfo__wrapper > * > * {
  display: flex;
  gap: 5px;
  align-items: center;
}

.listingInfo__wrapper img {
  height: 12px;
}

.listingDescription {
  padding: 20px 30px 30px 0px;
  font-size: 12px;
  color: #4a4b4c;
  line-height: 1.2rem;
}

.listingCard__edit img {
  height: 15px;
}

.listingCard__edit {
  display: flex;
  gap: 20px;
}

@media (max-width: 750px) {
  /*shows elements only for mobile view and hides elements for desktop view*/
  .showOnlyMobile {
    display: block;
  }

  .showOnlyDesktop {
    display: none;
  }

  .mobile__wrapper {
    top: 20px;
  }

  .listing__header--mobile {
    display: flex;
    gap: 275px;
    align-items: center;
    position: absolute;
    top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0px;
  }

  .listing__header--mobile img {
    height: 20px;
  }

  .listing__edit--mobile {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .listingCard__large {
    margin-left: 0px;
    width: 100%;
    position: relative;
    background-color: red;
  }

  .listingInfo__wrapper {
    border-radius: 30px 30px 0px 0px;
    background-color: white;
    position: absolute;
    top: 300px;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .listingInfo__wrapper .listingDescription {
    padding: 10px 0px 70px 0px;
  }
}
</style>
