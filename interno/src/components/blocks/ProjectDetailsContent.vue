<template>
  <div class="project__details_content container">
    <h2 class="project__details_header">Minimal Look Bedrooms</h2>
    <p class="project__details_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae
      turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus
      purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi
      fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus
      bibendum commodo.
      <br />
      <br />
      In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus
      lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec
      a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis
      elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin
      tincidunt ligula id purus porttitor.
    </p>
  </div>
</template>
<script>
export default {
  name: "ProjectDetailsContent",
};
</script>

<style lang="scss">
@import "@/style/variables.scss";
.project__details_content {
  padding-top: 200px;
  padding-bottom: 100px;
  width: 658px;
  text-align: left;
}
.project__details_header {
  font-family: $familyTitle;
  color: $headerColor;
  font-size: 50px;
  font-weight: 400;
  line-height: 125%;
}
.project__details_text {
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
}
</style>
