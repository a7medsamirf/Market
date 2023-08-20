<template>
  <div>


    <!---------- Start Navigation Drawer ---------->
  <v-navigation-drawer class="hidden-md-and-up" v-model="drawer"   :right="$vuetify.rtl">
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
  </v-navigation-drawer>
  <!---------- End Navigation Drawer ---------->

  <div class="hidden-md-and-down ">
      <v-app-bar class="top-nav"
        color="Gray50"
        dense
        elevation="0"
      >
      <v-container class="pa-0 fill-height">
        <v-btn text>
        News
      </v-btn>

      <v-divider vertical inset></v-divider>

      <v-btn text>
        Blog
      </v-btn>

      <v-divider vertical inset></v-divider>

      <v-btn text>
        Music
      </v-btn>


        <v-spacer></v-spacer>
        <v-toolbar-title>

          ahmed samir
        </v-toolbar-title>

      </v-container>


      </v-app-bar>
    </div>

   <!---------- Start App Bar ---------->
<!--    <v-app-bar app height="85px" fixed > -->
    <v-app-bar  height="85px"  elevation="0">
      <v-container class="pa-0 fill-height">
        <v-app-bar-nav-icon class="hidden-md-and-up"  @click.stop="drawer = !drawer" />
        <div class="logo">
          <NuxtLink :to="localePath('/')" >
          <v-img v-if="!$vuetify.theme.dark" max-height="50" max-width="170" :src="require('static/images/logo/dark-logo.png')" ></v-img>
          <v-img v-else max-height="50" max-width="170" :src="require('static/images/logo/white.png')" ></v-img>
        </NuxtLink>
        </div>
        <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
        <v-spacer />

      <v-badge bottom color="error" overlap offset-x="20" offset-y="45" v-if="$store.state.cart.cart.length > 0" :content="`${$store.state.cart.cart.length}`" >
       <v-btn @click.stop="rightDrawer = !rightDrawer"  icon><v-icon size="20">mdi-cart-outline</v-icon></v-btn>
      </v-badge>
      <v-btn @click.stop="rightDrawer = !rightDrawer" v-else  icon><v-icon size="20">mdi-cart-outline</v-icon></v-btn>


    <nav-search />
    <theme-switcher />
    <Settings />
      </v-container>
    </v-app-bar>
   <!---------- End App Bar ---------->

    <menu-nav />

         <!---------- Start Cart Drawer ---------->
        <v-navigation-drawer width="350" v-model="rightDrawer" :right="$vuetify.rtl" fixed  temporary >
       <v-list-item class="pa-3">

         <v-badge bottom color="error" overlap offset-x="25" offset-y="30" v-if="$store.state.cart.cart.length > 0" :content="`${$store.state.cart.cart.length}`" >
          <v-icon class="mr-3">mdi-shopping-outline</v-icon>
         </v-badge>
        <h5>Items</h5>
          <v-spacer></v-spacer>
       <v-btn class="close-icon" icon @click="rightDrawer = !rightDrawer"><v-icon>mdi-close</v-icon></v-btn>
      </v-list-item>
          <v-divider class="white--text"></v-divider>
          <div class="text-center inner align-center justify-center py-16" v-if="$store.state.cart.cart.length == 0">
            <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
            <p>Your cart is empty</p>
          </div>
          <div class="py-3">
          <template v-for="(c, i) in $store.state.cart.cart">
              <v-col :key="`cartItem${i}`" class="py-1">
                <v-card
                  outlined
                  elevation-0
                  flat
                >
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                      class="rounded-lg"
                    >
                      <v-img class="rounded-lg" :title="c.product.name" :alt="c.product.name" height="80" :src="require(`~/static/images/shop/${c.product.image}`)" ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="text-p mb-1">{{ c.product.name }}</v-list-item-title>
                      <v-list-item-subtitle>{{ $formatMoney(c.product.price * c.quantity) }}</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <v-btn @click="$store.commit('cart/IncreaseItemCount', i)" icon color="primary">
                          <v-icon size="20">mdi-plus-circle</v-icon>
                        </v-btn>
                        <span class="mx-2">{{ c.quantity }}</span>
                        <v-btn color="primary"  @click="$store.commit('cart/DecreaseItemCount', i)" icon>
                          <v-icon size="20">mdi-minus-circle</v-icon>
                        </v-btn></v-list-item-subtitle>
                      <v-row
                        align="center"
                        justify="end"
                      >
                        <v-btn
                          @click="$store.commit('cart/RemoveCartItem', i)"
                          absolute
                          bottom
                          right
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
                <v-btn nuxt to="/cart/confirm" class="rounded-0 mb-3" elevation="0" block  color="primary">Checkout</v-btn>
                <v-btn nuxt to="/cart" class="rounded-0" block outlined elevation="0" color="primary">View Cart</v-btn>
              </div>
            </div>
          </template>

    </v-navigation-drawer>
     <!---------- End Cart Drawer ---------->



  </div>

</template>

<script>
import ThemeSwitcher from "~/components/Header/ThemeSwitcher";
import NavSearch from "~/components/Header/NavSearch";
import Sidebar from "~/components/Header/Sidebar";
import Settings from '~/components/Header/Settings.vue';
import MenuNav from './menu-nav.vue';
export default {
  components: {Sidebar, ThemeSwitcher, NavSearch,Settings, MenuNav},
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

.v-app-bar--is-scrolled{
    position: fixed;
    top: 0;
    box-shadow: none!important;
    z-index: 9;
    transition: all 0.5s ease-in-out;
    transform: translateY(100px);
}
.v-toolbar.v-app-bar{
  transition: all 0.5s ease-in-out;
}
</style>
