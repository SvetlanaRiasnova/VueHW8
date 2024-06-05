<template>
  <section class="project__categories">
    <div class="project__categories-wrap">
      <div
        :class="{ active: categories.activCategories }"
        class="project__categories-button"
        v-for="categories in categoriesList"
        :key="categories.id"
        @click="isActive(categories)"
      >
        {{ categories.nameCategories }}
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProjectsCategoriesComponent",

  data() {
    return {
      categoriesList: [
        {
          id: 1,
          nameCategories: "Bathroom",
          activCategories: true,
        },
        {
          id: 2,
          nameCategories: "Bed Room",
          activCategories: false,
        },
        {
          id: 3,
          nameCategories: "Kitchan",
          activCategories: false,
        },
        {
          id: 4,
          nameCategories: "Living Area",
          activCategories: false,
        },
      ],
    };
  },

  methods: {
    isActive(data) {
      this.categoriesList.forEach((element) => {
        element.activCategories = false;
      });
      this.categoriesList[data.id - 1].activCategories = true;
      this.$emit("activCategories", data);
      console.log(data.id);
      return this.categoriesList[data.id - 1].activCategories;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.project__categories {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-wrap {
    border-radius: 18px;
    width: 880px;
    border: 1px solid #cda274;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 63px;
  }

  &-button {
    cursor: pointer;
    padding: 26px 66px;
    margin-left: -66px;
    margin-right: -66px;

    color: #292f36;
    text-align: center;
    font-family: $familyText;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;

    &:hover {
      color: #fff;
      border-radius: 18px;
      background: #cda274;
    }
  }

  .active {
    color: #fff;
    border-radius: 18px;
    background: #cda274;
  }
}
</style>
