<template>
  <div class="form_wrapper">
    <FormContainer>
      <div class="text_wrapper">Восстановление пароля</div>
      <div class="input_wrapper">
        <input class="input" placeholder="Введите новый пароль" />
      </div>
      <div class="input_wrapper">
        <input class="input" placeholder="Введите новый пароль" />
      </div>
      <div class="btn_wrapper">
        <button class="btn">Отправить</button>
      </div>
    </FormContainer>
  </div>
</template>

<script>
import FormContainer from '~/components/form_container/form-container.vue'
export default {
  name: 'NewPassword',
  components: { FormContainer },
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
