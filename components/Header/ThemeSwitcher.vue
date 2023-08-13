<template>
  <v-fade-transition mode="out-in">
    <v-tooltip v-if="!$vuetify.theme.dark" bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" fab @click="toggle_dark_mode" class="ThemeSwitcher-btn">
          <v-img
            height="20"
            max-width="20"
            :src="require('static/images/svg/moon-filled-to-sunny-filled-loop-transition.svg')"
          >
        </v-img>

          
        </v-btn>
      </template>
      <span>{{ $t('common.Dark-Mode') }}</span>
    </v-tooltip>

    <v-tooltip v-else bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on"  fab @click="toggle_dark_mode" class="ThemeSwitcher-btn">
          <v-img
            height="20"
            max-width="20"
            :src="require('static/images/svg/sunny-filled-loop-to-moon-filled-loop-transition.svg')"
          >
        </v-img>

        </v-btn>
      </template>
      <span>{{ $t('common.Dark-Mode') }}</span>
    </v-tooltip>

  </v-fade-transition>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  data () {
    return {

    }
  },
  methods: {
    toggle_dark_mode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
}
</script>

<style lang="scss" scoped>
.ThemeSwitcher-btn{
  align-items: center;
  background-color: #fee6e3;
  color: #111;
  cursor: pointer;
}

</style>