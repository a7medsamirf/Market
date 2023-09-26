<template>
  <div>
    <h1>Test</h1>

    <Product :products="products" />

  </div>
</template>

<script>
import Product from '~/components/Cards/Product.vue';
export default {
  name: 'IndexPage',
  components: { Product },
  async asyncData({ $content, app, error}) {
    const defaultLocale = app.i18n.locale;
    const products = await $content(`${defaultLocale}/product`)
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      products: products.map(product => ({
        ...product,
        path: product.path.replace(`/${defaultLocale}`, ''),
      })),
      data_loaded : true,

    }
  },

}
</script>
