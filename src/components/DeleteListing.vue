<template>
    <div class="deleteListing__darkBackground">
        <div class="deleteListing__container">
            <h2>Delete listing</h2>
            <div class="delete__text">
                <p>Are you sure you want to delete this listing?</p>
                <p>This action cannot be undone.</p>
            </div>
            <div class="buttons">
                <button class="btn__delete">YES, DELETE</button>
                <button class="btn__back">GO BACK</button>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'DeleteListing',
}
</script>

<style scoped>
.deleteListing__darkBackground{
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    left:0;
}

.deleteListing__container{
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 5px;
    padding: 30px 100px 30px 100px;
    font-family: Montserrat;
}


h2{
    font-size: 18px;
}
.delete__text{
    margin: 40px 0px 40px 0px;
    color: #4A4B4C;
    font-size: 12px;
    line-height: 1.2rem;
}

button{
    display: inline-block;
    border: none;
    text-decoration: none;
    color: #FFFFFF;
    padding: 10px;
    border-radius: 5px;
}

/*button styling*/
.buttons{
    display: grid;
    gap: 10px;
}

.btn__delete{
    background-color: #EB5440;
}

.btn__back{
    background-color: #4A4B4C;
}
</style>