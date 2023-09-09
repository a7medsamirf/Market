<template>
  <article class="slug-wrap">
    <div class="breadcrumb">
      <v-container>
        <div class="col-full">
          <h2 class="use-text-title2 white--text mb-3"> {{ blog.title }}</h2>
          <nav class="woocommerce-breadcrumb ">
            <nuxt-link :to="localePath('/')">{{ $t('nav.Home') }}</nuxt-link>
            <span class="breadcrumb-separator white--text"> / {{ blog.title }} </span>
          </nav>
        </div>
      </v-container>
      <div class="breadcrumb-bg"></div>
      <div class="location Site-1"></div>
      <div class="location Site-2 "></div>

    </div>
    <div class="inner d-flex align-center justify-center py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <div class="post-content pa-3">
          <v-img
            height="400"
            alt=""
            :src="require(`~/static/images/blog/${blog.img}`)"
          ></v-img>
            <div class="blog-title pa-5">
              <h2 class="use-text-title2 text-color-default text-xs-center">{{ blog.title }}</h2>




            </div>
            <v-divider></v-divider>

     <!-- content from markdown -->

      <nuxt-content :document="blog" />
            <!-- content author component -->

            <author :author="blog.author" />

            <!-- prevNext component -->
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >

                <v-chip>  <span><v-icon small color="primary" class="fi fi-rr-calendar mr-3"></v-icon></span>
                  {{ formatDate(blog.updatedAt) }}</v-chip>
              </v-chip-group>

            <blog-comment />

      <!-- prevNext component -->
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="sidebar-wrap pa-3">
            <div class="sidebar-widget mb-5">
              <app-search-input />
            </div>
            <div class="sidebar-widget mb-5">
              <div class="widget-tittle ma-2">
                <h2>Categories</h2>
                <span></span>
              </div>
              <v-chip
                class="ma-2 white--text"
                color="primary"
                label
                v-for="tag of tags"
                :key="tag.slug"
              >
                <NuxtLink :to="`/blog/tag/${tag.slug}`" class="white--text">
                  <v-icon left text-color="white">
                    mdi-label
                  </v-icon>
                  {{ tag.name }}
                </NuxtLink>
              </v-chip>

            </div>

            <div class="sidebar-widget mb-5">
              <div class="widget-tittle ma-2">
                <h2>Follow Us</h2>
                <span></span>
              </div>
              <div>

                <v-btn class="ma-2" color="primary" dark><v-icon dark left> mdi-facebook</v-icon>Facebook</v-btn>
                <v-btn class="ma-2" color="red" dark><v-icon dark left>mdi-twitter</v-icon>twitter</v-btn>
                <v-btn class="ma-2" dark><v-icon dark left>mdi-linkedin</v-icon>linkedin</v-btn>
                <v-btn class="ma-2" dark><v-icon dark left>mdi-instagram</v-icon>instagram</v-btn>
              </div>

            </div>


          </div>

        </v-col>

      </v-row>
    </v-container>
    </div>
  </article>
</template>

<script>
import BlogComment from "~/components/blog/blog-comment";
import PrevNext from "~/components/blog/PrevNext";
import Author from "~/components/blog/Author";
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
export default {
  components: {Author, PrevNext, BlogComment, AppSearchInput},
  async asyncData({ $content, params, app, error }) {
    const slug = params.slug;
    const blog = await $content(`${app.i18n.locale}/blog`, slug)
    .fetch()
    .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: blog.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))

   return {
     blog,
     tags,
    }
  },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.blog.title,
    };
  },
}
</script>

<style lang="scss">
.theme--light.v-application .slug-wrap
{
  .post-content {
    background-color: #fff;
  }

}



</style>
