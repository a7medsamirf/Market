<template>
    <div class="cart-wrap">
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


      <div class="inner align-center justify-center">
        <div class="text-center" v-if="$store.state.cart.cart.length == 0">
          <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
          <p class="use-text-title4">{{ $t('product.NoItems') }}</p>
        </div>
        <v-container>

          <v-row>
      <v-col cols="12" md="9">
        <v-row>

      <v-col cols="12" md="12" v-if="$store.state.cart.cart.length > 0">

<v-card v-for="(c, i) in $store.state.cart.cart" :key="c"
 class="mx-auto mb-3 rounded" outlined flat>

  <v-list-item three-line :key="`cartItem${i}`">
    <v-list-item-avatar tile size="70" outlined>
      <v-img :title="c.product.name" height="100" width="100" contain
        :src="require(`~/static/images/shop/${c.product.image}`)">
      </v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="text-h5 Gray600--text"> {{ c.product.name }} </v-list-item-title>
      <v-list-item-subtitle class="Gray400--text">{{ $formatMoney(c.product.price) }}</v-list-item-subtitle>
    </v-list-item-content>


  <div class="count rounded " outlined>
    <button class="Gray600--text pa-2" @click="$store.commit('cart/IncreaseItemCount', i)"><i class="fa-regular fa-plus" ></i></button>

    <span class="mx-2 Gray600--text">{{ c.quantity }}</span>

    <button class="Gray600--text pa-2" @click="$store.commit('cart/DecreaseItemCount', i)"><i class="fa-regular fa-minus"></i></button>
  </div>


  <span class="px-5 ms-16"> {{ $formatMoney(c.product.price * c.quantity) }}</span>

    <v-btn class="delete"  @click="$store.commit('cart/RemoveCartItem', i)" right icon color="error">
      <v-icon color="error" size="18">mdi-trash-can-outline</v-icon>
    </v-btn>

  </v-list-item>
</v-card>

</v-col>

        </v-row>

      </v-col>


      <v-col cols="12" md="3" v-if="$store.state.cart.cart.length > 0">
        <div class="sidebar-wrap mx-3">
          <v-card
          class="mx-auto rounded"
          max-width="344"
          flat
          outlined>

  <v-list-item >
    <v-list-item-content>
      <v-list-item-title > ملخص الطلب </v-list-item-title>
      <v-list-item-title class="text-h6">أجمالى الطلب</v-list-item-title>
    </v-list-item-content>

    <v-list-item-subtitle >مجموع المنتجات</v-list-item-subtitle>
    <v-spacer></v-spacer>
      <span>{{ $formatMoney ($store.state.cart.Total) }}</span>

  </v-list-item>

  <v-card-actions>
    <div class="mb-3" >
              <v-btn
                class="rounded"
                to="/cart/confirm"
                min-width="150"
                min-height="45"
                color="primary"
                elevation="0"
              >Checkout  {{ $formatMoney ($store.state.cart.Total) }} </v-btn>
            </div>
  </v-card-actions>
</v-card>
        </div>
      </v-col>
    </v-row>


        </v-container>


      </div>

    </div>
  </template>
  <script>
  export default {
    name: "Cart",
    head() {
      return {
        title: this.PageTitle,
      }
    },
    data(){
      return {
        PageTitle: 'Cart',
        items: [
        {text: 'links.Home', disabled: false, to: '/',},
        {text: 'links.Cart',disabled: true,to: '/cart',},
      ],
      }
    },

  };
  </script>

  <style lang="scss">
  .cart-wrap{
    .v-avatar{
      @include rtl-sass-margin-right(12px);
    }
.count{
    @include rtl-sass-margin-right(30px);
    border: thin solid rgba(0, 0, 0, 0.12);
    padding: 0 10px;
    margin-top: 10px;
 }
 
  }
  .v-btn.delete:before{
    opacity: 0.08;
  }

  </style>
