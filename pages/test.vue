<template>
  <div>
    <h1>Test</h1>

    <Product :products="products" />
<v-container>
  <div class="product-gallery">
        <div class="main-image">
            <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="Product Image 1">
        </div>
        <div class="thumbnails">
            <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="Thumbnail 1">
            <img src="https://i.dummyjson.com/data/products/1/3.jpg" alt="Thumbnail 2">
            <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Thumbnail 3">
            <!-- Add more thumbnails as needed -->
        </div>
    </div>

</v-container>




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

<style scoped lang="scss">
/* styles.css */
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.product-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.main-image img {
    max-width: 100%;
    height: auto;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
}

.thumbnails {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.thumbnail {
    max-width: 100px; /* Adjust the thumbnail width as needed */
    height: auto;
    margin: 0 5px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

.thumbnail:hover {
    transform: scale(1.1);
}

/* CSS animation for changing the main image */
.thumbnail.active {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>