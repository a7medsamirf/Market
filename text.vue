<template>
    <div>
      <h1>{{ $t('products.heading') }}</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ $t(`products.${product.id}.name`) }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params, app }) {
      // Fetch the products based on the current locale
      const locale = app.i18n.locale;
      const products = await fetch(`/api/products_${locale}.json`).then((res) => res.json());
  
      return { products };
    },
  };
  </script>
  