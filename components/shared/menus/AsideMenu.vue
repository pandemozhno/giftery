<template>
  <div class="categories">   
  <nuxt-link 
      v-for="(item, index) in items"
      :key="index"
      :to="categoryLink(item.code)"
  >
    {{ item.title }}
  </nuxt-link>  
  </div>
</template>

<script>


export default {
  props:{
    items:{
      type: Array
    }
  },
  methods:{
    categoryLink(code){
      if(code !== 'default'){
        return '/giftcards/' + code
      }
      return '/giftcards'
    },
  }
}
</script>


