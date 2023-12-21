<template>
  <header class="header">
    <nav class="navbar">
      <v-row justify="center" aligns="center">
      <Logo/>
      <NavBarLink/>
      <SearchBtn/>
      <Registration/>
      <LanuageSelector/>
      </v-row >
    </nav>
  </header>
</template>
<script>
import Logo from './logo.vue'
import NavBarLink from "./navbar.vue"
import SearchBtn from "./search-btn.vue"
import Registration from "./registration.vue";
import LanuageSelector from "./language-selector.vue";

export default {
  name: 'HeaderApp',
  components: {Logo, NavBarLink, SearchBtn, Registration, LanuageSelector},

  data() {
    return {}
  },
}
</script>
<style scoped>
.header {
  margin: 0 auto;
  display: flex;
  width: 1440px;
  height: 60px;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-bottom: 1px solid #8B8B8B;
  background: linear-gradient(235deg, #0E0C15 6.76%, #110D18 49.09%, #0F0E1F 93.29%);
}

.navbar {
  display: flex;
  align-items: center;
  gap: 23px;
}
</style>
