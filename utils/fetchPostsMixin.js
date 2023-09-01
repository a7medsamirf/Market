
export default {
  async asyncData({ $content, app, error}) {
    const defaultLocale = app.i18n.locale;
    const blogs = await $content(`${defaultLocale}/blog`)
         /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      .sortBy('createdAt', 'desc')
      .limit(3) // استدعاء اخر 5 مقالات
      .fetch()

      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })


    return {
      blogs: blogs.map(blog => ({
        ...blog,
        path: blog.path.replace(`/${defaultLocale}`, ''),
      })),
      data_loaded : true,

    }
  },


}


