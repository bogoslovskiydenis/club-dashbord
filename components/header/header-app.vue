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
        <LanguageSelector />
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
export default {
  name: 'HeaderApp',
  components: { Logo, NavBarLink, Search, Registration, LanguageSelector },
  mixins: [device, userMixin],
  computed: {
    stateBurger() {
      const menu = this.$store.getters['menu/getStateMenu']
      return menu.isOpen
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
