<template lang="">
  <section class="">
    <div class="pt-20">
    <v-container class="fill-height">
      <Title :SectionTitle="$t('sectiontitle.Brands-Title')" :SectioDesc="$t('sectiontitle.Brands-Description')" />
      <v-spacer></v-spacer>
      <v-btn :to="localePath('/blog')" color="primary" outlined class="white--text pa-5">عرض الكل <v-icon right dark> mdi-cloud-upload </v-icon> </v-btn>


      <v-row class="mt-10">
        <v-col cols="12" lg="3" md="3" sm="6" v-for="(product, i) in productsitems" :key="`productsitems${i}`">
          <v-skeleton-loader
                  v-if="data_loaded"
                  type=" card-avatar, article, actions"
                >
                </v-skeleton-loader>

                <v-card
                  class="mx-auto Product-Card"
                  elevation-0
                  outlined
                  flat
                  v-if="!data_loaded"
              >

    <v-img
      height="200"
      :src="require(`~/static/images/shop/${product.image}`)"
    >
    <v-chip
      class="ma-2"
      color="primary"
      label
      text-color="white">  {{ $formatMoney(product.price) }}   </v-chip>

  </v-img>

  <v-card-title class="text-subtitle-1 font-weight-bold Gray600--text">  {{ $t('product.name ') }} </v-card-title>

    <v-card-text class="product-description text-Gray600">
      <p class=""> {{ product.description }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn
        outlined
        class="pa-5"
        depressed
        nuxt
        :to="`/products/${product.id}`"
      >
      أضف للسلة  
      <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>


      <v-spacer> </v-spacer>
      <v-btn
        outlined
        class="pa-5"
      >
      <i class="fi fi-rr-heart"></i>
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
import Title from '../widget/Title.vue'
export default {
  
    name: "Product-Card",
    components: {Title },
    props: { productsitems: Array },
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
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ar', options)
    }
  },

}
</script>
<style>

.product-description p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>


