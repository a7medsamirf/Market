<template>

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
import Settings from './Settings.vue';
import ThemeSwitcher from './ThemeSwitcher.vue'
export default {
  components: { ThemeSwitcher, Settings },
    name: "TopHeader",
}
</script>

<style scoped lang="scss">
.v-app-bar--is-scrolled{
  transition: all 0.5s ease-in-out;
}
</style>