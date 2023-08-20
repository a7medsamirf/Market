export default {
  async asyncData({$content,params}) {
    const Movies = await $content('articles', params.slug)
    .where({sections: {$containsAny: ['Movies']}})
      .sortBy('createdAt', 'asc')
      .limit(6)
      .fetch();

    const Series = await $content('articles', params.slug)
      .where({sections: {$containsAny: ['Series']}})
      .sortBy('createdAt', 'desc')
      .limit(6)
      .fetch();

    const articles = await $content('articles', params.slug)
      /*.only(['title', 'description', 'img', 'slug', 'quality', 'imdb'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      /* .sortBy('createdAt', 'asc') */ // ترتيب المقالات من الاقدم للاحدث
      .sortBy('createdAt', 'desc') // ترتيب المقالات من الاحدث للاقدم
      .limit(12)  // استدعاء اخر 5 مقالات
      .fetch()

      ///// get all tags
    const tags = await $content('tags')
      .only(['name', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

      ///// get all categories
    const categories = await $content('categories')
      .only(['name', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

 ///// get all Producers
    const Producers = await $content('Producers')
    .only(['name', 'slug'])
    .sortBy('createdAt', 'asc')
    .fetch()

    return {
      articles,
      tags,
      categories,
      Producers,
      Movies,
      Series
    }
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
  }
}


