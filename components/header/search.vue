<template>
  <div class="search hide_mob">
    <div class="search_wrapper">
      <input type="text" :placeholder="t('SEARCH')" class="search_input" />
    </div>
  </div>
</template>

<script>
import translate from '~/mixins/translate'
export default {
  name: 'SearchHeader',
  mixins: [translate],
}
</script>
<style scoped>
.search {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.search_input {
  height: 32px;
  border-radius: 40px;
  background: rgba(151, 151, 151, 0.1);
  padding: 6px 0px 10px 10px;
  color: white;
}
.search_input::placeholder {
  color: white;
}
</style>
