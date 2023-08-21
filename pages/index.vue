<template>
  <div>
    <HomeCarousel :sale_items="sale_items"/>
    <support />
    <review />
    <banner-1 />
      <brands />

  </div>



</template>

<script>
import HomeCarousel from '~/components/section/HomeCarousel.vue'
import Banner1 from '~/components/Banner/banner1.vue'
import Brands from '~/components/Sliders/Brands.vue'
import Review from '~/components/Sliders/Review.vue'
import Support from '~/components/products/Support.vue'
export default {
  components: {Brands, Banner1, Review, HomeCarousel, Support },
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
