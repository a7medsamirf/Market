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
                clearable
                   autocomplete="on"
                placeholder="Search Products"
                    solo-inverted
                flat
                color="primary"
                      ><v-icon
                      slot="append"
                      color="primary"
                       >
                        mdi-magnify
                      </v-icon>
              </v-text-field>

            </div>
            <div class="sidebar-widget mb-5">
              <v-list v-if="$vuetify.breakpoint.mdAndUp" color="transparent" subheader>
                <div class="widget-tittle ma-2">
                  <h2>Categories</h2>
                  <span></span>
                </div>
                <v-chip
                  class="ma-2 white--text"
                  color="primary"
                  label
                  link
                  v-for="(c, i) in categories"
                  :key="`category${i}`"
                >

                  <v-icon left text-color="white">
                    mdi-label
                  </v-icon>
                  {{ c.name }}

                </v-chip>

              </v-list>

              <v-list v-if="$vuetify.breakpoint.mdAndUp" color="transparent" subheader>
                <div class="widget-tittle ma-2">
                  <h2>Tags</h2>
                  <span></span>
                </div>
                <v-chip
                  class="ma-2 white--text"
                  color="primary"
                  label
                  link
                  v-for="(t, i) in tags"
                  :key="`tag${t}`"
                >

                  <v-icon left text-color="white">
                    mdi-label
                  </v-icon>
                  {{ t.name }}

                </v-chip>

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
                <v-col cols="12" md="4">
                  <v-card
                  class="mx-auto Product-Card pa-5 rounded-lg"
                  outlined
                  >

                    <nuxt-link :to="`/product/${p.id}`">
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
                    </v-img>
                    </nuxt-link>
                    <v-card-title class="text-md-body-1 font-weight-bold">{{p.name}}</v-card-title>
                    <v-card-text class="product-description text-Gray600">
      <p class=""> {{ p.description }}</p>
    </v-card-text>
                    <v-card-subtitle class="primary--text pb-3">
                      ${{ p.price }}
                    </v-card-subtitle>
                    <v-card-text>


                      <v-chip
                        x-small
                        label
                        outlined
                        class="mr-1"
                        v-for="(t, i) in p.tags"
                        :key="`prod${p.id}-${i}`"
                      >
                        <NuxtLink :to="`/tag/${t.id}`" class="white--text">

                          {{ t }}
                        </NuxtLink>


                      </v-chip>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
                        <v-btn
                          class="addcart font-weight-bold rounded-lg pa-5 hidden-md-and-down"
                          :loading="loading&&p.id == product.id"
                          :disabled="loading&&p.id==product.id"
                          @click="AddToCart(p)"
                          outlined
                          width="70%"
                        >
                        <v-icon right  class="fa-regular fa-bag-shopping fa-lg"></v-icon>
                        {{ $t('common.AddToCart') }}
                        </v-btn>
                        <v-spacer> </v-spacer>
      <v-btn
        outlined
        class="rounded-lg pa-5"
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
  head() {
    return {
      title: this.PageTitle,
    }
  },
  async created() {
    this.products = await this.$content('product').fetch();
    this.categories = await this.$content('categories').fetch()
    this.tags = await this.$content('tags').fetch()
  },
  data() {
    return {
      items: [
        {text: 'links.Home', disabled: false, to: '/',},
        {text: 'links.Shop',disabled: true,to: '/products',},
      ],
      PageTitle: 'Shop',
      products: null,
      tags: null,
      categories: null,
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
    }
  }
};
</script>

<style>
  .v-btn.addcart{
    background-color: #62D0B6;
    color: #fff;
    border: 1px solid #62D0B6;
    transition: all 0.5s ease-in-out;
  }
</style>



