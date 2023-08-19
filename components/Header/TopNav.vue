<template>
  <div>
    <v-app-bar app elevation="0" class="mt-10 ">
    <v-container class="pa-0 fill-height" >

      <v-toolbar-title>
      <div class="logo">
          <NuxtLink :to="localePath('/')" >
            <v-img v-if="!$vuetify.theme.dark" max-height="60" max-width="170" :src="require('static/images/logo/dark-logo.png')" ></v-img>
            <v-img v-else max-height="60" max-width="170" :src="require('static/images/logo/white.png')" ></v-img>
          </NuxtLink>
        </div>
      </v-toolbar-title>
      
      <v-text-field
        flat
        solo-inverted
        hide-details
        label="ابحث عما تريد"
        prepend-inner-icon="mdi-magnify"
        class="hidden-sm-and-down px-10 ml-4"
      />
      <v-spacer />

      <ThemeSwitcher />
      <Settings />
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
        <i class="fi fi-rr-circle-user"></i>
      </v-btn>
      <v-btn v-on="on" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-badge bottom color="error" overlap offset-x="20" offset-y="45" v-if="$store.state.cart.cart.length > 0" :content="`${$store.state.cart.cart.length}`" >
       <v-btn @click.stop="rightDrawer = !rightDrawer"  icon><v-icon size="20">mdi-cart-outline</v-icon></v-btn>
      </v-badge>
      <v-btn @click.stop="rightDrawer = !rightDrawer" v-else  icon><v-icon size="20">mdi-cart-outline</v-icon></v-btn>





    </v-container>
    </v-app-bar>




         <!---------- Start Cart Drawer ---------->
        <v-navigation-drawer width="350" v-model="rightDrawer" :right="$vuetify.rtl"   temporary>
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
                <v-btn nuxt to="/cart/confirm" class="rounded-0" large  color="primary">Checkout</v-btn>
                <v-btn nuxt to="/cart" class="rounded-0"  large outlined color="primary">View Cart</v-btn>
              </div>
            </div>
          </template>

    </v-navigation-drawer>
     <!---------- End Cart Drawer ---------->
    </div>
</template>
<script>
import Settings from './Settings.vue';
import ThemeSwitcher from './ThemeSwitcher.vue'
export default {
  components: { ThemeSwitcher, Settings },
    name: "TopNav",
    data () {
    return {
      drawer: false,
      rightDrawer: false,
    }

  },
}
</script>

<style scoped lang="scss">
.v-app-bar--is-scrolled{
  transition: all 0.5s ease-in-out;
}
</style>