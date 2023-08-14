<template>
  <div>

    <div id="footer" class="pa-0">
      <div class="pt-20">
        <v-container>
          <v-row>
            <v-col cols="12" lg="3" md="6" sm="12">
              <button class="title-btn rounded-xl elevation-0">  {{ $t('contactus') }}</button>
              <p class="use-text-paragraph text-color-default mt-3">متجر سلة من افضل المتاجر التى تقوم ببيع المنتجات الرقمية بأفضل الاسعار وماركات عالمية تسوق الان واطلع على المزيد من التصاميم واستمتع بأفضل العروض والخصومات</p>

            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12">
              <div class="widget-tittle ma-2"><h3 class="text-color-default">راوبط سريعه</h3> <span></span></div>
              <v-row>
                <v-col lg="4" md="6" sm="12">
                  <v-list class="Quick-Links">
                <v-list-item-group>
                  <v-list-item
                    class="no-active"
                    v-for="(Service, i) in Services"
                    :key="i"
                    :to="Service.to"
                    router
                    active-class="no-active"
                  >
                    <v-list-item-content>
                      <v-list-item-title :inner-text.prop="Service.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
                </v-col>
                <v-col lg="4" md="6" sm="12">
                  <v-list class="Quick-Links">
                <v-list-item-group>
                  <v-list-item
                    class="no-active"
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    active-class="no-active"
                  >
                    <v-list-item-content>
                      <v-list-item-title :inner-text.prop="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
                </v-col>
                <v-col lg="4" md="6" sm="12">
                  <v-list class="Quick-Links">
                <v-list-item-group>
                  <v-list-item
                    class="no-active"
                    v-for="(Contact, i) in Contacts"
                    :key="i"
                  >
                    <v-list-item-content>
                      <v-list-item-title :inner-text.prop="Contact.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
                </v-col>
              </v-row>



            </v-col>

            <v-col
              class="lighten-2 text-center"
              cols="12"
            >
              <v-divider class="white--text"></v-divider>
              <div class="py-4" >
                {{ $t('Copyright') }}
                {{ new Date().getFullYear() }} © <strong>StartUp</strong>. 
                {{ $t('reserved') }}
              </div>
              </v-col>

          </v-row>
        </v-container>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  components: {  },
  name: "The-Footer",
  data: () => ({
    Services: [
      { text: 'Home' },
      { text: 'Journey'},
      { text: 'Technology'},
      { text: 'Team'},
    ],
    items: [
      { text: 'Vision'},
      { text: 'Thinking'},
      { text: 'Join us'},
      { text: 'Connect'},
    ],
    Contacts: [
      { text: 'Privacy & Terms' },
      { text: 'Google'},
      { text: 'Alphabet'},
    ],

  }),
}


</script>

<style scoped lang="scss">
#footer
  .Quick-Links
  {
    background: transparent;
  }
  .no-active::before {
    opacity: 0 !important;
  }

i.fa-duotone.fa-arrow-up-right,
i.fa-duotone.fa-arrow-up-left {
    width: 50px;
    height: 50px;
    background: var(--maincolor);
    border-radius: 50%;
    text-align: center;
    color: #fff;
    line-height: 50px;
    font-size: 25px;
}

</style>