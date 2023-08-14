<template>
    <v-app-bar>
    <v-container class="pa-0 fill-height" elevation="0">

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
        prepend-inner-icon="mdi-magnify"
        label="ابحث عما تريد"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />

      <ThemeSwitcher />
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
      <v-btn v-on="on" to="/cart" icon>
        <v-badge
          content="2"
          value="2"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-container>
    </v-app-bar>
    
</template>
<script>
import ThemeSwitcher from './ThemeSwitcher.vue'
export default {
  components: { ThemeSwitcher },
    name: "Top Header",
}
</script>

<style scoped lang="scss">

</style>