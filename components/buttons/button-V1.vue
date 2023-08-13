v<template>
    <div>
   <v-hover v-slot="{ hover }">
     <v-btn 
     class="pa-5"
     color="primary"
       elevation="0" 
       :style="{ 'background-color': hover ? 'red' : 'primary' }"
     >
     أكتشف المزيد
    </v-btn>
   </v-hover>

<!--        <NuxtLink class="btn-primary-V1" to="/portfolio"> اختبار <i class="arrow"></i></NuxtLink> -->
    </div>
  </template>
  
  <script>
  export default {
      name:"button-V1",
  }
  </script>
  
  <style lang="scss" scoped>

  </style>
  