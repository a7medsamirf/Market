<template>
  <div class="">
    <v-text-field
        class="pa-0 ma-0"
        v-model="searchQuery"
        autocomplete="on"
        :loading="loading"
        :items="articles"
        :item-text="article => `${article.slug}`"
        placeholder=" ابحث بأسم الفيلم او المسلسل"
        prepend-inner-icon="mdi-magnify"
        hide-details

        hide-selected
        outlined
      >

      </v-text-field>

      <v-list dense v-if="articles.length">
        <v-list-item-group v-model="selectedItem"
        color="primary">
          <v-list-item v-for="article of articles" :key="article.slug">
            <v-list-item-content  >
              <NuxtLink :to="`/${article.slug}`" class="white--text">
            {{ article.title }}
              </NuxtLink>

            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>






  </div>
</template>
<script>
  import fetchPostsMixin from '@/utils/fetchPostsMixin'
export default {
  name: "NavSearch",
  mixins: [fetchPostsMixin],
  data() {
    return {
      searchQuery: '',
      articles: [],
      loading: false,
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  },
    methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>
