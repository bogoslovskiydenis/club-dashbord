<template>
  <header class="header">
    <div class="c_container header_container">
      <Logo />
      <NavBarLink />
      <SearchBtn v-if="device !== 'MOB'" />
      <div class="header_right">
        <Registration />
        <LanguageSelector />
        <v-icon
          v-if="device !== 'DC'"
          large
          color="white"
          :class="{ hide: stateBurger }"
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
import SearchBtn from './search-btn.vue'
import Registration from './registrationBtn.vue'
import LanguageSelector from './language-selector.vue'
import device from '~/mixins/device'
export default {
  name: 'HeaderApp',
  components: { Logo, NavBarLink, SearchBtn, Registration, LanguageSelector },
  mixins: [device],
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
.header_container {
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
}
.header_right {
  display: flex;
  gap: 20px;
  align-items: center;
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
</style>
