<template>
  <v-app :dir="$dir()">
  <TheHeader />
    <v-main class="pa-0">

        <Nuxt />

    </v-main>
    <mobile-bar />
    <TheFooter />
  </v-app>
</template>

<script>
import ThemeSwitcher from "~/components/Header/ThemeSwitcher";
import Settings from "~/components/Header/Settings";
import TheFooter from "~/components/Footer/TheFooter";
import TheHeader from "~/components/Header/TheHeader";
import MobileBar from '~/components/Header/MobileBar.vue';
export default {
name: 'DefaultLayout',
components: {TheHeader, TheFooter, Settings, ThemeSwitcher, MobileBar},

}
</script>

<style>
.v-application {
  background-color: #f1f5f6;
}
</style>