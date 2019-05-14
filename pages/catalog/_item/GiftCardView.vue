<template>
  <section class="container">    
    <div class="content content__brand">
      <article>
        <h1 class="title__h1 title__full">{{ BRAND.title }}</h1>
        <img 
          :src="BRAND.image"
          class="brand_image"
          :alt="BRAND.title"
          :title="BRAND.title"
        />
        <h1 class="title__h2 title__full">Доступные номиналы:</h1>
        <div 
          v-if="BRAND.faces.length > 0"
          class="brand_faces"
        >
          <div 
            v-for="(face, index) in BRAND.faces"
            :key="index"
            class="brand_face currency_rouble"
            title="Купить"
            @click="buyGiftCard(face)"
          >
            {{ priceFormat(face) }} 
          </div>
        </div>


      </article>
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  components: {
   
  },
  layout: 'BrandView',

  computed:{

    ...mapGetters({
      BRAND: 'giftcards/BRAND'
    })

  },

  methods:{
    priceFormat(price){
      return price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    },
    buyGiftCard(price){
      var payload = {
        code:  this.BRAND.code,
        price: price,
        title: this.BRAND.title
        // count & etc.
      }
      this.$store.dispatch('buycart/ADD', payload)
    }
   
  },

  async fetch ({ store, params }) {
    await store.dispatch('giftcards/INIT') 
    await store.dispatch('giftcards/BRAND_SET', params.code)
   
  }
}
</script>


