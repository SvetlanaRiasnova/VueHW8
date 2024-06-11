<template>
  <div class="blog__articles">
    <div
      v-for="article in currentElements"
      :key="article.id"
      class="blog__articles_back"
    >
      <div class="blog__articles_top">
        <img
          :src="require('@/assets/img/' + article.image)"
          :alt="article.image"
        />
        <h3 class="blog__articles_header">{{ article.itemHeader }}</h3>
      </div>
      <h2 class="blog__title">{{ article.itemTitle }}</h2>
      <div class="blog__articles_bottom">
        <div class="blog__articles_date">{{ article.itemData }}</div>
        <router-link class="blog__articles_btn" to="/blogdetails/:page">
          <svg
            width="52.000000"
            height="52.000000"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <circle
              id="Ellipse 4"
              cx="26.000000"
              cy="26.000000"
              r="26.000000"
              fill="#F4F0EC"
              fill-opacity="1.000000"
            />
            <path
              id="Vector"
              d="M23.77 32.68L29.71 25.99L23.77 19.31"
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
    <BaseCountPage
      :perPage="perPage"
      :curPage="page"
      :length="articles.length"
      @paginate="changePage"
    />
  </div>
</template>

<script>
import BaseCountPage from "../BaseCountPage.vue";
export default {
  components: {
    BaseCountPage,
  },
  name: "ArticleComponent",
  props: {
    quantity: Number,
  },
  data() {
    return {
      page: 1,
      articles: [
        {
          id: 0,
          image: "art1.png",
          itemHeader: "Kitchan Design",
          itemTitle: "Let’s Get Solution For Building Construction Work",
          itemData: "26 December,2022",
        },
        {
          id: 1,
          image: "art2.png",
          itemHeader: "Living Design",
          itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
          itemData: "22 December,2022",
        },
        {
          id: 2,
          image: "art3.png",
          itemHeader: "Interior Design",
          itemTitle: "Best For Any Office & Business Interior Solution",
          itemData: "25 December,2022",
        },
        {
          id: 3,
          image: "art4.png",
          itemHeader: "Kitchan Design",
          itemTitle: "Let’s Get Solution For Building Construction Work",
          itemData: "26 December,2022",
        },
        {
          id: 4,
          image: "art5.png",
          itemHeader: "Living Design",
          itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
          itemData: "22 December,2022",
        },
        {
          id: 5,
          image: "art6.png",
          itemHeader: "Interior Design",
          itemTitle: "Best For Any Office & Business Interior Solution",
          itemData: "25 December,2022",
        },
        {
          id: 6,
          image: "art1.png",
          itemHeader: "Kitchan Design",
          itemTitle: "123Let’s Get Solution For Building Construction Work",
          itemData: "26 December,2022",
        },
        {
          id: 7,
          image: "art2.png",
          itemHeader: "Living Design",
          itemTitle: "123Low Cost Latest Invented Interior Designing Ideas.",
          itemData: "22 December,2022",
        },
        {
          id: 8,
          image: "art3.png",
          itemHeader: "Interior Design",
          itemTitle: "Best For Any Office & Business Interior Solution",
          itemData: "25 December,2022",
        },
        {
          id: 9,
          image: "art4.png",
          itemHeader: "Kitchan Design",
          itemTitle: "123Let’s Get Solution For Building Construction Work",
          itemData: "26 December,2022",
        },
        {
          id: 10,
          image: "art5.png",
          itemHeader: "Living Design",
          itemTitle: "123Low Cost Latest Invented Interior Designing Ideas.",
          itemData: "22 December,2022",
        },
        {
          id: 11,
          image: "art6.png",
          itemHeader: "Interior Design",
          itemTitle: "123Best For Any Office & Business Interior Solution",
          itemData: "25 December,2022",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    changePage(p) {
      console.log(p);
      this.page = p;
    },
  },

  computed: {
    perPage() {
      return this.quantity;
    },
    currentElements() {
      const { perPage, page } = this;
      return this.articles.slice(
        perPage * (page - 1),
        perPage * (page - 1) + perPage
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
//blog
.blog {
  margin-top: 96px;

  &__header {
    font-family: $familyTitle;
    color: $headerColor;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
  }

  &__description {
    width: 810px;
    margin: 0 auto;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
  }

  &__articles {
    padding-top: 52px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 27px;

    &_back {
      padding: 21px;
      width: 382px;
      @include flexCenter;
      flex-direction: column;
      box-sizing: border-box;
      border: 1px solid rgb(231, 231, 231);
      border-radius: 62px;
      box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

      &:hover {
        background: #f4f0ec;
      }
    }
  }

  &__articles_header {
    position: absolute;
    @include flexCenter;
    margin: 0;
    width: 129px;
    height: 41px;
    transform: translate(10%, -160%);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-transform: capitalize;
    background-color: #ffffff;
    border-radius: 8px 8px 8px 0px;
  }

  &__title {
    margin: 0;
    padding-top: 21px;
    padding-right: 60px;
    width: 80%;
    font-family: $familyTitle;
    color: $headerColor;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
  }

  &__articles_bottom {
    padding-top: 30px;
    width: 340px;
    @include flexCenter;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  &__articles_btn {
    background-color: inherit;
    border: none;

    & svg circle:hover {
      fill: #ffffff;
    }
  }
}
</style>
