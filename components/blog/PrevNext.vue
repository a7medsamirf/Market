<template>
  <div class="flex justify-between py-10">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >

      {{ prev.title }}
      <v-img
                        v-if="article.img"
                        :src="require(`~/static/images/blog/${prev.img}`)"
                        :alt="article.alt"
                        height="250"
                      ></v-img>
                      

    </NuxtLink>
    
    <span v-else>&nbsp;</span>
    <NuxtLink

      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: 'PrevNext',
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },

}
</script>
