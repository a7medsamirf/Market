<template>
  <div>
    <div class="hidden-md-and-down ">
      <v-app-bar class="breaking-news"
        dense
        elevation="0"
        color="white"
      >
      <v-container  class="fill-height d-flex justify-center" >

        <v-toolbar-items
         class="hidden-md-and-down DesktopNav"
        v-for="(item, i) in items" :key="i">
        <v-btn text
                 v-if="!item.subitems"
                 exact
                 :to="localePath(item.to)" router>
                 {{ item.title }}
          </v-btn>

  

          <v-menu
          transition="slide-y-transition"
          content-class="page-menu"
          min-width="200"
          v-else
          :key="item.title"
          :value="false"
          active-class="primary--text"
          >
<!--       open-on-hover bottom offset-y transition="scroll-y-reverse-transition" -->

            <template v-slot:activator="{ on, attrs }">
              <v-btn :ripple="false" text v-bind="attrs" v-on="on">
               {{ item.title }}
                  <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
              v-for="subitem in item.subitems"
              :to="subitem.to"
              :key="subitem.title"
              active-class="primary--text"
              >
                <v-list-item-title>{{ subitem.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


        </v-toolbar-items>


      </v-container>


      </v-app-bar>
    </div>

  </div>
</template>
<script>
export default {
  name: "MenuNav",
  data () {
    return {
   items: [
        {title: 'كل المنتجات', to: '/product'},
        {title: 'المقالات', to: '/blog'},
        {title: 'أختبار', to: '/test'},
        {title: 'text', to: '/text'},
        { title: 'Pages',
          subitems: [
            {title: 'gallery', to: '/gallery'},
            {title: 'faq', to: '/faq'},
            {title: 'TestPage', to: '/TestPage'},
          ]
        },

        {title: 'كل المنتجات', to: ''},
        {title: 'كل المنتجات', to: ''},
        {title: 'كل المنتجات', to: ''},
        {title: 'كل المنتجات', to: ''},
        {title: 'كل المنتجات', to: ''},
      ],
    }

  },

}
</script>
<style scoped lang="scss">
@import './Header.scss';
</style>
