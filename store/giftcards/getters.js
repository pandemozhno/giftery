
// PRODUCTS GETTERS

export default {
	/*
	** Giftcards list
	*/
	LIST(state) {
	  	if(state.items_list.length > 0){
	  		if(state.filter_category_id !== -1){
	  			// отфильтровывает все бренды у который есть хотябы одно совпадение по id категории
	  			var list = state.items_list.filter((element) => {
	  				return element.categories.some((category) => {
	  					return category === state.filter_category_id
	  				})	  				
	  			})
	  			return list.length ? list : null
	  		}
	  		// если id фитльра_категории === -1
	  		return state.items_list  		
	  		
	  	}else{
	  		return null
	  	}    
  	},
  	/*
  	** Giftcards categories list
  	*/
  	CATEGORIES_LIST(state) {
  		
	  	if(state.categories_list.length > 0){
	  		// add default
	  		return state.categories_list
	  	}else{
	  		return null
	  	}    
  	},
  	/*
  	** Giftcards current filter category code
  	*/
  	FILTER_CATEGORY_ID(state){

  		return state.filter_category_id
  	},
  	/*
  	** Giftcards current filter category title
  	*/
  	FILTER_CATEGORY_TITLE(state){
  		
  		for(var i = 0; i < state.categories_list.length; i++){
        	if(state.categories_list[i].id === state.filter_category_id){
         		return state.categories_list[i].title

        	}
    	}   
  		return state.filter_category_id
  	},
  	BRAND(state){
  		for(var i = 0; i < state.items_list.length; i++){
  			if(state.items_list[i].code === state.brand_view_code){
  				return state.items_list[i]  				
  			}
  		}  		
  	}


}