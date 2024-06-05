<template>
  <div class="blog__page container">
    <div class="blog__page_wrapper">
      <div
        class="blog__page_article"
        v-for="article in filteredArticles"
        :key="article.id"
      >
        <h2 class="blog__page_article-title">{{ article.title }}</h2>
        <p class="blog__page_article-text" v-if="article.firstText">
          {{ article.firstText }}
        </p>
        <ol
          class="blog__page_article-ordered-description"
          v-if="article.liItems"
        >
          <li
            class="blog__page_article-text"
            v-for="(item, index) in article.liItems"
            :key="index"
          >
            {{ item }}
          </li>
        </ol>
        <img
          class="blog__page_article-img"
          :src="require('../assets/img/' + article.image)"
          alt="article image"
        />
        <div class="blog__page_article-info">
          <p class="blog__page_article-date" v-if="article.date">
            {{ article.date }}
          </p>
          <p class="blog__page_article-link" v-if="article.breadcrumbs">
            {{ article.breadcrumbs }}
          </p>
        </div>
        <p class="blog__page_article-text">{{ article.text }}</p>
        <div v-if="article.quote" class="blog__page_article-quote">
          <p class="blog__page_article-simbol">&#8221;</p>
          <p class="blog__page_article-quote-text" v-if="article.quoteText">
            {{ article.quoteText }}
          </p>
        </div>
      </div>
    </div>
    <div class="blog__tags">
      <h2 class="blog__tags_header">Tags</h2>
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
  </div>
</template>

<script>
export default {
  name: "DetailsBlogPage",
  data() {
    return {
      findArticlebyTag: "",
      TagsTitle: "Tags",
      articlesList: [
        {
          id: 0,
          title: "Let’s Get Solution for Building Construction Work",
          firstText: "",
          liItems: [],
          image: "ArtImgDetails1.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "26 December,2022",
          breadcrumbs: "Interior / Home / Decore",
          quote: "<p class='blog__page_article-simbol'>&#8221;</p>",
          quoteText: "The details are not the details. They make the design.",
          tag: "Kitchen",
        },
        {
          id: 1,
          title: "Let’s Get Solution for Building Construction Work",
          firstText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          liItems: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          image: "ArtImgDetails1.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "",
          breadcrumbs: "",
          quote: "",
          quoteText: "",
          tag: "Bedroom",
        },
        {
          id: 2,
          title: "Let’s Get Solution for Building Construction Work",
          firstText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. ",
          liItems: [],
          image: "art2.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "26 December,2022",
          breadcrumbs: "",
          quote: "",
          quoteText: "",
          tag: "Kitchen",
        },
        {
          id: 3,
          title: "Let’s Get Solution for Building Construction Work",
          firstText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. ",
          liItems: [],
          image: "art5.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "22 December,2022",
          breadcrumbs: "",
          quote: "",
          quoteText: "",
          tag: "Building",
        },
        {
          id: 4,
          title: "Let’s Get Solution for Building Construction Work",
          firstText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          liItems: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          image: "ArtImgDetails1.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "",
          breadcrumbs: "",
          quote: "",
          quoteText: "",
          tag: "Bedroom",
        },
        {
          id: 5,
          title: "Let’s Get Solution for Building Construction Work",
          firstText: "",
          liItems: [],
          image: "ArtImgDetails1.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "26 December,2022",
          breadcrumbs: "Interior / Home / Decore",
          quote: "<p class='blog__page_article-simbol'>&#8221;</p>",
          quoteText: "The details are not the details. They make the design.",
          tag: "Kitchen",
        },
        {
          id: 6,
          title: "Let’s Get Solution for Building Construction Work",
          firstText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          liItems: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          image: "ArtImgDetails1.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "",
          breadcrumbs: "",
          quote: "",
          quoteText: "",
          tag: "Bedroom",
        },
        {
          id: 7,
          title: "Let’s Get Solution for Building Construction Work",
          firstText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. ",
          liItems: [],
          image: "art2.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "26 December,2022",
          breadcrumbs: "",
          quote: "",
          quoteText: "",
          tag: "Kitchen",
        },
        {
          id: 8,
          title: "Let’s Get Solution for Building Construction Work",
          firstText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. ",
          liItems: [],
          image: "art5.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "22 December,2022",
          breadcrumbs: "",
          quote: "",
          quoteText: "",
          tag: "Building",
        },
        {
          id: 9,
          title: "Let’s Get Solution for Building Construction Work",
          firstText:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          liItems: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          image: "ArtImgDetails1.png",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          date: "",
          breadcrumbs: "",
          quote: "",
          quoteText: "",
          tag: "Bedroom",
        },
      ],
      buttonList: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bedroom",
      ],
    };
  },

  methods: {
    filterButton(item) {
      this.findArticlebyTag = item;
      console.log(this.findArticlebyTag);
    },
  },
  computed: {
    filteredArticles() {
      return this.findArticlebyTag
        ? this.articlesList.filter((el) =>
            el.tag.includes(this.findArticlebyTag)
          )
        : this.articlesList;
    },
  },
};
</script>

<style lang="scss">
@import "../style/variables.scss";
.blog__page {
  display: flex;
  padding-top: 197px;
  gap: 52px;
  &_wrapper {
    width: 800px;
  }
  &_article {
    padding-bottom: 21px;
    &-title {
      padding-bottom: 21px;
      color: $headerColor;
      font-family: $familyTitle;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
      text-align: left;
    }
    &-img {
      border-radius: 50px;
    }
    &-text {
      padding-bottom: 38px;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
    }
    &-info {
      padding-top: 46px;
      padding-bottom: 48px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
      text-transform: capitalize;
    }
    &-link {
      padding-right: 60px;
    }
    &-quote {
      @include flexCenter;
      width: 799px;
      height: 267px;
      flex-direction: column;
      padding: 53px 0px 53px 0px;
      border-radius: 50px;
      background: #f4f0ec;
    }
    &-simbol {
      margin: 0;
      color: #cda274;
      font-family: $familyTitle;
      font-style: italic;
      font-size: 200px;
      font-weight: 400;
      line-height: 125%;
      text-align: center;
      padding: 0;
    }
    &-quote-text {
      width: 345px;
      color: #cda274;
      font-family: $familyTitle;
      font-style: italic;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      text-align: center;
      margin-top: -20px;
    }
    &-ordered-description {
      padding-left: 30px;
    }
  }
  .blog__tags {
    width: 345px;
    &_header {
      color: $headerColor;
      font-family: $familyTitle;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      text-align: left;
      padding-bottom: 24px;
    }
    &_btns {
      display: flex;
      flex-wrap: wrap;
      row-gap: 11px;
    }
    &_btn {
      padding: 9px 30px 9px 30px;
      border: none;
      border-radius: 10px;
      background: rgb(244, 240, 236);
      color: #000000;
      margin: 0px 10px;
      &:focus {
        background: #292f36;
        color: #ffffff;
      }
    }
  }
}
</style>
