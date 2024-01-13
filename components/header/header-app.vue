<template>
  <header class="header">
    <div class="c_container header_container">
      <Logo />
      <NavBarLink :show="isShowMenu" />
      <SearchBtn />
      <Registration />
      <LanguageSelector />
      <button @click="showMenu">test</button>
    </div>
  </header>
</template>
<script>
import Logo from './logo.vue'
import NavBarLink from './navbar.vue'
import SearchBtn from './search-btn.vue'
import Registration from './registration.vue'
import LanguageSelector from './language-selector.vue'
export default {
  name: 'HeaderApp',
  components: { Logo, NavBarLink, SearchBtn, Registration, LanguageSelector },
  data() {
    return {
      isShowMenu: false,
    }
  },
  methods: {
    showMenu() {
      this.isShowMenu = true
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
@media (max-width: 767px) {
  .header {
    /*display: flex;*/
  }
}
</style>
