<template>
  <section 
    class="container"
  >    
    <section
      class="content"
    >
      <!-- TODO: хлебные крошки -->
      <h1 class="title__h1 title__full">Подарочные карты</h1>
      <template v-if="LIST !== null">
        <div class="grid grid__default">
          <template v-for="giftcard in LIST">    
          <nuxt-link
            :key="giftcard.id"
            :to="'/' + giftcard.code"
            class="card card__default"
            :title="giftcard.title"
          >
            <img :src="giftcard.image" alt="giftcard.title"/>
            <span>{{ giftcard.title }}</span>            
        </nuxt-link>
        </template>
        </div>
      </template>
      <template v-else>
        <!-- TODO: create component NoItems -->
        <div class="error error__full error__info">
          В этой категории нет подарочных карт
        </div>
      </template>
    </section>

    <aside 
      class="filters"
    > 
      <template v-if="CATEGORIES_LIST !== null">
        <mq-layout :mq="['m320', 'm480', 'm600', 'm800', 'm960', 'm1024']">
        
          <mobile-categories-menu
            :items="UPDATED_CATEGORIES_LIST"
          /> 

        </mq-layout>
        <mq-layout mq="m1280+">

          <categories-menu            
            :items="UPDATED_CATEGORIES_LIST"
          />

        </mq-layout>
       

      </template>

    </aside>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
import Menu from '~/components/shared/menus/AsideMenu.vue'
import MobileMenu from '~/components/shared/menus/MobileAsideMenu.vue'
export default {
  components: {
    "categories-menu": Menu,
    "mobile-categories-menu": MobileMenu,
  },

  layout: 'Catalog',

  computed:{
    ...mapGetters({
      LIST: 'giftcards/LIST',
      CATEGORIES_LIST: 'giftcards/CATEGORIES_LIST',
    }),

    UPDATED_CATEGORIES_LIST(){
      var categories = new Array()
      
      categories.push({
        "id": -1,
        "title": "Все категории",
        "code": "default"
      })

      return categories.concat(this.CATEGORIES_LIST)
      
    }

  },

  async fetch ({ store, params }) {
    await store.dispatch('giftcards/INIT_CATEGORIES')
    await store.dispatch('giftcards/INIT') 
    await store.commit('giftcards/SET_FILTER_CATEGORY', params.category || 'default')        
  }
}
</script>


