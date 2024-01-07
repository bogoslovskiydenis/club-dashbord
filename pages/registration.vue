<template>
  <div class="form_wrapper">
    <div class="content_form_wrapper">
      <FormContainer>
        <div class="input_wrapper">
          <input class="input" :placeholder="t('NICKNAME')" />
        </div>
        <div class="input_wrapper">
          <input class="input" :placeholder="t('CRYPTOCH_ID')" />
        </div>
        <div class="input_wrapper">
          <input class="input" :placeholder="t('EMAIL')" />
        </div>
        <div class="input_wrapper">
          <input class="input" :placeholder="t('PASSWORD')" />
        </div>
        <div class="btn_wrapper">
          <button class="btn" @click="onClickSend">{{ t('REGISTER') }}</button>
        </div>
      </FormContainer>
    </div>
    <RegisterSuccess
      v-if="isShowSuccess"
      @onClickClose="closeRegisterSuccess"
    />
    <RegisterFail v-if="isShowFail" @onClickClose="closeRegisterFail" />
  </div>
</template>

<script>
import FormContainer from '~/components/form_container/form-container.vue'
import RegisterSuccess from '~/components/pop_up/registration/success.vue'
import RegisterFail from '~/components/pop_up/registration/fail.vue'
import translate from '~/mixins/translate'
export default {
  name: 'LoginPage',
  components: { FormContainer, RegisterSuccess, RegisterFail },
  mixins: [translate],
  data() {
    return {
      isShowSuccess: true,
      isShowFail: false,
    }
  },
  methods: {
    closeRegisterSuccess() {
      this.isShowSuccess = false
    },
    closeRegisterFail() {
      this.isShowFail = false
    },
    onClickSend() {
      // this.isShowSuccess = true
      this.isShowFail = true
    },
  },
}
</script>
<style scoped></style>
