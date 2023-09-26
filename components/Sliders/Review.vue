<template>
    <section class="Review py-20" id="Review">
      <v-container>
        <Title
         :SectionTitle="$t('sectiontitle.Review-Title')"
         :SectioDesc="$t('sectiontitle.Review-Description')"
      />


    <div class="ReviewCard" id="ReviewCard">
     <slick ref="slick" :options="slickOptions">
      <div class="review" v-for="(review, index) in ReviewData" :key="index">

      <div class="comment-block">

        <v-card class="mx-auto pa-5 rounded mt-10"  outlined>
        <div class="person-block">

          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="use-text-title5 text-color-default mb-1 mt-3" :inner-text.prop="$t(review.title)" />
              <v-list-item-subtitle class="use-text-paragraph" :inner-text.prop="$t(review.comment)"/>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-avatar class="photo" width="70" height="70">

            <v-img
                :alt="review.title"
                :src="require(`~/static/images/avatars/${review.avatar}`)"
              ></v-img>

          </v-avatar>

    <v-list-item-content class="ms-4">
      <v-list-item-title class="text-h5 mb-1">{{ review.name }}</v-list-item-title>
      <v-list-item-subtitle>Web Designer</v-list-item-subtitle>
    </v-list-item-content>


  </v-list-item>
</div>
        </v-card>
      </div>

      </div>

</slick>

</div>
</v-container>
  </section>
</template>

<script>
import imgAPI from '~/server/api/imgAPI'
import Title from '../widget/Title.vue'
export default {
  name: "Testimonials",
  components: {
  Slick: () => import('vue-slick'),
  Title
},
data(){
  return {
    item: 0,
    imgAPI: imgAPI,
    ReviewData: [
      {
        avatar: imgAPI.avatar[3],
        title: 'common.reviewtitle1',
        name: 'Austin Evon',
        comment: 'common.comment',
      },
      {
        avatar: imgAPI.avatar[2],
        title: 'common.reviewtitle2',
        name: 'Alisa Gray',
        comment: 'common.comment',
      },
      {
        avatar: imgAPI.avatar[5],
        title: 'common.reviewtitle3',
        name: 'Jena Doe',
        comment: 'common.comment',
      },
      {
        avatar: imgAPI.avatar[4],
        title: 'common.reviewtitle1',
        name: 'Jena Doe',
        comment: 'common.comment',
      },
      {
        avatar: imgAPI.avatar[0],
        title: 'common.reviewtitle2',
        name: 'Jena Doe',
        comment: 'common.comment',
      },

    ],
    slickOptions: {
      slidesToShow: 3,
      centerMode: false,
      arrows: true,
      dots: false,
      infinite: false,
      speed: 800,
      autoplaySpeed: 3000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

  }
},
}
</script>

<style scoped lang="scss">
.ReviewCard {
    .comment-block{
        position: relative;
        margin: 5px ;
        .person-block{
            .v-avatar{
               
            }
        }
      
    }
}
</style>
