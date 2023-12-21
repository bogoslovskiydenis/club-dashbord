<template>
  <v-app dark>
    <HeaderApp />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
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
