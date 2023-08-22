<template>
  <div>
<!--     <v-img
                  :src="require(`~/static/images/Banner/Banner.png`)"
                  height="500"
                  contain
                ></v-img> -->


  <HomeCarousel :sale_items="sale_items"/>
  <features />

    <banner2 />
    <review />

    <banner-1 />
      <brands />

  </div>



</template>

<script>
import HomeCarousel from '~/components/section/HomeCarousel.vue'
import Banner1 from '~/components/Banner/banner1.vue'
import banner2 from '~/components/Banner/banner2.vue'
import Brands from '~/components/Sliders/Brands.vue'
import Review from '~/components/Sliders/Review.vue'
import Features from '~/components/section/features.vue'

export default {
  components: {Brands, Banner1, banner2, Review, HomeCarousel, Features },
  name: 'IndexPage',
  async created() {
    this.sale_items = await this.$content("products")
      .where({ onSale: true })
      .fetch();
    this.products = await this.$content("products").fetch();
  },
  data() {
    return {
      products: null,
      sale_items: null,
    };
  },
}
</script>
