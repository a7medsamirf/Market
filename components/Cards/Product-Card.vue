<template lang="">
  <section class="">
    <div class="pt-20">
    <v-container class="fill-height">
      <Title :SectionTitle="$t('sectiontitle.Brands-Title')" :SectioDesc="$t('sectiontitle.Brands-Description')" />
      <v-spacer></v-spacer>
      <v-btn :to="localePath('/blog')" color="primary" outlined class="white--text pa-5">عرض الكل <v-icon right dark> mdi-cloud-upload </v-icon> </v-btn>


      <v-row class="mt-10">
        <v-col cols="12" lg="4" md="6" sm="6">
          <v-skeleton-loader
                  v-if="data_loaded"
                  type=" card-avatar, article, actions"
                >
                </v-skeleton-loader>

                <v-card
                  class="mx-auto my-12 Product-Card"
                  max-width="374"
                  elevation-0
                  outlined
                  flat
                  v-if="!data_loaded"
              >

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
    <v-chip
      class="ma-2"
      color="primary"
      label
      text-color="white">  YESY   </v-chip>
 
  </v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>


    <v-card-actions>
      <v-btn
        color="primary"
        outlined
        class="pa-5"
      >
        Reserve  <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>


        </v-col>


      </v-row>
    </v-container>
  </div>

  </section>


  </div>
</template>
<script>

export default {
    name: "Product-Card",
    components: { },
    props: ['blogs'],
    data () {
    return {
      data_loaded : true,
    }

  },
  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 2000);
  },

}
</script>
<style lang="">

</style>


