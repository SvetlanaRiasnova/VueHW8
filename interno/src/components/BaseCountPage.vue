<template>
  <div class="count__page">
    <div class="count__page_wrap">
      <a href="#" class="count__page_number">
        <p class="count__page-number_value">01</p>
      </a>
      <a href="#" class="count__page_number">
        <p class="count__page-number_value">02</p>
      </a>
      <a href="#" class="count__page_number">
        <p class="count__page-number_value">03</p>
      </a>
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
  </div>
</template>

<script>
export default {
  name: "BaseCountPage",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
.count__page {
  margin-top: 51px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;

  &_wrap {
    display: flex;
    gap: 20px;
  }

  &_number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;
    text-decoration: none;

    &_value {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      text-transform: capitalize;
    }

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
