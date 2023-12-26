<template>
  <div class="c_container transferpage">
    <div class="transfer_title">
      <div class="transfer_title_text">
        Трансфер бонусов
      </div>
    </div>
    <div class="search">
      <img src="/tether.svg" alt="">
      <input placeholder="Адрес вывода">
    </div>

  </div>
</template>

<script>
export default {
  name: 'TransferBonusesPage',
  layout: "admin",
}
</script>

<style>
.search {
  position: relative;
  color: #aaa;
  font-size: 16px;
}

.search {
  display: inline-block;
}

.search input {
  width: 444.667px;
  max-width: 100%;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
}

.search input {
  text-indent: 32px;
}

.search img {
  position: absolute;
  top: 10px;
  left: 10px;
}

.search img {
  left: auto;
  right: 10px;
}

.transfer_title {
  border-radius: 12px;
  border: 1px solid #A783F3;

  background: rgba(255, 255, 255, 0.20);
}

.transfer_title_text {
  color: rgba(255, 255, 255, 0.80);
  /* Header/01 */
  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.72px;
}
</style>
