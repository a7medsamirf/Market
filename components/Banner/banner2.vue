<template>
<div class="img-Banner">
  <v-container >
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12"  v-for="card in cards" :key="card.title">
          <v-card class="" elevation="0" rounded="lg">
            <v-img
              :src="require(`~/static/images/Banner/${card.images}`)"
              height="200"
            >
                      <v-row class="fill-height pa-15" justify="end" align="center">
                          <div class="images-wrapper">
                         <div class="font-weight-bold use-text-title6">سماعة ديجتال</div>
                          <v-card-title color="Gray600" class="font-weight-bold use-text-title2 px-0">{{ card.title }}</v-card-title>
                          <v-list-item-subtitle class="font-weight-bold use-text-title5">{{ card.subtitle }}</v-list-item-subtitle>
                          </div>
                      </v-row>


            </v-img>

          </v-card>
        </v-col>

      </v-row>
    </v-container>
</div>



</template>


<script>
import imgAPI from '~/server/api/imgAPI'
  export default {
    data: () => ({
      cards: [
        { title: 'أفضل صوت نقى', subtitle: 'تسوق الأن', images: imgAPI.Banner[0]},
        { title: '  صوت نقى', subtitle: 'تسوق الأن', images: imgAPI.Banner[1]},
      ],
    }),
  }
</script>

<style lang="scss">
.v-application--is-ltr{
.img-Banner{
  .v-image{
    @include rtl-flip;
  }
}
}


</style>
