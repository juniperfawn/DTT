<template>
  <OverviewBtn class="showOnlyDesktop" />
  <div class="form__background">
    <div class="form__wrapper">
      <div class="form__header--mobile showOnlyMobile">
        <router-link :to="{ name: 'home' }">
          <img class="btn__back--mobile" src="../assets/ic_back_grey@3x.png" />
        </router-link>
        <h1>Create new listing</h1>
        <div></div>
      </div>
      <h1 class="showOnlyDesktop">Create new listing</h1>
      <form @submit.prevent="handleSubmit">
        <label for="streetName">Street name*</label><br />
        <input
          type="text"
          id="streetName"
          name="streetName"
          placeholder="Enter the street name"
          required
          v-model="formData.streetName"
        /><br />

        <div class="form--groupOne">
          <div>
            <label for="houseNumber">House number*</label><br />
            <input
              type="number"
              id="houseNumber"
              name="houseNumber"
              placeholder="Enter house number"
              required
              v-model="formData.houseNumber"
            /><br />
          </div>
          <div>
            <label for="addition">Addition (optional)</label><br />
            <input
              type="text"
              id="addition"
              name="addition"
              placeholder="e.g. A"
              v-model="formData.addition"
            />
          </div>
        </div>

        <label for="postalCode">Postal code*</label><br />
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          placeholder="e.g. 1000 AA"
          required
          v-model="formData.postalCode"
        /><br />

        <label for="city">City*</label><br />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="e.g. Utrecht"
          required
          v-model="formData.city"
        /><br />

        <div class="uploadFileWrapper">
          <label for="picture">Upload picture (PNG or JPG)*</label><br />
          <div class="uploadImgWrapper">
            <img
              v-if="this.formData.picture"
              class="uploadedPhotoX"
              @click="clearPicture"
              src="../assets/ic_clear_white@3x.png"
            />
            <img
              v-if="this.formData.picture"
              class="uploadedPhoto"
              :src="this.formData.picture"
            />
            <img
              v-if="!this.formData.picture"
              class="noUploadedPhoto"
              src="../assets/ic_upload@3x.png"
            />
          </div>
          <input
            type="file"
            id="picture"
            name="picture"
            @change="onFileChange"
            required
          />
        </div>

        <label for="price">Price*</label><br />
        <input
          type="text"
          id="price"
          name="price"
          placeholder="e.g. €150.000"
          required
          v-model="formData.price"
        /><br />

        <div class="form--groupTwo">
          <div>
            <label for="size">Size*</label><br />
            <input
              type="number"
              id="size"
              name="size"
              placeholder="e.g. 60m2"
              required
              v-model="formData.size"
            />
          </div>
          <div>
            <label for="garage">Garage*</label><br />
            <select
              id="garage"
              name="garage"
              required
              v-model="formData.garage"
            >
              <option value="select" disabled selected>Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div class="form--groupThree">
          <div>
            <label for="bedrooms">Bedrooms*</label><br />
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              placeholder="Enter amount"
              required
              v-model="formData.bedrooms"
            />
          </div>
          <div>
            <label for="bathrooms">Bathrooms*</label><br />
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              placeholder="Enter amount"
              required
              v-model="formData.bathrooms"
            />
          </div>
        </div>

        <label for="constructionDate">Construction date*</label><br />
        <input
          type="number"
          id="constructionDate"
          name="constructionDate"
          placeholder="e.g. 1990"
          required
          v-model="formData.constructionDate"
        /><br />

        <label for="description">Description*</label><br />
        <textarea
          type="text"
          id="description"
          name="description"
          rows="5"
          cols="33"
          placeholder="Enter description"
          required
          v-model="formData.description"
        ></textarea>

        <button type="submit">POST</button>
      </form>
    </div>
  </div>
</template>

<script>
import OverviewBtn from "./OverviewBtn.vue";
export default {
  name: "Form",
  components: {
    OverviewBtn,
  },
  data() {
    return {
      image: "",
      formData: {
        streetName: "",
        houseNumber: null,
        addition: "",
        postalCode: "",
        city: "",
        picture: "",
        price: "",
        size: null,
        garage: "select",
        bedrooms: null,
        bathrooms: null,
        constructionDate: null,
        description: "",
        isUserMade: true,
        favorite: false,
        favoriteMessage: "FAVORITE",
      },
    };
  },
  methods: {
    clearPicture() {
      this.formData.picture = "";
    },
    onFileChange(e) {
      this.formData.picture = URL.createObjectURL(e.target.files[0]);
    },
    handleSubmit() {
      new Promise((resolve, reject) => {
        this.$store.commit("setFormData", this.formData);
        let id = this.$store.state.properties.length - 1;
        resolve(id);
      })
        .then((id) => {
          this.$router.push({
            path: "/listing/" + id,
          });
        })
        .catch((error) => {
          alert("Your listing data wasn't saved. Try again. " + error);
        });
    },
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
.form__background {
  background-image: url("../assets/img_background@3x.png");
  background-size: cover;
  height: 100%;
  margin-left: 350px;
}
.form__wrapper {
  max-width: 300px;
  font-family: Montserrat;
}

.form__wrapper h1 {
  font-size: 20px;
  margin-bottom: 10px;
}

.form--groupOne,
.form--groupTwo,
.form--groupThree {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

/*overall input and label styling*/
label {
  font-size: 12px;
  color: #4a4b4c;
  margin-bottom: 100px;
}

input {
  width: 100%;
  margin: 5px 0px 10px 0px;
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  outline: none;
}

input[placeholder] {
  padding: 10px;
  font-size: 10px;
  color: rgba(74, 75, 76, 0.7);
}

input[type="text"]:focus {
  border: 1.5px solid #eb5440;
}

/*upload photo styling*/
.uploadFileWrapper {
  position: relative;
  overflow: hidden;
}

.uploadImgWrapper {
  margin-top: 5px;
  aspect-ratio: 1 /1;
  border: 1px dashed #c3c3c3;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
}

.uploadFileWrapper .noUploadedPhoto {
  height: 25px;
}

.uploadedPhoto {
  height: 80px;
  width: 80px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
}

.uploadedPhotoX {
  height: 25px;
  position: absolute;
  top: -15px;
  right: -15px;
}

.uploadFileWrapper input[type="file"] {
  height: 200px;
  position: absolute;
  left: 0;
  top: 15px;
  opacity: 0;
}

/*select styling*/
select {
  margin-top: 5px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 10px;
  padding: 10px;
  color: #4a4b4c;
  appearance: none;
  outline: none;
}

select:focus {
  border: 1.5px solid #eb5440;
}

#garage {
  color: rgba(74, 75, 76, 0.7);
}

/*option styling*/
option {
  padding: 20px;
}

option:active {
  background-color: #eb5440;
}

/*text area styling*/
textarea {
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  width: 100%;
  resize: none;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
}

textarea[placeholder] {
  padding: 10px;
  font-size: 10px;
  font-family: Montserrat;
}

textarea:focus {
  border: 1.5px solid #eb5440;
}

#description {
  color: rgba(74, 75, 76, 0.7);
}

/*button styling*/
button {
  display: inline-block;
  border: none;
  text-decoration: none;
  color: #ffffff;
  padding: 10px;
  background-color: #eb5440;
  width: 150px;
  border-radius: 5px;
  margin-bottom: 20px;
}

input:invalid ~ button {
  opacity: 0.5;
}

/*mobile styles*/
@media (max-width: 750px) {
  /*shows elements only for mobile view and hides elements for desktop view*/
  .showOnlyDesktop {
    display: none;
  }

  .showOnlyMobile {
    display: block;
  }

  .showOnlyMobile {
    display: none;
  }

  .form__background {
    margin-left: 0px;
  }

  .form__wrapper {
    margin: 0px;
    padding: 30px;
    max-width: 100%;
    margin-bottom: 40px;
  }

  .form__header--mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }

  .btn__back--mobile {
    height: 20px;
  }

  .form__wrapper h1 {
    text-align: center;
  }

  button {
    width: 100%;
  }
}
</style>
