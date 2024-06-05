<template>
  <div class="blog__tags">
    <h2 class="blog__tags_header">{{ tagsHeader }}</h2>
    <div class="blog__tags_btns">
      <button
        class="blog__tags_btn"
        v-for="(btn, index) of buttonList"
        :key="index"
        @click="filterButton(btn)"
      >
        {{ btn }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsComponent",
  props: {
    tagsHeader: String,
    buttonList: {},
  },

  data() {
    return {
      findArticlebyTag: "",
    };
  },
  methods: {
    filterButton(item) {
      this.findArticlebyTag = item;
      console.log(this.findArticlebyTag);
    },
  },
  computed: {},
};
</script>

<style></style>
