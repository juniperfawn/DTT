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
            <form @submit="handleSubmit"> 
                <label for="streetName">Street name*</label><br>
                <input type="text" id="streetName" name="streetName" placeholder="Enter the street name" required v-model="streetName"><br>
                <!-- <div v-if="streetNameError" class="error">{{ streetNameError }}</div> -->

                <!-- <div class="form--groupOne">
                    <div>
                        <label for="houseNumber">House number*</label><br>
                        <input type="text" id="houseNumber" name="houseNumber" placeholder="Enter house number" required v-model="houseNumber"><br>
                    </div>
                    <div>
                        <label for="addition">Addition (optional)</label><br>
                        <input type="text" id="addition" name="addition" placeholder="e.g. A" v-model="addition">
                    </div>
                </div>

                <label for="postalCode">Postal code*</label><br>
                <input type="text" id="postalCode" name="postalCode" placeholder="e.g. 1000 AA" required v-model="postalCode"><br>

                <label for="city">City*</label><br>
                <input type="text" id="city" name="city" placeholder="e.g. Utrecht" required v-model="city"><br>

                <div class="uploadFileWrapper">
                    <label for="picture">Upload picture (PNG or JPG)*</label><br>
                    <div class="uploadImgWrapper">
                        <img src="../assets/ic_upload@3x.png">
                    </div>
                    <input type="file" id="picture" name="picture" required>
                </div>
                    
                <label for="price">Price*</label><br>
                <input type="text" id="price" name="price"  placeholder="e.g. €150.000" required v-model="price"><br>

                <div class="form--groupTwo">
                    <div>
                        <label for="size">Size*</label><br>
                        <input type="text" id="size" name="size" placeholder="e.g. 60m2" required v-model="size"> 
                    </div>
                    <div>
                        <label for="garage">Garage*</label><br>
                        <select id="garage" name="garage" required v-model="garage">
                            <option value="select">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div class="form--groupThree">
                    <div>
                        <label for="bedrooms">Bedrooms*</label><br>
                        <input type="text" id="bedrooms" name="bedrooms" placeholder="Enter amount" required v-model="bedrooms"> 
                    </div>
                    <div>
                        <label for="bathrooms">Bathrooms*</label><br>
                        <input type="text" id="bathrooms" name="bathrooms" placeholder="Enter amount" required v-model="bathrooms"> 
                    </div>
                </div>

                <label for="constructionDate">Construction date*</label><br>
                <input type="text" id="constructionDate" name="constructionDate" placeholder="e.g. 1990" required v-model="constructionDate"><br> 

                <label for="description">Description*</label><br>
                <textarea id="description" name="description" rows="5" cols="33" placeholder="Enter description" required v-model="description"></textarea> -->

                <button type="submit">POST</button>
            </form>
        </div>   
        <p>Street Name: {{ streetName }}</p>
        <!-- <p>House Number: {{ houseNumber }}</p>
        <p>Additional Information: {{ addition }}</p>
        <p>Postal Code: {{ postalCode }}</p>
        <p>City: {{ city }}</p>
        <p>Picture: {{ picture }}</p>
        <p>Price: {{ price }}</p>
        <p>Size: {{ size }}</p>
        <p>Garage: {{ garage }}</p>
        <p>Bedrooms: {{ bedrooms }}</p>
        <p>Bathrooms: {{ bathrooms }}</p>
        <p>Construction Date: {{ constructionDate }}</p>
        <p>Description: {{ description }}</p> -->

    </div>
</template>
   
<script>
import OverviewBtn from './OverviewBtn.vue';
import { mapFields } from "../helpers.js"
    export default {
        name: 'Form',
        components: {
            OverviewBtn
        },
        data() {
            return {
                streetName: '',
                // streetNameError: '',
                // houseNumber: '',
                // addition: '',
                // postalCode: '',
                // city: '',
                // picture: '',
                // price: '',
                // size: '',
                // garage: 'select',
                // bedrooms: '',
                // bathrooms: '',
                // constructionDate: '',
                // description: '',

                // streetName: "",
                // houseNumber: "",
                // price: 0,
                // postalCode: "",
                // city: "",
                // bedrooms: 0,
                // bathrooms: 0,
                // size: 0,
            };
        }, 
        computed: {
        ...mapFields({
        // fields: ["streetName", "houseNumber", "addition", "postalCode", "city", "picture", "price", "size", "garage", "bedrooms", "bathrooms", "constructionDate", "description"],
        fields: ["streetName"],
        base: "user",
        mutation: "updateUser"
        }),
        methods: {
            handleSubmit(e){
                alert("I submitted!!");
            }
            // streetName: {
            //     get(){
            //         return this.$store.state.streetName
            //     },
            //     set(){

            //     }
            // }
            // handleSubmit() {
            //     // console.log('form submitted')
            //     // this.streetNameError = this.streetName > 5 ? '' : 'Street Name must be more than 5 chars long'

            //     //step 1: check if fields are filled out with proper amounts of characters 

            //     //step 2: create Error messages for each necessary field 

            //     //step 3: push data into array (?)

            //     //step 4: reset data to empty strings
            //     this.streetName = '';
            //     this.streetNameError = '';
            //     this.houseNumber = '';
            //     this.addition = '';
            //     this.postalCode = '';
            //     this.city =  '';
            //     this.picture = '';
            //     this.price = '';
            //     this.size = '';
            //     this.garage = 'select';
            //     this.bedrooms = '';
            //     this.bathrooms = '';
            //     this.constructionDate = '';
            //     this.description = '';
            }
        }
    }
</script>

<style scoped>
/*shows elements only for desktop view and hides elements for mobile view*/
.showOnlyMobile{
    display: none;
}

.form__background{
    background-image: url('../assets/img_background@3x.png');
    background-size: cover;
    height: 100%;
    margin-left: 350px;
}
.form__wrapper{
    max-width: 300px;
    font-family: Montserrat;
}

.form__wrapper h1{
    font-size: 20px;
    margin-bottom: 10px;
}

.form--groupOne, .form--groupTwo, .form--groupThree{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

/*overall input and label styling*/
label{
    font-size: 12px;
    color: #4A4B4C;
    margin-bottom: 100px;
}

input{
    width: 100%;
    margin: 5px 0px 10px 0px;
    background-color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    outline: none;
}

input[placeholder]{
    padding: 10px;
    font-size: 10px;
    color: #C3C3C3;
}

input[type=text]:focus{
    border: 1.5px solid #EB5440;
}

/*upload photo styling*/
.uploadFileWrapper{
    position: relative;
    overflow: hidden;
}

.uploadImgWrapper{
    margin-top: 5px;
    aspect-ratio: 1 /1;
    border: 1px dashed #C3C3C3;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.uploadFileWrapper img{
    height: 25px;
}

.uploadFileWrapper input[type=file]{
    height: 200px;
    position: absolute;
    left: 0;
    top: 15px;
    opacity: 0;
}

/*select styling*/
select{
    margin-top: 5px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    width: 100%;
    font-size: 10px;
    padding: 10px;
    color: #4A4B4C;
    appearance: none;
    outline: none;
}

select:focus{
    border: 1.5px solid #EB5440;
}

/*option styling*/
option{
    padding: 20px;
}

option:active{
    background-color: #EB5440;
}

/*text area styling*/
textarea{
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
    width: 100%;
    resize: none;
    margin-bottom: 15px;
    margin-top: 5px;
    outline: none;
}

textarea[placeholder]{
    padding: 10px;
    font-size: 10px;
    font-family: Montserrat;
}

textarea:focus{
    border: 1.5px solid #EB5440;
}

/*post button styling*/
button{
    display: inline-block;
    border: none;
    text-decoration: none;
    color: #FFFFFF;
    padding: 10px;
    background-color: #EB5440;
    width: 150px;
    border-radius: 5px;
    margin-bottom: 20px;
}

/*error styles*/
.error{
    color: #EB5440;
    font-size: 10px;
}

/*styles for mobile*/
@media (max-width: 750px){
    /*shows elements only for mobile view and hides elements for desktop view*/
    .showOnlyDesktop{
    display: none;
    }

    .showOnlyMobile{
    display: block;
    }

    /*resetting box sizing*/
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    .showOnlyMobile{
    display: none;
    }

    .form__background{
        margin-left: 0px;
    }

    .form__wrapper{
        margin: 0px;
        padding: 30px;
        max-width: 100%;
        margin-bottom: 40px;
        /* position: relative; */
    }

    /* .btn__back--mobile{
        height: 20px;
        position: absolute;
        top: 30px;
        left: 30px;
    } */

    .form__header--mobile{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        /* display: none; */
    }

    .btn__back--mobile{
        height: 20px;
    }

    .form__wrapper h1{
        text-align: center;
    }

    button{
        width: 100%;
    }
}
</style>