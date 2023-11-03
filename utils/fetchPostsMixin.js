export default {
  async asyncData({ $content, app, error }) {
    const defaultLocale = app.i18n.locale;
  
    const productsitems = await $content(`${defaultLocale}/products`)
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()
      .catch(() => {
         error({ statusCode: 404, message: 'Page not found' })
      });

      // sale items
      const  sale_items = await $content(`${defaultLocale}/products`)
        .where({ onSale: true })
        .fetch()
        .catch(() => {
          error({ statusCode: 404, message: 'Page not found' })
       });
       
  // blogs
    const blogs = await $content(`${defaultLocale}/blog`)
      .sortBy('createdAt', 'desc')
      /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      .limit(3)  // استدعاء اخر 5 مقالات
      .fetch()
      .catch(() => {
         error({ statusCode: 404, message: 'Page not found' })
      });
  
    return {
      data_loaded: true,
      sale_items: sale_items.map(product => ({...product, path: product.path.replace(`/${defaultLocale}`, ''),})),
      productsitems: productsitems.map(product => ({...product, path: product.path.replace(`/${defaultLocale}`, ''),})),
      blogs: blogs.map(blog => ({...blog, path: blog.path.replace(`/${defaultLocale}`, ''),})),
    };
  }

};



