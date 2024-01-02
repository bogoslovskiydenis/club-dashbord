<template>
  <div class="form_wrapper">
    <FormContainer>
      <div class="input_wrapper">
        <input class="input" placeholder="Никнейм" />
      </div>
      <div class="input_wrapper">
        <input class="input" placeholder="Cryptoch ID" />
      </div>
      <div class="input_wrapper">
        <input class="input" placeholder="Почта" />
      </div>
      <div class="input_wrapper">
        <input class="input" placeholder="Пароль" />
      </div>
      <div class="btn_wrapper">
        <button class="btn">Зарегистрироваться</button>
      </div>
    </FormContainer>
  </div>
</template>

<script>
import FormContainer from '~/components/form_container/form-container.vue'
export default {
  name: 'LoginPage',
  components: { FormContainer },
}
</script>
<style scoped></style>
