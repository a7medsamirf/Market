<template lang="">
  <section class="">
    <div class="pt-20">
    <v-container class="fill-height">
      <Title :SectionTitle="$t('sectiontitle.Brands-Title')" :SectioDesc="$t('sectiontitle.Brands-Description')" />
      <v-spacer></v-spacer>
      <v-btn :to="localePath('/blog')" color="primary" outlined class="white--text pa-5">عرض الكل <v-icon right dark> mdi-cloud-upload </v-icon> </v-btn>


      <v-row class="mt-10">
        <v-col cols="12" xl="3" lg="3" md="4" class="pa-2"  v-for="(p, i) in productsitems" :key="`product${p.id}-${i}`">
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
      loader: null,
      loading: false,
    }
  },
  watch: {
  loader () {
    const l = this.loader
    this[l] = !this[l]
    setTimeout(() => (this[l] = false), 3000)
    this.loader = null
  },
},
  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 2000);
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
}
</script>
<style lang="scss">
.Product-Card {
  border: 1px solid #fff;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.v-btn{
  border: 1px solid #EEEEEE;
}
&:hover {
  border: 1px solid #62D0B6;
  .v-btn.addcart{
    background-color: #62D0B6;
    color: #fff;
    border: 1px solid #62D0B6;
    transition: all 0.5s ease-in-out;
  }
}
}

</style>


