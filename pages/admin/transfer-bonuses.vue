<template>
  <div class="c_container transferpage">
    <div class="transferpage_wrapper">
      <div class="transfer_title">
        <div class="transfer_title_text">
          Трансфер бонусов
        </div>
      </div>
      <div class="address_container">
        <div class="custom-input">
          <label :class="{ 'active': inputValue }">Адрес вывода</label>
          <input v-model="inputValue" @input="onInput" class="input_text"/>
          <img src="/tether.svg" alt="Icon" class="custom-icon"/>
        </div>
        <div class="available_container">
          <div class="available">
            Доступно
          </div>
          <div class="available_money">
            <img src="/tether.svg" alt="">
            <div class="available_money_text">
              100,889.05 USDT
            </div>
          </div>
        </div>
        <div class="input_sum_container">
          <div class="input_sum_container_input">
            <input v-model="inputValue2" placeholder="Ввести сумму" class="input_text" @input="onInput"/>

          </div>
        </div>
        <div class="input_btn_sum">
          <v-btn
            width="180px"
            rounded="16"
            min-width="164"
            color="#C500CB"
          >
            Вывести
          </v-btn>
        </div>
      </div>
    </div>
    <div class="history_payment">
      <div class="history_payment_text">
        История выводов
      </div>
      <TableApp :header="headers" :history="history">

      <template v-slot:items="props">
          <td class="red"> {{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.bonus }}</td>
          <td class="text-xs-right">{{ props.item.allmoney }}</td>
          <td class="text-xs-right">{{ props.item.test }}</td>
        </template>
      </TableApp>

    </div>
  </div>
</template>

<script>
import TableApp from "@/components/table/table.vue";

export default {
  name: 'TransferBonusesPage',
  components: {TableApp},
  layout: "admin",
  data() {
    return {
      inputValue: '',
      inputValue2: "",
      iconSrc: '/tether.svg',
      headers: [
        {text: 'Дата', align: 'left', sortable: false, value: 'name'},
        {text: 'Статус', value: 'status'},
        {text: 'Сумма', value: 'allmoney'},
      ],
      history: [
        {
          name: '9-10-2023 8:00',
          status: 'В ОБРАБОТКЕ',
          allmoney: "$ 100",
        },
        {
          name: '9-10-2023 8:01',
          status: 'УСПЕШНО',
          allmoney: "$ 102",
        },
        {
          name: '9-10-2023 8:02',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 103",
        },
        {
          name: '9-10-2023 8:03',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 10131",
        },{
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 1312312",
        },{
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 12345678",
        },{
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 12345678",
        },{
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 12345678",
        },{
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 12345678",
        },{
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 12345678",
        },{
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 12345678",
        },{
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: "$ 12345678",
        },
      ],
    };
  },
  methods: {
    onInput() {
    }
  }
}
</script>

<style>
.transferpage_wrapper {
  padding-top: 37px;
}

.available_container {
  width: 171px;
  max-width: 100%;
}

.available_money {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}

.available_money_text {
  align-self: stretch;
  color: #FFF;

  /* Input/Value */
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}

.input_sum_container {
  width: 352px;
  max-width: 100%;
  position: relative;
  margin-bottom: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
}

::placeholder {
  color: rgba(255, 255, 255, 0.45);

  /* Input/Value */
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}

.address_container {
  padding-top: 37px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 37px;
  align-self: stretch;
}

.input_text {
  color: #FFF;

  /* Input/Value */
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}

.custom-input {
  /*height: 56px;*/
  width: 444.667px;
  max-width: 100%;
  position: relative;
  margin-bottom: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);

}

label {
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s ease all;
  color: rgba(255, 255, 255, 0.50);

  /* Input/Label2 */
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
}

.active {
  transform: translateY(-20px);
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.50);
}

.custom-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
}

.transfer_title {
  padding: 20px;
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

.history_payment {
  padding-top: 37px;
}

.history_payment_text {
  padding: 24px 28px 24px 28px;
  color: #FFFEF1;
  /* Title/04 */
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
}
@media (max-width: 768px) {
  .address_container{
    flex-wrap: wrap;
    /*display: compact;*/
  }
}
</style>
