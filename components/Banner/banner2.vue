<template>
<div>
  <v-container>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >

              <v-card-title><span v-html="card.title"></span></v-card-title>
            </v-img>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
</div>



</template>


<script>
  export default {
    data: () => ({
      cards: [
        { title: 'أفضل صوت نقى', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }),
  }
</script>
