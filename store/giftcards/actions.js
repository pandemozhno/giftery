import { api } from '~/plugins/gate.js'



export default {
	/*
	**	INIT Giftcards categories list
	*/
	async INIT_CATEGORIES(context, payload) {
		// Проверка наличия списка категорий
		// Если категории уже загруженны 
		await this.$axios.get(api.giftCardsCategoriesList)
		.then(function (response) {
			context.commit('CATEGORIES_SET', response.data)	    
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})



		
	},
	/*
	**	INIT Giftcards list
	*/
	async INIT(context, payload) {
	  	// Проверка наличия списка подарочных карт
		// Если категории уже загруженны 
		await this.$axios.get(api.giftCardsList)
		.then(function (response) {
			context.commit('SET', response.data)	    
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
	},
	/*
	** Set brand.code in state
	*/
	async BRAND_SET(context, payload){
		await context.commit('BRAND_SET', payload)
	},
	

}