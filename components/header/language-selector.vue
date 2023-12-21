<template>
  <div class="language_selector">
    <div class="flag">
      <img src="/flag.svg" alt="">
      <div class="flag_text">
        РУС

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Language-selector"
}
</script>

<style scoped>
.flag{
  display: flex;
}
.flag_text{
  color:  #8B8B8B;
  /* Title/09 */
  font-family: "Inter" , sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
}
</style>
