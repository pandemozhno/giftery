import Vue from 'vue'
import Router from 'vue-router'

import GiftCardsView from '~/pages/catalog/GiftCardsView'
import GiftCardView from '~/pages/catalog/_item/GiftCardView'

import Cart from '~/pages/buycart/buycart'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/giftcards' // FIX: replace landing page
      },      
      {
      	path: '/giftcards',
      	component: GiftCardsView,
      	// check category for 404
      },
      {
      	path: '/giftcards/:category',
      	component: GiftCardsView
      },
      {
        path: '/cart',
        component: Cart 
      },   
      {
        path: '/:code',
        component: GiftCardView
        // check brand for 404
      }
    ]
  })
}