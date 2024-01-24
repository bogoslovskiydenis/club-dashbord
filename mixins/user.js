export default {
	computed: {
        login() {
            const user = this.$store.getters['user/getUser']
            return user.login
        }
    },
    methods: {
        setUser(user) {
            this.$store.dispatch('user/setUser', user)
        },
        logout() {
            this.$store.dispatch('user/logout')
            const {currentLang, linkPrefixes} = this.$store.getters['lang/getLang']
            this.$router.push(linkPrefixes[currentLang])
        }
    }
}