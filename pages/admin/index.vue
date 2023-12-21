<template>
  <div class="admin">
    <div class="c_container cards_wrapper">
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">
            Номер Пула
          </div>
          <div class="card_text_descr_bottom">
            <div class="card_img">
              <img src="/card_img.svg" alt="">
            </div>
            <div class="card_text_descr">
              Пул № 1

            </div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">
            Уровень аккаунта
          </div>
          <div class="card_text_descr_bottom">
            <div class="card_text_descr">
              №3
            </div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">
            Текущий бонус уровня
          </div>
          <div class="card_text_descr_bottom">
            <div class="card_text_descr">
              100
            </div>
            <div class="card_img">
              <img src="/tether.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">
            Сумма до следующего уровня
          </div>
          <div class="card_text_descr_bottom">
            <div class="card_text_descr">
              100

            </div>
            <div class="card_img">
              <img src="/tether.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">
            Баланс бонусов
          </div>
          <div class="card_text_descr_bottom">
            <div class="card_text_descr">
              100
            </div>
            <div class="card_img">
              <img src="/tether.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="history_transfer">
      <div class="history_transfer_left"></div>
      <div class="history_transfer_right"></div>
    </div>
    <div class="data_transfer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminMainPage',
  layout: "admin",
}
</script>

<style>
.cards_wrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 65px;
  padding-bottom: 35px;
  border: 1px solid white;
}

.cards {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #A783F3;

  background: rgba(255, 255, 255, 0.20);
}

.cards_inf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
}

.card_text_top {
  color: #FFFEF1;
  text-align: right;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.32px;
}

.card_text_descr_bottom {
  display: flex;
  padding: 1.488px 4.037px 1.489px 4.037px;
  justify-content: center;
  align-items: center;
}

.card_text_descr {
  color: rgba(255, 255, 255, 0.80);
  padding-left: 18px;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 83.333% */
}
</style>
