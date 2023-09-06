export default {
  async created() {
    try {
      this.sale_items = await this.$content("product")
        .where({ onSale: true })
        .fetch();
      
      this.productsitems = await this.$content("product")
    /*    .where({ tags: { $containsAny: ['Mobile'] } }) */
        .limit(8) // استدعاء اخر 5 مقالات
        .fetch();

      this.products = await this.$content("product").fetch();
    } 
    catch (error) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      products: null,
      sale_items: null,
      productsitems: null,
    };
  },
  
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

};



