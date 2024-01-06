<template>
  <div class="pop_up_container">
    <div class="wrapper_content">
      <button class="btn_close" @click="onClickClose"></button>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PopUpContainer',
  methods: {
    onClickClose() {
      this.$emit('onClickClose')
    },
  },
}
</script>
<style scoped>
.pop_up_container {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper_content {
  position: relative;
}
.btn_close {
  width: 24px;
  height: 24px;
  background: url('/close_cross.svg') center center no-repeat;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
