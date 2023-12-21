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
import HeaderApp from "~/components/header/header-app.vue";
import FooterApp from "~/components/footer/footer-app.vue";
export default {
  name: 'AdminLayout',
  components: {HeaderApp, FooterApp},
  data() {
    return {
    }
  },
}
</script>
<style>
.c_container {
  width: 1180px;
  max-width: 90%;
  margin: 0 auto;
  border: 1px solid green;
}
</style>
<style scoped>
.admin_layout {
  background:  linear-gradient(235deg, #0E0C15 6.76%, #110D18 49.09%, #0F0E1F 93.29%);
}
</style>
