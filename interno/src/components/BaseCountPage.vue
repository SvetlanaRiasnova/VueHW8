<template>
  <div class="count__page">
    <div
      class="count__page_wrap"
      v-for="page of totalPage"
      :key="page"
      @click="changePage(page)"
    >
      <!-- <router-link :to="`/blog/${page}`"> -->
      {{ page }}
      <!-- </router-link> -->
    </div>
    <a href="#">
      <svg
        class="project__count_page-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
      >
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
        <path
          d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
          stroke="#292F36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "BaseCountPage",
  props: {
    perPage: Number,
    curPage: Number,
    length: Number,
  },

  data() {
    return {};
  },
  methods: {
    changePage(p) {
      if (p < 1 || p > this.totalPage) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
  computed: {
    totalPage() {
      return Math.ceil(this.length / this.perPage);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
.count__page {
  display: flex;
  flex-direction: row;
  gap: 20px;
  &_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #f4f0ec;
      border: none;
      width: 54px;
      height: 54px;
    }
  }

  & svg:hover {
    fill: #f4f0ec;

    & circle {
      stroke: none;
    }
  }
}
</style>
