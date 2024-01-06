<template>
  <div class="title">{{ title }}</div>
</template>
<script>
export default {
  name: 'PopUpTitle',
  props: {
    title: {
      type: String,
      default: '',
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
</style>
