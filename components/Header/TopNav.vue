<template>

    <div class="hidden-md-and-down ">
      <v-app-bar class="top-nav"
        dense
        elevation="0"
        color="white"
        underline
      >
      <v-container  class="pa-0 fill-height">
        <v-btn text>
        News
      </v-btn>

      <v-divider vertical inset></v-divider>

      <v-btn text>
        Blog
      </v-btn>

      <v-divider vertical inset></v-divider>

      <v-btn text>
        Music
      </v-btn>


        <v-spacer></v-spacer>
        <v-toolbar-title>

          ahmed samir
        </v-toolbar-title>

      </v-container>


      </v-app-bar>
    </div>

</template>
<script>

export default {
  components: {  },
    name: "TopNav",
    data () {
    return {

    }

  },
}
</script>

<style scoped lang="scss">


</style>
