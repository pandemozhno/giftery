import { api } from '~/plugins/gate.js'

// PRODUCTS ACTIONS

export default {
	/*
	**	ADD item to buycart
	*/
	async ADD(context, payload) {
		// Проверка наличия списка категорий
		// Если категории уже загруженны 
		// to local storage or API
		await context.commit('ADD', payload)
	},
	/*
	**	REVOME item from buycart
	*/
	async REMOVE(context, payload) {
	  	// Проверка наличия списка подарочных карт
		// Если категории уже загруженны 
		await context.commit('REMOVE', ['payload'])
	},

}