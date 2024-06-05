<template>
  <div class="project">
    <HeaderComponent />
    <BaseBanner
      :bannerHeader="bannerTitle"
      :bcrump="bcrump"
      :image="`url(${image})`"
    ></BaseBanner>
    <ProjectsCategoriesComponent @activCategories="activCategories" />
    <ProjectCardsComponent :projects="projects" />
    <BaseCountPage />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../blocks/HeaderComponent.vue";
import BaseBanner from "../BaseBanner.vue";
import ProjectsCategoriesComponent from "../ProjectsPageCategoriesComponent.vue";
import ProjectCardsComponent from "../blocks/ProjectCardsComponent.vue";
import BaseCountPage from "../BaseCountPage.vue";
import FooterComponent from "../blocks/FooterComponent.vue";
export default {
  name: "ProjectPage",
  components: {
    HeaderComponent,
    BaseBanner,
    ProjectsCategoriesComponent,
    ProjectCardsComponent,
    BaseCountPage,
    FooterComponent,
  },
  data() {
    return {
      bannerTitle: "Our Project",
      bcrump: "Home / Project",
      image: "banner_project_page.png",
      projects: [],
      projectsOne: [
        {
          id: 1,
          image: "project__img1.png",
          title: "Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 2,
          image: "project__img2.png",
          title: "Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 3,
          image: "project__img3.png",
          title: "Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 4,
          image: "project__img4.png",
          title: "Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 5,
          image: "project__img5.png",
          title: "Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 6,
          image: "project__img6.png",
          title: "Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 7,
          image: "project__img7.png",
          title: "Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 8,
          image: "project__img8.png",
          title: "Bathroom",
          text: "Decor / Artchitecture",
        },
      ],
      projectsTwo: [
        {
          id: 1,
          image: "project__img6.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 2,
          image: "project__img5.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 3,
          image: "project__img4.png",
          title: "Classic Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 4,
          image: "project__img3.png",
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 5,
          image: "project__img2.png",
          title: "Minimal Bedroom table",
          text: "Decor / Artchitecture",
        },
        {
          id: 6,
          image: "project__img1.png",
          title: "System Table",
          text: "Decor / Artchitecture",
        },
        {
          id: 7,
          image: "project__img7.png",
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 8,
          image: "project__img8.png",
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
      ],
      projectsThree: [
        {
          id: 1,
          image: "project__img8.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 2,
          image: "project__img7.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 3,
          image: "project__img6.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 4,
          image: "project__img5.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 5,
          image: "project__img4.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 6,
          image: "project__img3.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 7,
          image: "project__img2.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 8,
          image: "project__img1.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
      ],
      projectsFour: [
        {
          id: 1,
          image: "project__img4.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 2,
          image: "project__img5.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 3,
          image: "project__img3.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 4,
          image: "project__img2.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 5,
          image: "project__img1.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 6,
          image: "project__img6.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 7,
          image: "project__img7.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 8,
          image: "project__img8.png",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
      ],
    };
  },

  created() {
    this.projects = this.projectsOne;
  },

  methods: {
    activCategories(data) {
      switch (data.id) {
        case 1:
          this.projects = this.projectsOne;
          break;
        case 2:
          this.projects = this.projectsTwo;
          break;
        case 3:
          this.projects = this.projectsThree;
          break;
        case 4:
          this.projects = this.projectsFour;
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.project {
  &-svg:hover {
    fill: #f4f0ec;

    & circle {
      stroke: none;
    }
  }
}
</style>
