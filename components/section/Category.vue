<template lang="">
    <section class="">
      <div class="pt-20">
      <v-container class="fill-height">
        <Title :SectionTitle="$t('sectiontitle.Category-Title')" :SectioDesc="$t('sectiontitle.Category-Description')" />
        <v-spacer></v-spacer>
        <v-btn :to="localePath('/blog')" color="primary" outlined class="white--text pa-5">عرض الكل <v-icon right dark> mdi-cloud-upload </v-icon> </v-btn>
  
  
        <v-row class="mt-10">
          <v-col cols="12" lg="2" md="3" sm="6">
            <v-card
            class="text-center"
            flat>
            <v-list-item-avatar
        class="rounded-pill"
        tile
        size="100"

        color="grey"
      ></v-list-item-avatar>
    <v-list-item>
      <v-list-item-content>

        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely</v-list-item-subtitle>
      </v-list-item-content>


    </v-list-item>


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
      name: "Category",
      components: {Title },
      data () {
      return {


      }
    },

  
  }
  </script>
  <style>

  </style>
  
  
  