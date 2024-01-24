<template>
  <div class="form_wrapper">
    <div class="content_form_wrapper">
      <FormContainer>
        <div class="input_wrapper">
          <input class="input" :placeholder="t('LOGIN')" />
        </div>
        <div class="input_wrapper">
          <input class="input" :placeholder="t('PASSWORD')" />
        </div>
        <div class="wrapper_text">
          <NuxtLink
            :to="currentLinkPrefix + 'password-recovery'"
            class="forgot_password"
          >
            {{ t('FORGOT_PASSWORD') }}
          </NuxtLink>
        </div>
        <div class="btn_wrapper">
          <button class="btn" @click="onSend">{{ t('ENTER') }}</button>
        </div>
      </FormContainer>
    </div>
  </div>
</template>

<script>
import FormContainer from '~/components/form_container/form-container.vue'
import userMixin from '~/mixins/user'
import translate from '~/mixins/translate'
export default {
  name: 'LoginPage',
  components: { FormContainer },
  mixins: [userMixin, translate],
  methods: {
    onSend() {
      const user = {
        id: 1,
        role: 'user',
        login: true,
        session: 'fsdfvxcadasda',
      }
      this.setUser(user)
      this.$router.push(`${this.currentLinkPrefix}main`)
    },
  },
}
</script>
<style scoped></style>
