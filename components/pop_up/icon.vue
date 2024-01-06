<template>
  <div class="icon_wrapper">
    <img :src="src" class="icon" />
  </div>
</template>
<script>
export default {
  name: 'PopUpIcon',
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.icon_wrapper {
  padding-top: 44px;
  padding-bottom: 44px;
  text-align: center;
}
@media (max-width: 767px) {
  .icon_wrapper {
    padding-top: 24px;
    padding-bottom: 0px;
  }
}
</style>
