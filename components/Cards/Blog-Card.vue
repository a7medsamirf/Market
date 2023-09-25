<template lang="">
  <div class="pt-20">
    <v-container class="fill-height">
      <Title :SectionTitle="$t('sectiontitle.Blog-Title')" :SectioDesc="$t('sectiontitle.Blog-Description')" />
      <v-spacer></v-spacer>
      <v-btn :to="localePath('/blog')" color="primary" outlined class="white--text pa-5">عرض الكل <v-icon right dark>
          mdi-cloud-upload </v-icon>
      </v-btn>

      <v-row class="mt-10">
        <v-col cols="12" lg="4" md="6" sm="12" v-for="blog in blogs" :key="blog.slug">
          <v-skeleton-loader v-if="data_loaded" type=" card-avatar, article, actions">
          </v-skeleton-loader>
          <v-card class="mx-auto pa-5 rounded" outlined v-if="!data_loaded">
            <NuxtLink :to="localePath(blog.path)">
              <v-img v-if="blog.img" :src="require(`~/static/images/blog/${blog.img}`)" :alt="blog.alt"
                class="white--text" height="250px">

                <v-chip class="ma-2" color="primary" label text-color="white">

                  {{ formatDate(blog.updatedAt) }}

                </v-chip>
              </v-img>
            </NuxtLink>
            <v-card-title>
              {{ blog.title }}</v-card-title>

            <v-card-subtitle class="pb-0">
              {{ blog.description }}
            </v-card-subtitle>


          </v-card>


        </v-col>


      </v-row>
    </v-container>
  </div>


  </div>
</template>
<script>
  import Title from '../widget/Title.vue'
  export default {
    name: "BlogCard",
    components: {
      Title
    },
    props: ['blogs'],
    data() {
      return {
        data_loaded: true,
      }

    },
    mounted() {
      setTimeout(() => {
        this.data_loaded = false;
      }, 2000);
    },
    methods: {
      formatDate(date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('ar', options)
      }
    },
  }

</script>
<style lang="">

</style>
