<template>
  <div class="form_wrapper">
    <div class="content_form_wrapper">
      <FormContainer>
        <div class="text_wrapper">Восстановление пароля</div>
        <div class="input_wrapper">
          <input class="input" placeholder="Введите Никнейм или Криптач ID" />
        </div>
        <div class="btn_wrapper">
          <button class="btn" @click="onSend">Отправить</button>
        </div>
      </FormContainer>
    </div>
  </div>
</template>

<script>
import FormContainer from '~/components/form_container/form-container.vue'
export default {
  name: 'PasswordRecovery',
  components: { FormContainer },
  methods: {
    onSend() {
      this.$router.push('new-password')
    },
  },
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
