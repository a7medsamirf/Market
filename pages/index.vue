<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
          <button-v-1 />
      </v-card>
   
    </v-col>

    <card />


  </v-row>
</template>

<script>
import buttonV1 from '~/components/Buttons/button-V1.vue'
import Card from '~/components/Cards/card.vue'
export default {
  components: { buttonV1, Card },
  name: 'IndexPage'
}
</script>
