export default {
    watch: {
        '$route.params.search': {
          handler: function () {
            const lang = this.$route.path.startsWith('/ru') ? 'RU' : 'EN'
            this.$store.dispatch('lang/setLang', lang)
          },
          deep: true,
          immediate: true,
        },
      },
}