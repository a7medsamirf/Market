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

    <ProductCard :productsitems="productsitems" />


    <review />

    <banner-1 />


    <BlogCard :blogs="blogs"/>
      <brands />



  </div>



</template>

<script>
import fetchPostsMixin from '@/utils/fetchPostsMixin';
import HomeCarousel from '~/components/section/HomeCarousel.vue'
import Banner1 from '~/components/Banner/banner1.vue'
import banner2 from '~/components/Banner/banner2.vue'
import Brands from '~/components/Sliders/Brands.vue'
import Review from '~/components/Sliders/Review.vue'
import Features from '~/components/section/features.vue'
import BlogCard from '~/components/Cards/Blog-Card.vue'
import ProductCard from '~/components/Cards/Product-Card.vue';
export default {
  name: 'IndexPage',
  components: {Brands, Banner1, banner2, Review, HomeCarousel, Features, BlogCard , ProductCard},
  mixins: [fetchPostsMixin],

}
</script>
