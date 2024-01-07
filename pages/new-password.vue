<template>
  <div class="form_wrapper">
    <div class="content_form_wrapper">
      <FormContainer>
        <div class="text_wrapper">{{ t('PASSWORD_RECOVERY') }}</div>
        <div class="input_wrapper">
          <input class="input" :placeholder="t('ENTER_NEW_PASSWORD')" />
        </div>
        <div class="input_wrapper">
          <input class="input" :placeholder="t('ENTER_NEW_PASSWORD')" />
        </div>
        <div class="btn_wrapper">
          <button class="btn">{{ t('SEND') }}</button>
        </div>
      </FormContainer>
    </div>
  </div>
</template>

<script>
import FormContainer from '~/components/form_container/form-container.vue'
import translate from '~/mixins/translate'
export default {
  name: 'NewPassword',
  components: { FormContainer },
  mixins: [translate],
}
</script>
<style scoped>
.text_wrapper {
  color: #fffef1;
  text-align: center;
  padding-bottom: 24px;
  opacity: 0.5;
}
</style>
