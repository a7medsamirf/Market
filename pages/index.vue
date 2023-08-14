<template>
  <div>
    <banner-1 />
    <review />
    <banner-1 />
      <brands />

  </div>



</template>

<script>
import Banner1 from '~/components/Banner/banner1.vue'

import Brands from '~/components/Sliders/Brands.vue'
import Review from '~/components/Sliders/Review.vue'
export default {
  components: {Brands, Banner1, Review },
  name: 'IndexPage'
}
</script>
