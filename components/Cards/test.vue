<template >
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="(p, i) in productsitems" :key="`product${p.id}-${i}`">

          <div class="card Product-Card">
            <nuxt-link :to="localePath(`/product/${p.id}`)">
        <div>  
           <img :src="require(`~/static/images/shop/${p.image}`)" class="card-img-top" alt="...">
           
        <span v-if="p.new"> {{ $t('product.new') }}</span>
        <span v-if="!isNaN(p.discount)"> {{ p.discount }}  % {{ $t('product.Discount') }}</span>

        </div>
            
          </nuxt-link>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-body-secondary">9 mins</small>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
    
          </div>

        </div>
      </div>


</template>
