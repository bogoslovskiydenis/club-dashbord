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

    <div class=" c_container history_transfer">
      <div class="history_transfer_left">
        <div class="history_transfer_left_border">
          <div class="history_transfer_left_text">
            История начислений
          </div>
        </div>
        <TableApp :header="headers" :history="history">
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.bonus }}</td>
            <td class="text-xs-right">{{ props.item.allmoney }}</td>
          </template>
        </TableApp>
      </div>
      <div class="history_transfer_right">
          <Doughnut
            id="my-chart-id"
            :chart-options="chartOptions"
            :chart-data="chartData"
          />
      </div>
    </div>
    <div class="c_container data_transfer">
      <div class="data_transfer_text_border">
        <div class="data_transfer_text">
          Данные структуры
        </div>
      </div>
      <div class="data_transfer_table">
        <TableApp :header="headersBottom" :history="historyBottom">
          <template v-slot:header="props">
            <td class="red"> {{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.bonus }}</td>
            <td class="text-xs-right">{{ props.item.allmoney }}</td>
            <td class="text-xs-right">{{ props.item.test }}</td>
          </template>
        </TableApp>
      </div>
    </div>

  </div>
</template>

<script>
import {Doughnut} from 'vue-chartjs'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import TableApp from '~/components/table/table'

ChartJS.register(ArcElement, Tooltip, Legend)


export default {
  name: 'AdminMainPage',
  components: {TableApp, Doughnut},
  layout: "admin",
  data() {
    return {
      headers: [
        {text: 'Дата', align: 'left', sortable: false, value: 'name'},
        {text: 'Тип бонуса', value: 'bonus'},
        {text: 'Сумма', value: 'allmoney'},
      ],
      history: [
        {
          name: '9-10-2023 8:37',
          bonus: 'За структуру',
          allmoney: "$ 12345678",
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'Бонус пула',
          allmoney: "$ 12345678",
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: "$ 12345678",
        },
      ],
      headersBottom: [
        {text: 'Дата', align: 'left', sortable: false, value: 'datatime'},
        {text: 'Время', value: 'time'},
        {text: 'Никнейм', value: 'nickname'},
        {text: 'Сумма', value: 'sum'},
        {text: 'Бонус', value: 'bonus'},

      ],
      historyBottom: [
        {
          datatime: '9-10-2023',
          time: "8:37",
          nickname: "Елтон Джон",
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: "8:37",
          nickname: "Рикки Мартин",
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: "8:37",
          nickname: "Джордж Майкл",
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: "8:37",
          nickname: "Елтон Джон",
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
      ],
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 80, 10]
        }]
      },
      chartOptions: {
        responsive: true
      },

    }
  }
}
</script>

<style>
.cards_wrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 65px;
  padding-bottom: 35px;
  gap: 20px;
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

.history_transfer {
  display: flex;
}

.history_transfer_left {
  width: 50%;
}

.history_transfer_right {
  width: 50%;
}

.history_transfer_left_border {
  display: flex;
  padding: 24px 0px 28px 24px;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
}

.data_transfer_text {
  color: #FFFEF1;
  /* Title/04 */
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
}

.history_transfer_left_text {
  color: #FFFEF1;
  /* Title/04 */
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
}

.data_transfer_text_border {
  display: flex;
  padding: 24px 0px 28px 24px;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
}
@media (max-width: 768px) {
  .cards_wrapper{
  }
}
</style>
