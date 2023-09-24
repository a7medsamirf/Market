<template>
    <div>
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
                  flat
                >
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                      class="rounded"
                    >
                      <v-img class="rounded" :title="c.product.name" :alt="c.product.name" height="80" :src="require(`~/static/images/shop/${c.product.image}`)" ></v-img>
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

export default {
  name: "CartDrawer",
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
