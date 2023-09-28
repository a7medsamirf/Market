<template>
    <div class="Confirm-wrap">
      <div class="breadcrumb">
        <div class="col-full">
          <h1 class="breadcrumb-heading">{{PageTitle}}</h1>
          <nav class="woocommerce-breadcrumb">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/cart">/ Cart</nuxt-link>
            <span class="breadcrumb-separator dark"> / {{PageTitle}}</span></nav>
        </div>
      </div>
      <div class="inner align-center justify-center py-16">
      <div class="text-center" v-if="$store.state.cart.cart.length == 0">
        <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
        <p>Your cart is empty</p>
      </div>
      <v-container v-else>
        <div class="mb-3" v-if="$store.state.cart.cart.length > 0">
          <v-btn nuxt to="/cart" min-width="150" min-height="45" depressed
            >Back</v-btn
          >
          <v-btn @click="proccess" min-width="150" min-height="45" color="primary"
            >Complete</v-btn
          >
        </div>
        <v-form lazy-validation ref="form" class="mt-10">
          <p class="font-weight-bold">Personal & Delivery</p>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                outlined
                label="Email"
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="name"
                :rules="[rules.required]"
                outlined
                label="Full Name"
                type="text"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="phone"
                outlined
                label="Phone"
                type="tel"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="address"
                :rules="[rules.required]"
                outlined
                label="Address"
                type="text"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="city"
                :rules="[rules.required]"
                outlined
                label="City"
                type="text"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="country"
                :rules="[rules.required]"
                outlined
                label="Country"
                type="text"
              ></v-text-field>
            </v-col>
          </v-row>
          <p class="font-weight-bold">Credit card</p>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="cc"
                :rules="[rules.required]"
                outlined
                label="Credit Card Number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="expdate"
                :rules="[rules.required]"
                outlined
                label="Exp date"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="cvv"
                :rules="[rules.required]"
                outlined
                label="Security code/CVV"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      </div>
    </div>
  </template>
  
  <script>
  import FormMixinx from "~/mixins/FormMixinx";
  export default {
    name: "Confirm",
    head() {
      return {
        title: this.PageTitle,
      }
    },
    mixins: [FormMixinx],
    data() {
      return {
        PageTitle: 'Confirm',
        email: "ahmed.samir@gmail.com",
        name: "ahmed samir",
        phone: "01111220072",
        address: "cairo",
        city: "cairo",
        country: "Egypt",
        cc: "4001-9192-5753-7193",
        expdate: "06/30",
        cvv: "125",
      };
    },
    methods: {
      async proccess() {
        const ProcessingOrder = this.$i18n.t('product.ProcessingOrder');
        const PleaseWait = this.$i18n.t('product.PleaseWait');
        const OrderComplete = this.$i18n.t('product.OrderComplete');
        const ThankYou = this.$i18n.t('product.ThankYou');
        if (!this.$refs.form.validate()) return;
        await this.$swal({
          title: ProcessingOrder, 
          icon: "info",
          allowEscapeKey: false,
          allowOutsideClick: false,
          timer: 2000,
          timerProgressBar: true,
          text: PleaseWait,
          showConfirmButton: false,
        });
        await this.$swal({
          title: OrderComplete,
          icon: "success",
          allowEscapeKey: false,
          allowOutsideClick: false,
          timer: 2000,
          timerProgressBar: true,
          text: ThankYou,
          showConfirmButton: false,
        });
        //Remove items from cart
        this.$store.commit("cart/ClearCart");
        this.$router.push("/");
      },
    },
  };
  </script>
  
  <style></style>
  