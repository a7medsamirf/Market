<template>
  <!----- Start Section Title ----->
  <section id="Section-Title">
    <v-row>
      <v-col class="pa-5">
        <h2 class="text-color-default use-text-title2 my-3 "> {{ SectionTitle }} </h2>
        <h3 color="Gray400"> {{ SectioDesc }}</h3>
      </v-col>
    </v-row>

  </section>
  <!----- End Section Title ----->
</template>
<script>
export default {
  name: "Title",
  props: {
    SectionTitle: {
      type: String,
      required: true
    },
    SectioDesc: {
      type: String,
      required: true
    },
  },
}


</script>
  
<style lang="scss" scoped></style>
  