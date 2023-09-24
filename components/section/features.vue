<template>
  <div class="pt-20">
    <v-container >
      <v-row>
      <v-col cols="12" lg="3" md="6" sm="6" v-for="(support, index) in supports" :key="index">
    <v-card
      class="mx-auto py-3 rounded"
      flat
    >
      <v-list-item three-line>
            <v-list-item-avatar
          tile
          size="50"
          color="primary"
          class="rounded-circle"
        >
        <v-icon x-large class="white--text">{{ support.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="font-weight-bold use-text-title5">{{ support.title }}</div>
          <div class="use-text-subtitle mt-2">{{support.description}}</div>
        </v-list-item-content>

      </v-list-item>
    </v-card>
      </v-col>

      </v-row>
    </v-container>


  </div>
  </template>

  <script>
  export default {
      name: "Features",
    data () {
      return {
       supports: [
        {icon: 'mdi-moped', title: 'منتجات مضمونه', description: 'مدفوعات آمنة أقساط تصل إلى 12 شهرًا', },
        {icon: 'mdi-currency-usd', title: 'شحن مجاني' , description: 'مدفوعات آمنة أقساط تصل إلى 12 شهرًا',},
        {icon: 'mdi-face-agent', title: 'مدفوعات آمنة' , description: 'مدفوعات آمنة أقساط تصل إلى 12 شهرًا',},
        {icon: 'mdi-face-agent', title: 'مدفوعات آمنة' , description: 'مدفوعات آمنة أقساط تصل إلى 12 شهرًا',},

      ]
    }
    }
  }
  </script>



  <style>

  </style>
