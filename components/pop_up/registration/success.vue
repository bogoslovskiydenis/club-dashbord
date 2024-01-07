<template>
  <PopUpContainer @onClickClose="onClickClose">
    <FormContainer>
      <PopUpTitle :title="t('REGISTER_SUCCESS')" />
      <PopUpIcon src="/success_icon.svg" />
    </FormContainer>
  </PopUpContainer>
</template>

<script>
import FormContainer from '~/components/form_container/form-container.vue'
import PopUpContainer from '~/components/pop_up/container.vue'
import PopUpTitle from '~/components/pop_up/title.vue'
import PopUpIcon from '~/components/pop_up/icon.vue'
import translate from '~/mixins/translate'
export default {
  name: 'RegisterSuccess',
  components: { FormContainer, PopUpContainer, PopUpTitle, PopUpIcon },
  mixins: [translate],
  methods: {
    onClickClose() {
      this.$emit('onClickClose')
    },
  },
}
</script>
<style scoped></style>
