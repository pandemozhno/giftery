<template>
  <!-- TODO: creat popup component with slots -->
  <div 
    @click="openPopup()"
    :class="['categories', {'popup' : showAsPopup}]"
  >
    <span 
      class="categories__selected"
      v-if="!showAsPopup"
    >
      {{ (FILTER_CATEGORY_TITLE === -1) ? items[0].title : FILTER_CATEGORY_TITLE }}
    </span>   
    <div 
      v-if="showAsPopup"
    >
      <nuxt-link 
        v-for="(item, index) in items"
        :key="index"
        :to="categoryLink(item.code)"
        @click="update_filter_category(item.code)"
      >
        {{ item.title }}
      </nuxt-link>  

    </div>
  </div>
</template>

<script>

import GiftCardsFilter from "~/mixins/GiftCardsFilter.js"
import { mapGetters } from 'vuex'
export default {
  mixins: [GiftCardsFilter],
  props:{
    items:{
      type: Array
    }
  },
  data(){
    return {
      showAsPopup: false
    }    
  },
  methods:{
    categoryLink(code){
      if(code !== 'default'){
        return '/giftcards/' + code
      }
      return '/giftcards'
    },
    openPopup(){
      this.showAsPopup = !this.showAsPopup
      window.addEventListener('keydown', this.closePopupFromESC)
    },
    closePopupFromESC(event){
      if(event.keyCode === 27 && this.showAsPopup){
        this.showAsPopup = false
        window.removeEventListener('keydown', this.closePopupFromESC)
      }
    }
  },
  computed:{
    ...mapGetters({
      FILTER_CATEGORY_TITLE: 'giftcards/FILTER_CATEGORY_TITLE'
    })
  }
}
</script>


