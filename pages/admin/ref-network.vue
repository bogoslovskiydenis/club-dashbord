<template>
  <div class="home">
    <div class="cards">
      <div class="card_container">

      </div>
      <div class="card_container">

      </div>
      <div class="card_container">

      </div>
      <div class="card_container">

      </div>
      <div class="card_container">

      </div>
      <div class="card_container">

      </div>

    </div>
    <div class="history_payment">
      <div class="history_payment_left">

      </div>
      <div class="history_payment_right">

      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: 'RefNetworkPage',
  layout: "admin",
}
</script>

<style>
.cards{
  border: 1px solid red;
  display: flex;
  width: 1178px;
  align-items: flex-start;
  gap: 24px;
}


.card_container {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #A783F3;
  background: rgba(255, 255, 255, 0.20);
}
</style>
