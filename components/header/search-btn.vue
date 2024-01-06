<template>
  <div class="search">
    <div class="search_wrapper">
      <div class="search_btn">
          ПОИСК
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-btn"
}
</script>

<style scoped>
.search {
  display: flex;
  width: 162px;
  flex-direction: column;
  align-items: flex-start;
}

.search_wrapper {
  display: flex;
  padding: 10px 0px 10px 10px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 40px;
  background: rgba(151, 151, 151, 0.10);
}

.search_btn {
  text-decoration: none;
  flex: 1 0 0;
  color: #FFFEF1;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.3px;
}
</style>
