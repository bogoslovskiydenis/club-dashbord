<template>
  <div class="admin">
    <div class="c_container cards_wrapper">
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">Статус</div>
          <div class="card_text_descr_bottom">
            <div class="card_img">
              <img src="/card_img.svg" alt="" />
            </div>
            <div class="card_text_descr">Пул № 1</div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">Уровень аккаунта</div>
          <div class="card_text_descr_bottom">
            <div class="card_text_descr">№3</div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">Текущий бонус уровня</div>
          <div class="card_text_descr_bottom">
            <div class="card_text_descr">100</div>
            <div class="card_img">
              <img src="/tether.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">Сумма до следующего уровня</div>
          <div class="card_text_descr_bottom">
            <div class="card_text_descr">100</div>
            <div class="card_img">
              <img src="/tether.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="cards_inf">
          <div class="card_text_top">Баланс бонусов</div>
          <div class="card_text_descr_bottom">
            <div class="card_text_descr">100</div>
            <div class="card_img">
              <img src="/tether.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c_container history_transfer">
      <div class="history_transfer_left_border">
        <div class="history_transfer_left_text">История начислений</div>
      </div>
      <div class="history_transfer_wrapper">
        <div class="history_transfer_left">
          <TableApp :header="headers" :history="history">
            <template #items="props">
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
    </div>
    <div class="c_container data_transfer">
      <div class="data_transfer_text_border">
        <div class="data_transfer_text">Данные структуры</div>
      </div>
      <div class="data_transfer_table">
        <TableApp :header="headersBottom" :history="historyBottom">
          <template #header="props">
            <td class="red">{{ props.item.name }}</td>
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
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import TableApp from '~/components/table/table'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'AdminMainPage',
  components: { TableApp, Doughnut },
  layout: 'admin',
  data() {
    return {
      headers: [
        { text: 'Дата', align: 'left', sortable: false, value: 'name' },
        { text: 'Тип бонуса', value: 'bonus' },
        { text: 'Сумма', value: 'allmoney' },
      ],
      history: [
        {
          name: '9-10-2023 8:01',
          bonus: 'За структуру',
          allmoney: '$ 12312',
        },
        {
          name: '9-10-2023 8:32',
          bonus: 'Бонус пула',
          allmoney: '$ 13131256',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 10:00',
          bonus: 'За достижение',
          allmoney: '$ 989898',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          bonus: 'За достижение',
          allmoney: '$ 12345678',
        },
      ],
      headersBottom: [
        { text: 'Дата', align: 'left', sortable: false, value: 'datatime' },
        { text: 'Время', value: 'time' },
        { text: 'Никнейм', value: 'nickname' },
        { text: 'Сумма', value: 'sum' },
        { text: 'Бонус', value: 'bonus' },
      ],
      historyBottom: [
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Рикки Мартин',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Джордж Майкл',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
        {
          datatime: '9-10-2023',
          time: '8:37',
          nickname: 'Елтон Джон',
          sum: '$ 12345678',
          bonus: '$ 12345678',
        },
      ],
      chartData: {
        labels: ['Петя', 'Вася', 'Коля' , 'Жеея' , 'Леша' , 'Jack'],
        datasets: [
          {
            backgroundColor: ['#2bc71a', '#E46651', '#00D8FF', '#c79f1b','#c2369a','#c2369a'],
            data: [40, 20, 80, 10, 30,11, 25],
          },
        ],
      },
      chartOptions: {
        borderRadius: 2,
        hoverBorderWidth: 0,
        responsive: true,
      },
    }
  },
}
</script>

<style scoped>
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
  border: 1px solid #a783f3;

  background: rgba(255, 255, 255, 0.2);
}

.cards_inf {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
}

.card_text_top {
  color: #fffef1;
  text-align: right;
  font-family: 'Inter', sans-serif;
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
  color: rgba(255, 255, 255, 0.8);
  padding-left: 18px;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 83.333% */
}

.history_transfer_wrapper {
  display: flex;
}

.history_transfer_left {
  width: 60%;
}

.history_transfer_right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
}

.history_transfer_left_border {
  display: flex;
  padding: 24px 0px 28px 24px;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
}

.data_transfer_text {
  color: #fffef1;
  /* Title/04 */
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
}

.history_transfer_left_text {
  color: #fffef1;
  /* Title/04 */
  font-family: 'Inter', sans-serif;
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
  .cards_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;
  }
  .history_transfer_wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .history_transfer_left{
    width: 100%;
  }
  .history_transfer_right{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
