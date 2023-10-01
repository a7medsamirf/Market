<template>
  <div>


    <!---------- Start Navigation Drawer ---------->
<!--   <v-navigation-drawer class="hidden-md-and-up" v-model="drawer"   :right="$vuetify.rtl">
    <v-list-item class="pa-3">
      <div class="logo">
          <NuxtLink :to="localePath('/')" >
          <v-img v-if="!$vuetify.theme.dark" max-height="50" max-width="170" :src="require('static/images/logo/dark-logo.png')" ></v-img>
          <v-img v-else max-height="50" max-width="170" :src="require('static/images/logo/white.png')" ></v-img>
        </NuxtLink>
        </div>
      <v-spacer></v-spacer>
      <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
    </v-list-item>
  <sidebar />
  </v-navigation-drawer> -->
  <!---------- End Navigation Drawer ---------->


<top-nav />



   <!---------- Start App Bar ---------->
   <v-divider class="white--text"></v-divider>
    <v-app-bar  class="nav"  height="85px"  elevation="1" color="white" underline>
      <v-container  class="fill-height">
        <v-app-bar-nav-icon class="hidden-md-and-up hidden-md-and-down"  @click.stop="drawer = !drawer" />
        <div class="logo">
          <NuxtLink :to="localePath('/')" >
          <v-img v-if="!$vuetify.theme.dark" contain max-height="50" max-width="170" :src="require('static/images/logo/dark-logo.png')" ></v-img>
          <v-img v-else max-height="50" contain max-width="170" :src="require('static/images/logo/white.png')" ></v-img>
        </NuxtLink>
        </div>
    <v-text-field
        flat
        solo-inverted
        hide-details
        label="ابحث عما تريد"
        prepend-inner-icon="mdi-magnify"
        class="hidden-sm-and-down px-10 ml-4"
      />


        <v-spacer />



    <Settings />

    <v-card class="elevation-0">
      <v-list-item>
        <div class="">
          <v-badge bottom color="error" overlap offset-x="20" offset-y="45" v-if="$store.state.cart.cart.length > 0" :content="`${$store.state.cart.cart.length}`" >
       <v-btn title="Your Cart" @click.stop="rightDrawer = !rightDrawer"  icon><v-icon class="fa-regular fa-cart-shopping-fast fa-lg"></v-icon></v-btn>
      </v-badge>
      <v-btn @click.stop="rightDrawer = !rightDrawer" v-else  icon><v-icon class="fa-regular fa-cart-shopping-fast fa-lg"></v-icon></v-btn>
        </div>
        <v-list-item-content class="total-price ms-3">
          <v-list-item-title class="mb-0 text"><p class="mb-1"> {{ $t('product.YourCart') }}</p></v-list-item-title>
          <v-list-item-subtitle class="font-weight-bold TxColor--text total-price">{{ $formatMoney ($store.state.cart.Total) }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>


      </v-container>
    </v-app-bar>

   <!---------- End App Bar ---------->

    <menu-nav />
    <v-divider class="white--text"></v-divider>


         <!---------- Start Cart Drawer ---------->
        <v-navigation-drawer width="350" v-model="rightDrawer" :right="$vuetify.rtl" fixed  temporary >
       <v-list-item class="pa-3">

         <v-badge bottom color="error" overlap offset-x="25" offset-y="30" v-if="$store.state.cart.cart.length > 0" :content="`${$store.state.cart.cart.length}`" >
          <v-icon class="mr-3 fi fi-rr-shopping-cart"></v-icon>
  
         </v-badge>
        <h5>{{ $t('product.Items') }}</h5>
          <v-spacer></v-spacer>
       <v-btn class="close-icon" icon @click="rightDrawer = !rightDrawer"><v-icon>mdi-close</v-icon></v-btn>
      </v-list-item>
          <v-divider class="white--text"></v-divider>
          <div class="text-center inner align-center justify-center py-16" v-if="$store.state.cart.cart.length == 0">
            <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
            <p>{{ $t('product.NoItems') }}</p>
          </div>
          <div class="py-3">
          <template v-for="(cartItem, i) in $store.state.cart.cart">
              <v-col :key="`cartItem${i}`" class="py-1">
                <v-card
                  outlined
                  flat
                >
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="80"
                      class="rounded"
                    >
                      <v-img 
                          class="rounded" :title="cartItem.product.name"
                          :alt="cartItem.product.name" height="80" contain
                          :src="require(`~/static/images/shop/${cartItem.product.image}`)" />

                    </v-list-item-avatar>
                    <v-list-item-content>

                      <v-list-item-title class="text-p mb-1">{{ cartItem.product.name }}</v-list-item-title>
                      
                      <v-list-item-subtitle>{{ $formatMoney(cartItem.product.price * cartItem.quantity) }}</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <v-btn @click="$store.commit('cart/IncreaseItemCount', i)" icon color="primary">
                          <v-icon size="20">mdi-plus-circle</v-icon>
                        </v-btn>
                        <span class="mx-2">{{ cartItem.quantity }}</span>
                        <v-btn color="primary"  @click="$store.commit('cart/DecreaseItemCount', i)" icon>
                          <v-icon size="20">mdi-minus-circle</v-icon>
                        </v-btn>
                      </v-list-item-subtitle>
                      <v-spacer></v-spacer>
                      <v-row
                        align="center"
                        justify="end"
                      >
                        <v-btn
                          @click="$store.commit('cart/RemoveCartItem', i)"
                          absolute
                          bottom
                          :right="$vuetify.ltr"
                          icon
                        >
                          <v-icon color="error" size="18">mdi-trash-can-outline</v-icon>
                        </v-btn>
                      </v-row>
                    </v-list-item-content>



                  </v-list-item>
                </v-card>

              </v-col>
          </template>
           </div>
          <template v-slot:append>
            <div class="pa-2 text-center">
              <div class="mb-3" v-if="$store.state.cart.cart.length > 0">
                <v-btn nuxt :to="localePath('/cart/confirm')" class="rounded-0 mb-3" elevation="0" block  color="primary">Checkout</v-btn>
                <v-btn nuxt :to="localePath('/cart')" class="rounded-0" block outlined elevation="0" color="primary">View Cart</v-btn>
              </div>
            </div>
          </template>

    </v-navigation-drawer>
     <!---------- End Cart Drawer ---------->



  </div>

</template>

<script>

import Sidebar from "~/components/Header/Sidebar";
import Settings from '~/components/Header/Settings.vue';
import MenuNav from './menu-nav.vue';
import TopNav from './TopNav.vue';

export default {
  components: {Sidebar,Settings, MenuNav, TopNav},
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      fixed: false,
    }

  },

}
</script>

<style scoped lang="scss">
@import './Header.scss';
.v-app-bar{
  transition: all 0.5s ease-in-out;
}
header.nav.v-toolbar.v-app-bar.v-app-bar--is-scrolled{
    position: fixed;
    top: 0;
    z-index: 9;
    animation: 1000ms ease-in-out 0s normal none 1 running fadeInDown;
    transition: all 0.5s ease-in-out;
    transform: translateY(100px);
    box-shadow: 0 0 25px 0 rgba(45,69,95,.1)!important;
}

 .total-price .text p {
    font-weight: 500;
    font-size: 13px;
    line-height: 14px;
    color: #515d66;
}
.total-price {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #212529;
}

</style>
