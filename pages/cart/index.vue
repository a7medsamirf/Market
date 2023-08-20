<template>
    <div class="contact-wrap">
      <div class="breadcrumb">
        <div class="col-full">
          <nav class="woocommerce-breadcrumb">
            <nuxt-link to="/">Home</nuxt-link>
            <span class="breadcrumb-separator dark"> / {{PageTitle}}</span></nav>
        </div>
      </div>

      <div class="inner align-center justify-center py-16">
        <div class="text-center" v-if="$store.state.cart.cart.length == 0">
          <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
          <p>No Items Just Yet</p>
        </div>
        <v-container>

          <v-row>
      <v-col cols="12" md="9">
        <v-row>

      <v-col cols="12" md="12" v-if="$store.state.cart.cart.length > 0">

<v-card v-for="(c, i) in $store.state.cart.cart" :key="c" class="mx-auto mb-3" outlined elevation-0>
  <v-list-item three-line :key="`cartItem${i}`">
    <v-list-item-avatar tile size="70" color="grey">
      <v-img class="rounded-lg" :title="c.product.name" height="100" width="100"
        :src="require(`~/static/images/shop/${c.product.image}`)">
      </v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="text-h5"> {{ c.product.name }} </v-list-item-title>
      <v-list-item-subtitle>{{ $formatMoney(c.product.price) }}</v-list-item-subtitle>

    </v-list-item-content>


    <v-btn outlined @click="$store.commit('cart/IncreaseItemCount', i)" icon>
      <v-icon  size="20">mdi-plus-circle</v-icon>
    </v-btn>

    <span class="mx-2">{{ c.quantity }}</span>
    <v-btn outlined  @click="$store.commit('cart/DecreaseItemCount', i)" icon>
      <v-icon size="20">mdi-minus-circle</v-icon>
    </v-btn>

    {{ $formatMoney(c.product.price * c.quantity) }}
    <v-btn @click="$store.commit('cart/RemoveCartItem', i)" right icon color="error">
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
  class="mx-auto"
  max-width="344"
  outlined
>
  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title class="text-h6">أجمالى الطلب</v-list-item-title>

    </v-list-item-content>
    <v-list-item-subtitle >مجموع المنتجات</v-list-item-subtitle>
    <v-spacer></v-spacer>
      <span>{{ $formatMoney ($store.state.cart.Total) }}</span>

  </v-list-item>

  <v-card-actions>
    <div class="mb-3" >
              <v-btn
                
                nuxt
                to="/cart/confirm"
                min-width="150"
                min-height="45"
                color="primary"
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
      }
    },

  };
  </script>

  <style lang="scss">
  .v-data-table > .v-data-table__wrapper > table {
    border-spacing: 0 0.5rem;
  }

  .v-data-table {
    .v-data-table__wrapper {
      table {
        td,
        th {
          padding-left: 16px !important;
          min-width: 170px !important;
          border: 1px solid #e8e8e8 !important;
          border-bottom: none !important;
          font: 14px/40px !important;
          text-align: left !important;
        }

        td {
          color: #666 !important;
        }

        th {
          color: #231E41 !important;
          border: none !important;
          font-size: 16px !important;
          font-weight: $font-medium;
        }



        tbody tr td {
          border: none !important;
          height: 65px;
        }
      }
    }
  }
  .theme--light.v-application
  {
       tbody {
          tr {
            margin: 20px 5px;
            background-color: #fbfbfb !important;
            cursor: pointer !important;
          }
        }
  }
  .theme--dark.v-application
  {
         tbody {
          tr {
            margin: 20px 5px;
            cursor: pointer !important;
          }
        }
  }

  </style>
