<template>
  <div class="shop-wrap">
    <v-container>
   <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :to="item.to"
        :disabled="item.disabled"
      >
      {{ $t(item.text).toUpperCase() }}

      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>

      </v-container>

    <div class="inner d-flex align-center justify-center py-16">
      <v-container >
        <v-row v-if="product"  justify="center">
          <v-col cols="12" lg="6" md="12">
            <div class="product-img">
              <v-carousel>
            <v-carousel-item
             :src="require(`~/static/images/shop/${product.image}`)"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('~/static/images/blog/2.png')"
            >
            </v-carousel-item>
            <v-carousel-item
              :src="require('~/static/images/blog/3.png')"
            >
            </v-carousel-item>
  

          </v-carousel>

            <div class="sb-badge">
              <v-chip
                elevation="0"
                class="ma-2 white--text rounded-0"
                color="primary "
                label
                v-for="(tag, i) in product.tags"
                :key="`prod${product.id}-${i}`"
              >
              <NuxtLink :to="`/product/tag/${tag.id}`" class="white--text">
                  <v-icon left text-color="white">
                    mdi-label
                  </v-icon>
                  {{ tag }}
                </NuxtLink>

       
              </v-chip>
            </div>
            
            </div>
          </v-col>

          <v-col cols="12" md="6" class="align-self-center" >

              <v-spacer></v-spacer>
            <v-card-title class="py-2 pa-0 font-weight-bold text-color-default">
              <h3>{{ product.name }}</h3>

              <v-spacer></v-spacer>
            </v-card-title>
                <v-rating
                  readonly
                  half-increments
                  class="mb-2"
                  color="yellow darken-2"
                  background-color="grey lighten-1"
                  :value="product.ratings"
                  dense
                  size="20"
                ></v-rating>

              <h4 class="text-md-h6  primary--text"><span class="old-price">{{ $formatMoney(product.price) }}</span> {{ $formatMoney(product.salePrice) }}</h4>

            <p class="mt-5 mb-7">
              {{ product.description }}
            </p>
            <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">

              <v-btn
              class="addcart font-weight-bold rounded pa-5"
               :loading="loading"
                :disabled="loading"
                @click="$store.commit('cart/AddToCart', product); loader = 'loading' "
              outlined
   
            >
            <v-icon right  class="fa-regular fa-bag-shopping fa-lg"></v-icon>
            {{ $t('product.AddToCart') }}
        </v-btn>





            </v-card-actions>

            <v-card-actions>
              <v-list-item>
                  <v-list-item-title>Share:</v-list-item-title>
                  <v-spacer></v-spacer>
                <v-icon class="mr-1 social-link"> mdi-facebook </v-icon>
                <v-icon class="mr-1 social-link">mdi-twitter</v-icon>
                <v-icon class="mr-1 social-link">mdi-instagram</v-icon>
                <v-icon class="mr-1 social-link">mdi-linkedin</v-icon>
                <v-icon class="mr-1 social-link">mdi-pinterest</v-icon>
              </v-list-item>
            </v-card-actions>
          </v-col>
        </v-row>
    <description />

    <support />

      </v-container>

    </div>

  </div>
</template>

<script>
import Description from '~/components/products/Description.vue';
import Support from '~/components/products/Support.vue';
export default {
  components: { Description, Support },
  async created() {
    const locale = this.$i18n.locale;
    let d = await this.$content(`${locale}/products`)
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch();
    this.product = d[0];
  },
  data() {
    return {
      items: [
        {text: 'links.Home', disabled: false, to: '/',},
        {text: 'links.Shop', to: '/product',},
        {text: '{product.name}', disabled: true,to: '/product',},
      ],
      product: null,
      loader: null,
      loading: false,
    };
  },
  watch: {
  loader () {
    const l = this.loader
    this[l] = !this[l]
    setTimeout(() => (this[l] = false), 1500)
    this.loader = null
  },
},
};
</script>

<style lang="scss">
.theme--dark
{
  .v-icon.social-link
  {
    box-shadow: none !important;
    border-radius: 50% !important;
    background: #012a35;
    padding: 8px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .v-icon.social-link:hover
  {
    background-color: #62d0b6;
    color: #fff;
  }
}
.theme--light
{
  .v-icon.social-link
  {
    box-shadow: 0 2px 6px 2px rgb(56 125 255 / 10%) !important;
    border-radius: 50% !important;
    background: #fff;
    padding: 8px;
    font-size: 20px;
    color: #62d0b6;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .v-icon.social-link:hover
  {
    background-color: #62d0b6;
    color: #fff;
  }
}

.v-tab.v-tab--active {
  background: #62d0b6 !important;
  color: #fff !important;
}
.v-image:hover .v-image__image  {
  transform: scale(1.02);
}
.v-image .v-image__image{
  transform: scale(1.001);
  transition: all 0.5s;
}
.product-img
{
  position: relative;
  overflow: hidden;
}

.old-price
{
      color: #babbbc!important;
    text-decoration: line-through;
    margin-right: 6px;
}

</style>