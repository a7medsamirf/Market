<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
          <button-v-1 />
      </v-card>
   
    </v-col>
  </v-row>
</template>

<script>
import buttonV1 from '~/components/buttons/button-V1.vue'
export default {
  components: { buttonV1 },
  name: 'IndexPage'
}
</script>
