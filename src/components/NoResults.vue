<template>
    <div class="noResults__wrapper">
        <img src="../assets/img_empty_houses@3x.png"/>
        <p>No results found.</p>
        <p>Please try another keyword.</p>
    </div>
</template>

<script>
    export default {
        name: 'NoResults',
}
</script>

<style scoped>
.noResults__wrapper{
    color: #4A4B4C;
    font-family: Montserrat;
    text-align: center;
    margin-top: 150px;
    font-size: 12px;
}

.noResults__wrapper img{
    height: 200px;
    margin: auto;
    padding-bottom: 20px;
}
</style>