<template lang="">
    <section class="">
      <div class="pt-20">
      <v-container class="fill-height">
        <Title :SectionTitle="$t('sectiontitle.Brands-Title')" :SectioDesc="$t('sectiontitle.Brands-Description')" />
        <v-spacer></v-spacer>
        <v-btn :to="localePath('/blog')" color="primary" outlined class="white--text pa-5">عرض الكل <v-icon right dark> mdi-cloud-upload </v-icon> </v-btn>
  
  
        <v-row class="mt-10">
          <v-col class="pa-2" cols="12" xl="2" lg="3" md="4" sm="6" v-for="(product, i) in products" :key="`product${product.id}-${i}`" >
            <v-skeleton-loader
                    v-if="data_loaded"
                    type=" card-avatar, article, actions"
                  >
                  </v-skeleton-loader>
  
                  <v-card
                  outlined
                    class="mx-auto Product-Card rounded"
                    v-if="!data_loaded"
                >
      <v-img
        height="200"
        contain
        :src="require(`~/static/images/shop/${product.image}`)"
      >
      <v-chip
        class="ma-4"
        color="primary"
        label
        text-color="white">  {{ $formatMoney(product.price) }}  </v-chip>
  
    </v-img>
      <div class="content">
    <v-card-title class="font-weight-bold Gray600--text pb-1">  {{ product.name }} </v-card-title>
  
      <v-card-text class="product-description text-Gray600 pb-0">
        <p class="pb-0 mb-1 font-weight-regular"> {{ product.description }}</p>
      </v-card-text>
      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="product.ratings"
          color="amber"
          dense
          half-increments
          readonly
          size="16"
        ></v-rating>

        <div class="grey--text ms-4">
          {{product.ratings}}
        </div>
      </v-row>
    </v-card-text>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      <h4 class="ext-subtitle-1 error--text price"><span class="old-price">{{ $formatMoney(product.price) }}</span> {{ $formatMoney(product.salePrice) }}   
      </h4>
      <v-spacer> </v-spacer>
        <div class="grey--text ms-4">
        
      <p v-if="product.inStock" class="in-stock mb-0">{{ $t('product.InStock') }}</p>
       <p v-else class="out-of-stock mb-0">{{ $t('product.OutOfStock') }}</p>

        </div>
      </v-row>
    </v-card-text>


   
  </div>



  text: ItemRemoved,

      <v-card-actions>


        <v-btn
        v-if="product.inStock"
          class="addcart font-weight-bold rounded pa-5 "
          :loading="loading&&product.id == product.id"
          :disabled="loading&&product.id == product.id"
          @click="AddToCart(product)"
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
  name: "Product",
  components: {Title },
  props: { products: Array },
      data () {
      return {
        data_loaded : true,
        loader: null,
        loading: false,
        product:null
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
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ar', options)
      },
  }

  }
  </script>
  <style>

  </style>
  
  
  