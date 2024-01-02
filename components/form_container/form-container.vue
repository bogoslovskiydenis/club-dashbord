<template>
  <div class="form_container">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'FormContainer',
}
</script>
<style scoped>
.form_container {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #0e081a;
  width: 656px;
  max-width: 90%;
  padding: 45px 88px;
  background-image: url('/left_bg_form.png'), url('/right_bg_form.png');
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
}
</style>
