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
    <v-container>
      <v-row dense>


        <v-col cols="12" md="3">

            <div class="sidebar-wrap mx-3">
            <div class="sidebar-widget mb-5">
              <v-text-field
                v-model="search"
                flat
                small-chips
                outlined
                hide-details
                autocomplete="on"
                label="ابحث عما تريد"
                color="primary"><v-icon slot="append" color="primary"> mdi-magnify</v-icon>
              </v-text-field>

        
            </div>
            <div class="sidebar-widget mb-5">
              <v-list v-if="$vuetify.breakpoint.mdAndUp" color="transparent" subheader>
                <div class="widget-tittle ma-2">
                  <h2>Categories</h2>
                  <span></span>
                </div>
    

              </v-list>

              <v-list v-if="$vuetify.breakpoint.mdAndUp" color="transparent" subheader>
                <div class="widget-tittle ma-2">
                  <h2>Tags</h2>
                  <span></span>
                </div>



              </v-list>

            </div>

            <div class="sidebar-widget mb-5">
            <social />
            </div>


          </div>

     

        </v-col>


        <v-col cols="12" md="9">
          <v-row>

            <template v-for="(p, i) in filteredProducts">
              <v-fade-transition :key="`product${p.id}-${i}`">
                <v-col cols="12" xl="3" lg="4" md="4" class="pa-2">
                  <v-card
                  class="mx-auto Product-Card pa-3 rounded"
                  outlined
                  >

                    <nuxt-link :to="localePath(`/product/${p.id}`)">
                    <v-img  :src="require(`~/static/images/shop/${p.image}`)" contain  height="200">
                      <template slot="placeholder">
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="primary"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
           

                        <v-chip v-if="p.new"
                        class="ma-1"
                        color="red"
                        label
                        text-color="white"
                           
                              >
                              {{ $t('product.new') }}
                              </v-chip>
                        

                      <v-chip v-if="!isNaN(p.discount)"
                        class="ma-1"
                        color="primary"
                        label
                        text-color="white">  {{ p.discount }}  % {{ $t('product.Discount') }}</v-chip>
                  

                    </v-img>
                    </nuxt-link>

                    <div class="content">
    <v-card-title class="font-weight-bold Gray600--text pb-1">  {{ p.name }} </v-card-title>
  
      <v-card-text class="product-description text-Gray600 pb-0">
        <p class="pb-0 mb-1 font-weight-regular"> {{ p.description }}</p>
      </v-card-text>
      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="p.ratings"
          color="amber"
          dense
          half-increments
          readonly
          size="16"
        ></v-rating>

        <div class="grey--text ms-4">
          {{p.ratings}}
        </div>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      <h4 class="ext-subtitle-1 error--text price"><span class="old-price">{{ $formatMoney(p.price) }}</span> {{ $formatMoney(p.salePrice) }}   
      </h4>
      <v-spacer> </v-spacer>
        <div class="grey--text ms-4">
        
      <p v-if="p.inStock" class="in-stock mb-0">{{ $t('product.InStock') }}</p>
       <p v-else class="out-of-stock mb-0">{{ $t('product.OutOfStock') }}</p>

        </div>
      </v-row>
    </v-card-text>


   
  </div>


        
                    <v-card-actions>
                        <v-btn
                            v-if="p.inStock"
                          class="addcart font-weight-bold rounded pa-5 "
                          :loading="loading&&p.id == product.id"
                          :disabled="loading&&p.id==product.id"
                          @click="AddToCart(p)"
                          outlined
                          width="70%"
                        >
                        <v-icon right  class="fa-regular fa-bag-shopping fa-lg"></v-icon>
                        {{ $t('product.AddToCart') }}
                        </v-btn>
                        <v-btn class="OutOfStock font-weight-bold rounded pa-5" v-else color="error" 
                        elevation="0"
                          width="70%"
                        >
                        {{ $t('product.OutOfStock') }}

                        </v-btn>



                        <v-spacer> </v-spacer>
                        <v-btn
                          outlined
                          class="rounded pa-5"
                        >
                        <i class="fa-regular fa-heart fa-lg"></i>
                        </v-btn>
                        </v-card-actions>




                  </v-card>
                </v-col>
              </v-fade-transition>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </div>
</template>


<script>
import Social from "~/components/widget/social";
export default {
    name: "products",
  components: {Social},
  head() { return { title: this.PageTitle,} },
  
  async asyncData({ $content, app, error}) {
    const defaultLocale = app.i18n.locale;
    const products = await $content(`${defaultLocale}/products`)
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      products: products.map(product => ({
        ...product,
        path: product.path.replace(`/${defaultLocale}`, ''),
      })),
      data_loaded : true,

    }
  },
  data() {
    return {
      items: [
        {text: 'links.Home', disabled: false, to: '/',},
        {text: 'links.Shop',disabled: true,to: '/products',},
      ],
      PageTitle: 'Shop',
      products: null,
      search: null,
      loader: null,
      loading: false,
      product:null
    };
  },
  watch: {
  loader () {
    const l = this.loader
    this[l] = !this[l]
    setTimeout(() => (this[l] = false), 3000)
    this.loader = null
  },
},
  computed: {
    filteredProducts() {
      if (!this.products || !this.search) return this.products;
      return this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.price.toString();
        const sprice = p.salePrice?.toString() || "";
        const r = p.ratings.toString();
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        );
      });
    },
  },
  methods : {
    AddToCart(prod){
      this.product = prod;
      setTimeout(()=>{
        this.$store.commit('cart/AddToCart', prod);
        this.loading = false;
      } , 1000);
      this.loading = true;
    },

  }
};
</script>

<style>
.Wishlist:hover{
  background-color: #f55157;
  transition: all 0.5s ease-in-out;
  color: #fff;
}

.sidebar-wrap
{
  position: sticky !important;
  top: 100px;
}
</style>



