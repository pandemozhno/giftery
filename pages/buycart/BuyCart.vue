<template>
  <section class="container">    
    <div class="content">
      CART
    </div>
    <aside class="filters">
    </aside>
  </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
   
  },
  layout:'catalog',

  computed:{

    ...mapGetters({
      PRODUCTS_LIST: 'products/LIST'
    })

  },

  methods:{

    ...mapActions({
      SET_PRODUCTS: 'products/SET'
    }),   
   
  },

  async fetch ({ store }) {
    store.dispatch('products/SET')
   
  }
}
</script>


