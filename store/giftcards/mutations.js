
// PRODUCTS MUTATIONS

export default {
	CATEGORIES_SET(state, payload) {
  		state.categories_list = payload
	},

	SET(state, payload) {
  		state.items_list = payload
	},

	SET_FILTER_CATEGORY(state, payload) {
		// payload === category.code
		var id = -1
		for(var i = 0; i < state.categories_list.length; i++){

			if(payload !== 'default' && state.categories_list[i].code === payload){
				id = state.categories_list[i].id
				break
			}
		}		
  		state.filter_category_id = id
	},

	BRAND_SET(state, payload) {
  		state.brand_view_code = payload
	},
	

}