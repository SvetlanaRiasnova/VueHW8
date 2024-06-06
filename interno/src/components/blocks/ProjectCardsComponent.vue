<template>
  <div class="project__cards">
    <div
      class="project__cards_list"
      v-for="project in projects"
      :key="project.id"
    >
      <div class="star-box">
        <svg
          @click="changeStar"
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="star"
        >
          <g filter="url(#filter0_d_2_14)">
            <path
              d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
              fill="#FFA928"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2_14"
              x="0.186523"
              y="0.431396"
              width="35.627"
              height="34.3618"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_14"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2_14"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <img
        class="project__item_img"
        :src="require('@/assets/img/' + project.image)"
        alt="product image"
      />
      <div class="project__item_wrap">
        <div class="project__item_wrap-text">
          <h2 class="project__item_title">{{ project.title }}</h2>
          <p class="project__item_text">{{ project.text }}</p>
        </div>
        <router-link to="/projects/:page">
          <svg
            class="project__count_page-svg"
            width="70.000000"
            height="70.000000"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <circle
              id="Ellipse 4"
              cx="35.000000"
              cy="35.000000"
              r="35.000000"
              fill="#F4F0EC"
              fill-opacity="1.000000"
            />
            <path
              id="Vector"
              d="M32 44L40 35L32 26"
              stroke="#292F36"
              stroke-opacity="1.000000"
              stroke-width="2.000000"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCardsComponent",

  props: ["projects"],

  data() {
    return {};
  },
  methods: {
    changeStar(e) {
      const star = e.target.closest(".star");
      star.classList.toggle("star_active");
    },
  },
};
</script>

<style lang="scss" scoped>
.project__cards {
  margin: 0 auto;
  padding-top: 60px;
  width: 1200px;
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  &_list {
    width: 584px;
    overflow: hidden;
    position: relative;
  }
}
.project__item_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
svg circle:hover {
  fill: #ffffff;
  stroke: #cda274;
}
.star-box {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.star path {
  fill: #e7e3dd;
}
.star_active path {
  fill: #ffa928;
}
</style>
