<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <p>{{ $t(`products.${product.name}`) }}</p>
    </div>
  </div>
</template>

<script>
import { fetchProducts } from '~/services/productService';

export default {
  async asyncData({ app }) {
    const products = await fetchProducts();
    return { products };
  },
};
</script>
