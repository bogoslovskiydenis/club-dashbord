<template>
  <v-app dark>
    <HeaderApp />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import HeaderApp from '~/components/header/header-app.vue'
export default {
  name: 'DefaultLayout',
  components: { HeaderApp },
  data() {
    return {}
  },
}
</script>
<style>
.form_wrapper {
  background: linear-gradient(
    235deg,
    #0e0c15 6.76%,
    #110d18 49.09%,
    #0f0e1f 93.29%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 140px;
  align-items: flex-start;
}
.input_wrapper {
  padding-bottom: 36px;
}
.input {
  background: rgba(151, 151, 151, 0.1);
  height: 50px;
  width: 100%;
  padding: 8px 8px 8px 24px;
  color: #fffef1;
  border-radius: 40px;
  border: none;
}
.forgot_password {
  color: #6d6d6f !important;
  text-decoration: none;
}
textarea:focus,
input:focus {
  outline: none;
}
.wrapper_text {
  padding-bottom: 30px;
}
.btn {
  width: 180px;
  display: flex;
  border-radius: 16px;
  background: #c500cb;
  box-shadow: 4px 80px 62px 0px rgba(0, 0, 0, 0.8);
  height: 40px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fffef1;
  font-size: 12px;
}
.btn_wrapper {
  display: flex;
  justify-content: center;
}
.content_form_wrapper {
  max-width: 90%;
}
</style>
