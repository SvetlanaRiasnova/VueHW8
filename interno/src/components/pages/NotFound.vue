<template>
  <div class="notfound container">
    <HeaderComponent />
    <div class="notfound__block">
      <div class="notfound__context">
        <div class="notfound__404">404</div>
        <div class="notfound__text">
          We are sorry, but the pageyou requested was not found
        </div>
        <router-link class="notfound__button" to="/">
          <div class="notfound__button_text">
            Back To Home
            <img src="@/assets/icons/Arrow.svg" alt="arrow left" />
          </div>
        </router-link>
      </div>
      <img class="notfound__image" src="../../assets/img/404.jpg" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../blocks/HeaderComponent.vue";
export default {
  name: "NotFound",
  components: { HeaderComponent },
};
</script>

<style lang="scss">
@import "@/style/variables.scss";
.notfound {
  &__block {
    display: flex;
    gap: 81px;
    align-items: center;
  }
  &__404 {
    color: #cda274;
    font-family: DM Serif Display;
    font-size: 250px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
  }
  &__text {
    width: 500px;
    color: $headerColor;
    font-family: $familyTitle;
    font-size: 35px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
  }
  &__button {
    margin-top: 21px;
    border: none;
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: #292f36;
    font-size: 18px;
    position: static;
    width: 253px;
    height: 75px;
    @include flexCenter;
    flex-direction: row;
    gap: 10px;
    text-decoration: none;
    &_text {
      color: #ffffff;
    }
  }
}
.notfound__image {
  padding-left: 110px;
  border-bottom-left-radius: 50%;
}
</style>
