<template>
  <div v-if="showModal">
    <div class="deleteListing__darkBackground">
      <div class="deleteListing__container">
        <h2>Delete listing</h2>
        <div class="delete__text">
          <p>Are you sure you want to delete this listing?</p>
          <p>This action cannot be undone.</p>
        </div>
        <div class="buttons">
          <button
            class="btn__delete"
            @click="
              deleteListing(listingId);
              setShowModal();
            "
          >
            YES, DELETE
          </button>
          <button class="btn__back" @click="setShowModal">GO BACK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "DeleteListing",
  props: {
    listingId: Number,
  },
  methods: {
    deleteListing(listingId) {
      new Promise((resolve, reject) => {
        this.$store.commit("deleteListing", listingId);

        resolve();
      })
        .then(() => {
          this.$router.push({
            path: "/",
          });
        })
        .catch((error) => {
          alert("your listing data wasn't saved. Try again.");
        });
    },
    ...mapMutations(["setShowModal"]),
  },
  computed: {
    ...mapState(["showModal"]),
  },
};
</script>

<style scoped>
.deleteListing__darkBackground {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
}

.deleteListing__container {
  background-color: #ffffff;
  text-align: center;
  border-radius: 5px;
  padding: 30px 100px 30px 100px;
  font-family: Montserrat;
}

h2 {
  font-size: 18px;
}
.delete__text {
  margin: 40px 0px 40px 0px;
  color: #4a4b4c;
  font-size: 12px;
  line-height: 1.2rem;
}

button {
  display: inline-block;
  border: none;
  text-decoration: none;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
}

/*button styling*/
.buttons {
  display: grid;
  gap: 10px;
}

.btn__delete {
  background-color: #eb5440;
}

.btn__back {
  background-color: #4a4b4c;
}

/*styles for mobile*/
@media (max-width: 750px) {
  /*shows elements only for mobile view and hides elements for desktop view*/
  .deleteListing__container {
    padding: 20px 40px 20px 40px;
  }
  .deleteListing__darkBackground {
    z-index: 1;
  }
}
</style>
