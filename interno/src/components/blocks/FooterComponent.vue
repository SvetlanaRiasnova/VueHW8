<template>
  <footer class="footer container">
    <div class="footer__logo_block">
      <div class="footer__logo">
        <svg
          width="34.000000"
          height="35.000000"
          viewBox="0 0 34 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Logo"
            d="M0 34L13.45 34L13.45 24.49C13.45 22.48 15.08 20.85 17.1 20.85C19.11 20.85 20.74 22.48 20.74 24.49L20.74 34L33.99 34L33.99 0C15.22 0 0 15.22 0 34Z"
            fill="#CDA274"
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
        </svg>
        <span class="footer__logo_text">Interno</span>
      </div>
      <p class="footer__text">
        It is a long established fact that a reader will be distracted lookings.
      </p>
      <div class="footer__logo_icon">
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
            fill="#292F36"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
            fill="#292F36"
          />
        </svg>
      </div>
    </div>
    <div class="footer__menu">
      <p class="footer__menu_title">Pages</p>
      <router-link class="footer__menu_link" to="/">Home</router-link>
      <router-link class="footer__menu_link" to="/projects"
        >Project</router-link
      >
      <router-link class="footer__menu_link" to="/blog">Blog</router-link>
    </div>
    <div class="footer__contact">
      <p class="footer__contact_title">Contact</p>
      <p class="footer__contact_text">
        55 East Birchwood Ave. Brooklyn, New York 11201
      </p>
      <p class="footer__contact_text-email">contact@interno.com</p>
      <p class="footer__contact_text">(123) 456 - 7890</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
.footer {
  display: flex;
  padding-top: 96px;
  gap: 101px;
  justify-content: space-around;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  &__logo_block {
    width: 393px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__logo {
    @include logoImage;
  }
  &__logo_text {
    @include logoText;
  }
  &__logo_icon {
    display: flex;
    gap: 54px;
  }
  &__menu_title,
  &__contact_title {
    font-family: $familyTitle;
    color: $headerColor;
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
  }
  &__menu {
    display: flex;
    flex-direction: column;
    &_link {
      text-decoration: none;
      color: $textColor;
      font-family: $familyText;
      font-size: 22px;
      font-weight: 400;
      line-height: 300%;
      text-align: left;
    }
  }
  &__contact {
    width: 258px;
    &-text {
      color: $textColor;
      font-family: $familyText;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      &-email {
        color: $textColor;
        font-family: $familyText;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 300%;
      }
    }
  }
}
</style>
