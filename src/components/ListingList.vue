<template>
    <!-- go through both arrays userMadeProperties & preGeneratedProperties should have same data. Add true or false for editable -->
    <div class="listOfCards" v-for="item in $store.state.userMadeProperties">
        <ListingCard 
        :streetName = item.streetName 
        />
    </div>
</template>

<script>
import ListingCard from './ListingCard.vue'
    export default {
        name: 'ListingList',
        components: {
            ListingCard
        },
        // mounted(){
        //     this.$store.dispatch(getpreGeneratedProperties);
        // }
}
</script>

<style scoped>
.listOfCards{
    display: flex;
    gap: 15px;
    flex-direction: column;
    margin: 20px 350px 20px 350px;
    
}

@media (max-width: 750px){
    .listOfCards{
        margin: 0px;
        padding: 0px 20px 80px 20px;
    }
}

</style>

<!-- :houseNumber= item.houseNumber
    :price= item.price
        :postalCode= item.postalCode
        :city= item.city
        :bedrooms= item.bedrooms
        :bathrooms= item.bathrooms
        :size= item.size  -->