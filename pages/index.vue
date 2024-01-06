<template>
  <div class="form_wrapper">
    <div class="content_form_wrapper">
      <FormContainer>
        <div class="input_wrapper">
          <input class="input" placeholder="Логин" />
        </div>
        <div class="input_wrapper">
          <input class="input" placeholder="Пароль" />
        </div>
        <div class="wrapper_text">
          <NuxtLink to="/password-recovery" class="forgot_password">
            Забыл пароль
          </NuxtLink>
        </div>
        <div class="btn_wrapper">
          <button class="btn">Вход</button>
        </div>
      </FormContainer>
    </div>
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
