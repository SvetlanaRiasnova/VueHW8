<template>
  <div class="project__details_slider">
    <carousel :perPage="1" class="carousel" :autoplay="true">
      <slide v-for="(slide, index) in slides" :key="index" class="slide">
        <img :src="require('../assets/img/' + slide.image)" :alt="slide.alt" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProjectDetailsSlider",

  data() {
    return {};
  },

  mounted() {
    this.fetchSlides();
  },

  methods: {
    ...mapActions(["fetchSlides"]),
  },
  computed: {
    slides() {
      return this.$store.state.slides;
    },
  },
};
</script>

<style lang="scss" scoped>
.project__details_slider {
  display: flex;
  justify-content: center;
}
.carousel {
  width: 1200px;
  overflow: hidden;
}
.slide img {
  width: 1200px;
  max-height: 799px;
}
</style>
