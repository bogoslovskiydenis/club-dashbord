<template>
  <PopUpContainer @onClickClose="onClickClose">
    <FormContainer>
      <PopUpTitle :title="t('ERROR')" />
      <PopUpIcon src="/error_icon.svg" />
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
  name: 'RegisterFail',
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
