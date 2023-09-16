<template>
  <div>

    <div id="footer" class="pt-20">
      <div class=" background white--text">
        <v-container >
          <v-row>
            <v-col cols="12" lg="5" md="6" sm="12">
              <v-card
      class="mx-auto py-3 rounded-lg email-card white--text" 
      flat
    >
      <v-list-item three-line>
    <v-list-item-avatar
          tile
          size="50"
          class="rounded-circle"
        >
        <v-icon class="fa-regular fa-envelope fa-lg primary--text"></v-icon>

        </v-list-item-avatar>
        <v-list-item-content>
          <div class="font-weight-bold use-text-title5 white--text">الاشتراك فى النشرة البريدية</div>
          <div class="white--text mt-2">انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</div>
        </v-list-item-content>

      </v-list-item>
    </v-card>
            </v-col>
            <v-col cols="12" lg="5" md="6" sm="12">
              <v-text-field
              flat
              solo-inverted
              hide-details
              label="ابحث عما تريد"
              prepend-inner-icon="mdi-magnify"
              class="hidden-sm-and-down px-10 ml-4"
            />

            </v-col>

          </v-row>
          <v-row>
            <v-col cols="12" lg="3" md="6" sm="12">
              <p class="white--text  mt-3">متجر سلة من افضل المتاجر التى تقوم ببيع المنتجات الرقمية بأفضل الاسعار وماركات عالمية تسوق الان واطلع على المزيد من التصاميم واستمتع بأفضل العروض والخصومات</p>

            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12">
              <div class="widget-tittle ma-2"><h3 class="">راوبط سريعه</h3> <span></span></div>
              <v-row>
                <v-col lg="4" md="6" sm="12">
                  <v-list class="Quick-Links">
                <v-list-item-group>
                  <v-list-item
                    class="no-active white--text"
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
                    class="no-active white--text"
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
                    class="no-active white--text"
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
          </v-row>
        </v-container>
        <v-row>
        <v-col
              class="text-center pa-0"
              cols="12"
            >
              <div class="py-4 Gray600 white--text " >
                {{ $t('Copyright') }}
                {{ new Date().getFullYear() }} © <strong>StartUp</strong>.
                {{ $t('reserved') }}
              </div>
              </v-col>

            </v-row>
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
.email-card{
  background-color: transparent;
  .v-avatar{
    background-color: rgba(214, 248, 240, 0.05);
  }
}



</style>
