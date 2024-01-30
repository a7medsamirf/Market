<template>
  <div>

    <div id="footer" class="pt-20">
      <div class="background white--text">

      <div class="container">
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
        <div class="col">
        <div class="d-flex align-items-center email-card">
              <div class="flex-shrink-0">
                <div class="Icon">
              <div class="IconsEmail">
                <div class="Vector" >
                  <i class="fa-regular fa-envelope fa-xl primary--text"></i>
                </div>
              </div>
            </div>
              </div>
             

              <div class="flex-grow-1 ms-3">
                <div class="font-weight-bold use-text-title5 white--text">الاشتراك فى النشرة البريدية</div>
          <div class="white--text mt-2">انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</div>
              </div>
            </div>

</div>
        <div class="col">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
          </form>
          <div class="text-end mt-5">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
          </div>
        </div>

        

</div>
        <div class="col">3</div>
        </div>


        </div>
        </div>
          <div class=" background white--text">  
      <div class="container">
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
        </div>
      </div>

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
#footer {
.email-card {
  .Icon{
    width: 60px;
    height: 60px;
    line-height: 0;
    background: rgba(214, 248, 240, 0.05);
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
  }

}
}

</style>


