<template>
  <div class="blog-wrap">
    <div class="breadcrumb">
      <v-container>
        <div class="col-full">
          <h2 class="use-text-title2  mb-3"> {{PageTitle}}</h2>
          <nav class="woocommerce-breadcrumb ">
            <nuxt-link :to="localePath('/')">{{ $t('nav.Home') }}</nuxt-link>
            <span class="breadcrumb-separator "> / {{PageTitle}}</span>
          </nav>
        </div>
      </v-container>
      <div class="breadcrumb-bg"></div>
      <div class="location Site-1"></div>
      <div class="location Site-2 "></div>

    </div>
    <div class="inner py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col v-for="blog in blogs" :key="blog.slug"
                      sm="12"
                      md="6"
              >
                <v-skeleton-loader
                  v-if="data_loaded"
                  type=" card-avatar, article, actions"
                >
                </v-skeleton-loader>
                <v-card
                   outlined
                   flat
                  v-if="!data_loaded"
                >
<!--                  <NuxtLink  :to="{ name: 'blog-slug', params: { slug: article.slug } }">-->

                  <NuxtLink :to="localePath(blog.path)">
                    <div class="blog-img">
                      <v-img
                        v-if="blog.img"
                        :src="require(`~/static/images/blog/${blog.img}`)"
                        :alt="blog.alt"
                        height="250"
                      ></v-img>
                      <div class="sb-badge">
                        <v-chip
                          class="ma-2 white--text "
                          color="primary"
                          label
                          v-for="tag in blog.tags" :key="tag"
                        >
                          <v-icon left text-color="white">mdi-label</v-icon>
                          {{ tag }}
                        </v-chip>
                      </div>

                    </div>
                  </NuxtLink>
                  <div class="post-content pa-5">
                    <v-card-text class="py-1 pa-0">
                      <span class="blog-Date"> <v-icon small  color="primary">mdi-clock-outline</v-icon> {{ formatDate(blog.updatedAt) }}</span>
                    </v-card-text>
                    <NuxtLink :to="localePath(blog.path)">
                      <v-card-title class="py-2 pa-0 font-weight-bold">{{ blog.title }}</v-card-title>
                    </NuxtLink>
                    <v-card-text class="py-1 pa-0 "><p>{{ blog.description }}</p></v-card-text>

                    <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
                      <v-btn :to="localePath(blog.path)"  large color="primary"
                             class="button figs-btn pa-5 white--text">
                        Read More
                        <v-icon right small>mdi-arrow-right-thick</v-icon>
                      </v-btn>

                    </v-card-actions>
                  </div>
                </v-card>

              </v-col>


            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <div class="sidebar-wrap mx-3">
                <app-search-input />
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

              <div class="sidebar-widget mb-5 ">

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

  </div>
</template>

<script>
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
export default {
  components: {AppSearchInput},
  async asyncData({ $content, app, error}) {
    const defaultLocale = app.i18n.locale;
    const blogs = await $content(`${defaultLocale}/blog`)
         /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      .sortBy('createdAt', 'desc')
      .fetch()
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
       const tags = await $content('tags')
       .only(['name', 'slug'])
       .fetch()

    return {
      blogs: blogs.map(blog => ({...blog, path: blog.path.replace(`/${defaultLocale}`, ''),})),
      tags, 
      data_loaded : true,
      PageTitle: 'Our Blog',
    }
  },
  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 2000);
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.PageTitle,
    }
  }
}
</script>

<style lang="scss">
  .v-card {
    overflow: hidden;
    .blog-description {
      margin-top: 0;
      margin-bottom: 0;
      color: #636465;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }


.blog-link {
  text-decoration: none;
  color: #41641e;
}
.blog-img
{
  overflow: hidden;
cursor: pointer;
}
.v-card .blog-img .v-image
{
  transition: .3s ease-in-out;
}

.v-card:hover .blog-img .v-image{
transform: rotate(15deg) scale(1.4);
}

</style>

