<template>
  <header class="header">
    <div class="c_container header_container">
      <Logo />
      <NavBarLink v-if="login">
        <div v-if="device !== 'DC'" class="mobile_wrapper">
          <Search />
          <div class="wrapper_registration">
            <Registration />
          </div>
        </div>
      </NavBarLink>
      <div class="header_right">
        <Search v-if="device === 'DC' && login" />
        <Registration v-if="device === 'DC' && login" />
        <LanguageSelector :posts="listLangs" />
        <v-icon
          v-if="device !== 'DC' && login"
          large
          color="white"
          :class="{ hide: stateBurger, hide_dc: true }"
          @click="showMenu"
        >
          mdi-menu
        </v-icon>
      </div>
    </div>
  </header>
</template>
<script>
import Logo from './logo.vue'
import NavBarLink from './navbar.vue'
import Search from './search.vue'
import Registration from './registrationBtn.vue'
import LanguageSelector from './language-selector.vue'
import device from '~/mixins/device'
import userMixin from '~/mixins/user'
import translate from '~/mixins/translate'
export default {
  name: 'HeaderApp',
  components: { Logo, NavBarLink, Search, Registration, LanguageSelector },
  mixins: [device, userMixin, translate],
  data() {
    return {
      listLangs: [
        { title: 'EN', link: '', flag: '/GB.svg', lang: 'EN' },
        { title: 'RU', link: '', flag: '/flag.svg', lang: 'RU' },
      ],
      langsConfig: {
        EN: { title: 'EN', flag: '/GB.svg' },
        RU: { title: 'RU', flag: '/flag.svg' },
      },
    }
  },
  computed: {
    stateBurger() {
      const menu = this.$store.getters['menu/getStateMenu']
      return menu.isOpen
    },
  },
  watch: {
    '$route.params.search': {
      handler: function () {
        const path = this.$route.path
        const clearPath = path.replace(this.currentLinkPrefix, '')
        const { linkPrefixes } = this.$store.getters['lang/getLang']
        const currentLangItem = {
          ...this.langsConfig[this.currentLang],
          link: `${linkPrefixes[this.currentLang]}${clearPath}`,
        }
        const langs = Object.keys(this.langsConfig).filter(
          (item) => item !== this.currentLang
        )
        this.listLangs = []
        this.listLangs.push(currentLangItem)
        for (const lang of langs) {
          const currentLangItem = {
            ...this.langsConfig[lang],
            link: `${linkPrefixes[lang]}${clearPath}`,
          }
          this.listLangs.push(currentLangItem)
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    showMenu() {
      this.$store.dispatch('menu/setStateMenu', true)
    },
  },
}
</script>
<style scoped>
.header {
  width: 100%;
  padding: 12px 0px;
  border-bottom: 1px solid #8b8b8b;
}
.header_right {
  display: flex;
  gap: 20px;
  align-items: center;
}
.mobile_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  gap: 15px;
}
@media (max-width: 767px) {
  .mobile_wrapper {
    display: flex;
  }
  .hide {
    opacity: 0;
  }
  .header_container {
    justify-content: space-between;
  }
  .header_right {
    gap: 10px;
  }
}
@media (max-width: 1199px) {
  .wrapper_registration {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 1200px) {
  .hide_dc {
    display: none;
  }
}
</style>
