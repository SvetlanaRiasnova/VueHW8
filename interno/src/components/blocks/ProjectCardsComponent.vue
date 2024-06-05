<template>
  <div class="project__cards">
    <div
      class="project__cards_list"
      v-for="project in projects"
      :key="project.id"
    >
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
  methods: {},
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
</style>
