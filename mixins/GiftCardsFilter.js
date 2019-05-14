export default {
  methods: {
    update_filter_category(code) {
    	this.$store.commit('giftcards/SET_FILTER_CATEGORY', code)
    }
  }
}