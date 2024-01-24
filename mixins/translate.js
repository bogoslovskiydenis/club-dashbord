import TRANSLATE from '~/translate'
export default {
	data: () => {
		return {
			translates: TRANSLATE,
		}
	},
	computed: {
		currentLang() {
			const langState = this.$store.getters['lang/getLang']
			return langState.currentLang
		},
		currentLinkPrefix() {
			const { currentLang, linkPrefixes } = this.$store.getters['lang/getLang']
			return linkPrefixes[currentLang]
		}
	},
	methods: {
		t(key){
			return key in this.translates ? this.translates[key][this.currentLang] : '' 
		}
	}
}