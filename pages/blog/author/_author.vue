<template>
  <div class="tag-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading">  {{ blogs[0].author.name }}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="breadcrumb-separator"> / Author</span></nav>
      </div>
    </div>


    <div class="inner d-flex align-center justify-center py-16">
      <v-container>
        <NuxtLink to="/blog">Back to All Blog</NuxtLink>
        <h3 class="mb-4 font-bold text-4xl">   Here are a list of blogs by {{ blogs[0].author.name }}:</h3>
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col
                sm="12"
                md="6"
                v-for="blog in blogs" :key="blog.slug"
              >
                <v-skeleton-loader
                  v-if="data_loaded"
                  type=" card-avatar, article, actions"
                >
                </v-skeleton-loader>
                <v-card
                  v-if="!data_loaded"
                   outlined
                    flat
                >


             <!--      <NuxtLink
                    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  > -->
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
                          <v-icon left text-color="white">
                            mdi-label
                          </v-icon>
                          {{ tag }}

                        </v-chip>
                      </div>



                    </div>

                  </NuxtLink>
                  <div class="post-content pa-5">
                    <v-card-text class="py-1 pa-0">
                      <span class="blog-Date"> <v-icon small  color="primary">mdi-clock-outline</v-icon>  {{ formatDate(blog.updatedAt) }}</span>
                      <span class="blog-user"> <v-icon small  color="primary">mdi-account</v-icon> {{ blog.author.name }}</span>
                    </v-card-text>
                    <v-card-title class="py-1 pa-0">{{ blog.title }}</v-card-title>
                    <v-card-text class="py-1 pa-0">{{ blog.description }}</v-card-text>

                    <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
                      <v-btn :to="{ name: 'blog-slug', params: { slug: blog.slug } }"  large color="primary"
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
        <h1>Test</h1>
          </v-col>
        </v-row>







      </v-container>
    </div>


    </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params }) {
    const defaultLocale = app.i18n.locale;
    const blogs = await $content(`${defaultLocale}/blog`)
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        }
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      blogs: blogs.map(blog => ({
        ...blog,
        path: blog.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
