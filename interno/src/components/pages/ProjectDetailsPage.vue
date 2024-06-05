<template>
  <div class="project__details">
    <HeaderComponent />
    <BaseBanner :image="`url(${image})`"></BaseBanner>
    <ProjectDetailsContent />
    <ProjectDetailsSlider />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../blocks/HeaderComponent.vue";
import BaseBanner from "../BaseBanner.vue";
import ProjectDetailsContent from "../blocks/ProjectDetailsContent.vue";
import ProjectDetailsSlider from "../ProjectDetailsSlider.vue";
import FooterComponent from "../blocks/FooterComponent.vue";

export default {
  neme: "ProjectDetailsPage",
  components: {
    HeaderComponent,
    BaseBanner,
    ProjectDetailsContent,
    ProjectDetailsSlider,
    FooterComponent,
  },
  data() {
    return {
      image: "ProjectDetailsBanner.png",
    };
  },
};
</script>

<style lang="scss"></style>
