<template>	
  <div class="catalog_view"> 
  	<default-header/>   
    <nuxt/>
    <!-- default-footer -->
  </div>
</template>

<script>
import DefaultHeader from './parts/DefaultHeader.vue'

export default {
  components: {
  	"default-header" : DefaultHeader
  }
  
}
</script>


