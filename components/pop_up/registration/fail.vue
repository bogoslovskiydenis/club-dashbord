<template>
  <PopUpContainer @onClickClose="onClickClose">
    <FormContainer>
      <div class="title">Ошибка</div>
      <div class="icon_wrapper">
        <img src="/error_icon.svg" class="icon" />
      </div>
    </FormContainer>
  </PopUpContainer>
</template>

<script>
import FormContainer from '~/components/form_container/form-container.vue'
import PopUpContainer from '~/components/pop_up/container.vue'
export default {
  name: 'RegisterFail',
  components: { FormContainer, PopUpContainer },
  methods: {
    onClickClose() {
      this.$emit('onClickClose')
    },
  },
}
</script>
<style scoped>
.title {
  color: #fffef1;
  text-align: center;
  text-shadow: 0px 0px 80px #17181d;
  font-family: 'Inter';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.3px;
  opacity: 0.5;
}
.icon_wrapper {
  padding-top: 44px;
  padding-bottom: 44px;
  text-align: center;
}
</style>
