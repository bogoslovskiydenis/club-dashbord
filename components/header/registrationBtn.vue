<template>
  <div class="reg_button">
    <button v-if="login" @click="onLogout">{{ t('EXIT') }}</button>
    <button v-else>{{ t('ENTER') }}</button>
  </div>
</template>

<script>
import userMixin from '~/mixins/user.js'
import translate from '~/mixins/translate'
export default {
  name: 'RegistrationBtn',
  mixins: [userMixin, translate],
  methods: {
    onLogout() {
      this.logout()
      this.$store.dispatch('menu/setStateMenu', false)
    },
  },
}
</script>

<style scoped>
.reg_button {
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #112130;
  max-width: 250px;
}

.reg_button a {
  text-decoration: none;
  color: #fffef1;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
  text-transform: uppercase;
}
</style>
