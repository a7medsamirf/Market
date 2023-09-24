<template>
  <section class="Brands py-20" id="Brands">
    <v-container>
      <Title :SectionTitle="$t('sectiontitle.Brands-Title')" :SectioDesc="$t('sectiontitle.Brands-Description')" />

      <div class="BrandCard" id="BrandCard">
        <slick ref="slick" :options="slickOptions">
          <div class="Brand" v-for="(Brand, index) in BrandData" :key="index">
            <div class="Brand-block">
              <v-card class="mx-auto pa-5 rounded mt-10" outlined>
                <v-img style="filter: grayscale(100%);"  :src="require(`~/static/images/Brands/${Brand.images}`)">
                </v-img>
              </v-card>
            </div>
          </div>
        </slick>
      </div>
    </v-container>

  </section>
</template>

<script>
import imgAPI from '~/server/api/imgAPI'
import Title from '../widget/Title.vue'
export default {
  name: "Brands",
  components: {
    Slick: () => import('vue-slick'),
    Title
  },
  data() {
    return {
      item: 0,
      imgAPI: imgAPI,
      BrandData: [
        { images: imgAPI.Brands[4], },
        { images: imgAPI.Brands[3], },
        { images: imgAPI.Brands[2], },
        { images: imgAPI.Brands[1], },
        { images: imgAPI.Brands[0], },
        { images: imgAPI.Brands[5], },
        { images: imgAPI.Brands[6], },
      ],
      slickOptions: {
        slidesToShow: 5,
        centerMode: false,
        arrows: true,
        dots: false,
        infinite: false,
        speed: 800,
        autoplaySpeed: 3000,
        autoplay: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    }
  },
}
</script>

<style scoped lang="scss">
#Brands {
  .Brand-block {
    position: relative;
    margin: 5px;
  }
}
</style>