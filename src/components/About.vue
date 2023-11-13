<template>
  <div class="about__wrapper">
    <h1 class="showOnlyMobile">About</h1>
    <h2>About DTT Real Estate</h2>
    <div class="about__text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a purus in
        diam ornare luctus eget vel erat. Sed porta leo ex, eget aliquam erat
        luctus vel. Pellentesque pellentesque orci ut augue euismod scelerisque.
        Quisque vestibulum faucibus blandit. Suspendisse et augue sit amet
        lectus fringilla tincidunt ut vel massa. Suspendisse efficitur, justo
        commodo molestie condimentum, ipsum est volutpat enim, a blandit ex
        lorem sed sem. Nullam lacinia neque mi. Mauris et metus dui. Donec nec
        vulputate ipsum. Nulla facilisi.
      </p>
      <br />
      <p>
        Vivamus nibh arcu, scelerisque vitae fermentum id, sodales vitae enim.
        Aliquam auctor tristique tristique. Nulla dignissim nisl vitae mi auctor
        luctus.
      </p>
    </div>
    <h2>Design and Development</h2>
    <div class="dttLinks">
      <img src="../assets/img_logo_dtt@3x.png" />
      <div class="side">
        <p>By DTT</p>
        <a href="https://www.d-tt.nl/">www.d-tt.nl</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/*shows elements only for desktop view and hides elements for mobile view*/
.showOnlyMobile {
  display: none;
}

.about__wrapper {
  margin: 50px 350px 0px 350px;
  font-family: Montserrat;
}

.about__text {
  margin-top: 30px;
  margin-bottom: 30px;
}

p {
  font-size: 12px;
  color: #4a4b4c;
  line-height: 1.2rem;
}

.dttLinks {
  margin-top: 30px;
  display: flex;
  gap: 30px;
  align-items: center;
}

.dttLinks img {
  height: 50px;
}

.side a {
  text-decoration: none;
  color: #067bc2;
}

/*mobile styles*/
@media (max-width: 750px) {
  /*shows elements only for mobile view*/
  .showOnlyMobile {
    display: block;
  }
  .about__wrapper {
    margin: 0px;
    padding: 30px;
  }

  .about__wrapper h2 {
    font-size: 18px;
    margin: 0px;
  }

  .about__text {
    margin: 0px 0px 20px 0px;
  }

  .dttLinks {
    margin: 10px;
  }

  .about__wrapper h1 {
    text-align: center;
    font-size: 20px;
    padding: 0px 0px 30px 0px;
  }
}
</style>
