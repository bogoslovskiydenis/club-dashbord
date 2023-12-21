<template>
  <header class="header">
    <nav>
      <div class="navbar">
        <Logo/>
        <NavBarLink/>
        <SearchBtn/>
        <Registration/>
        <LanuageSelector/>

      </div>
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
  background: red;
}

.navbar {
  display: flex;
  width: 1440px;
  max-width: 100%;
}
</style>
