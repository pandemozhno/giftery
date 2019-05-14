
// PRODUCTS MUTATIONS

export default {
	ADD(state, payload) {
		console.log('ADD TO CART')
		state.buycart.push(payload)
	},
	REMOVE(state, payload) {
  		// 
	},
}