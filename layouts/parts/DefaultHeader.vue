<template>
  <header class="header__default">
    <nuxt-link 
      to="/"
      class="logo"
      title="На главную"
    >
      <img 
        src="~/static/images/logo.svg"
        class="logo_img"
        alt="Giftery.ru"
      />
    </nuxt-link>

    <header-buycart/>

  </header>
</template>

<script>

import HeaderBuyCart from "~/components/buycart/HeaderBuyCart.vue"

export default {
  components: {
    "header-buycart": HeaderBuyCart
  }
}
</script>


