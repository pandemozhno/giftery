
// PRODUCTS GETTERS

export default {
	/*
	** buycart items list
	*/
	LIST(state) {
	  	if(state.buycart.length > 0){
	  		return state.buycart
	  	}else{
	  		return null
	  	}    
  	},
  	/*
  	** buycart items count
  	*/
  	ITEMS_COUNT(state) {
	  	if(state.buycart.length > 0){
	  		return state.buycart.length
	  	}else{
	  		return null
	  	}    
  	},


}