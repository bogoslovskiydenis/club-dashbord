<template>
  <v-app dark class="admin_layout">
    <HeaderApp />
    <v-main>
      <Nuxt />
    </v-main>
    <FooterApp />
  </v-app>
</template>

<script>
import HeaderApp from '~/components/header/header-app.vue'
import FooterApp from '~/components/footer/footer-app.vue'
export default {
  name: 'AdminLayout',
  components: { HeaderApp, FooterApp },
  data() {
    return {}
  },
}
</script>
<style>
.wrapper_container {
  padding-top: 37px;
}
</style>
<style scoped>
.admin_layout {
  background: linear-gradient(
    235deg,
    #0e0c15 6.76%,
    #110d18 49.09%,
    #0f0e1f 93.29%
  );
}
</style>
