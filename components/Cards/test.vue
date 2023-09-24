<template lang="">
  <div>
    <v-card class="rounded post "
flat
>
<NuxtLink :to="localePath(blog.path)">
<div class="postImage">
<v-img
class="rounded flat lazy"
v-if="blog.img"
:src="require(`~/static/images/blog/${blog.img}`)"
:alt="blog.alt"
height="450"
>
<template slot="placeholder">
  <v-row
    class="fill-height"
    justify="center"
    align="center"
  >
    <v-progress-circular
      width="2"
      size="100"
      color="default"
      indeterminate
    ></v-progress-circular>
  </v-row>
</template>

</v-img>

</div>

<div class="postDetails">
<div class="postDetails">
<span class="postReview" data-cat="mid">2.6</span>

<span class="postCat" data-cat="News">
<a href="/search/label/News" tabindex="-1">News</a>
</span>

<h3 class="postTitle">
<a href="" title="Essential Tech Tips for Your Business" tabindex="-1">{{ blog.title }}</a>
</h3>

<div class="postMeta">
<span class="postAuthor">seb issam</span>
<span class="postDate">
  <time class="published" datetime="2022-05-02T03:27:00.000-07:00">7 months ago</time>
</span>
</div>
</div>

</div>

</NuxtLink>

</v-card>

  </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
