<template lang="">
  <v-parallax
    dark
    :src="require(`~/static/images/Banner/Banner.png`)"
    style="min-height: 500px"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>
<script>
export default {
    name: "banner1"
}
</script>
<style lang="">

</style>
