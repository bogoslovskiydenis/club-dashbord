<template>
  <div class="c_container transferpage">
    <div class="transferpage_wrapper">
      <div class="transfer_title">
        <div class="transfer_title_text">{{ t('TRANSFER_BONUSES') }}</div>
      </div>
      <div class="address_container">
        <div class="custom-input">
          <label :class="{ active: inputValue }">
            {{ t('OUTPUT_ADDRESS') }}(TRC 20)
          </label>
          <input v-model="inputValue" class="input_text" @input="onInput" />
          <img src="/tether.svg" alt="Icon" class="custom-icon" />
        </div>
        <div class="available_container">
          <div class="available">{{ t('AVAILABLE') }}</div>
          <div class="available_money">
            <img src="/tether.svg" alt="" />
            <div class="available_money_text">100,889.05 USDT</div>
          </div>
        </div>
        <div class="input_sum_container">
          <input
            v-model="inputValue2"
            :placeholder="t('ENTER_AMOUNT')"
            class="input_text"
            @input="onInput"
          />
          <button class="btn_max">
            <div class="text_max">MAX</div>
          </button>
        </div>
        <div class="input_btn_sum">
          <v-btn width="180px" rounded min-width="164" color="#C500CB">
            {{ t('WITHDRAW') }}
          </v-btn>
        </div>
      </div>
    </div>
    <div class="history_payment">
      <div class="history_payment_text">{{ t('HISTORY_WITHDRAW') }}</div>
      <TableApp :header="headers" :history="history">
        <template #items="props">
          <td class="red">{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.bonus }}</td>
          <td class="text-xs-right">{{ props.item.allmoney }}</td>
          <td class="text-xs-right">{{ props.item.test }}</td>
        </template>
      </TableApp>
    </div>
  </div>
</template>

<script>
import TableApp from '@/components/table/table.vue'
import translate from '~/mixins/translate'

export default {
  name: 'TransferBonusesPage',
  components: { TableApp },
  mixins: [translate],
  layout: 'admin',
  data() {
    return {
      inputValue: '',
      inputValue2: '',
      iconSrc: '/tether.svg',
      history: [
        {
          name: '9-10-2023 8:00',
          status: 'В ОБРАБОТКЕ',
          allmoney: '$ 100',
        },
        {
          name: '9-10-2023 8:01',
          status: 'УСПЕШНО',
          allmoney: '$ 102',
        },
        {
          name: '9-10-2023 8:02',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 103',
        },
        {
          name: '9-10-2023 8:03',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 10131',
        },
        {
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 1312312',
        },
        {
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 12345678',
        },
        {
          name: '9-10-2023 8:37',
          status: 'ОТКЛОНЕНО',
          allmoney: '$ 12345678',
        },
      ],
    }
  },
  computed: {
    headers() {
      return [
        { text: this.t('DATA'), align: 'left', sortable: false, value: 'name' },
        { text: this.t('STATUS'), value: 'status' },
        { text: this.t('SUM'), value: 'allmoney' },
      ]
    },
  },
  methods: {
    onInput() {},
  },
}
</script>

<style scoped>
.transferpage_wrapper {
  padding-top: 65px;
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
  color: #fff;
  display: flex;
  align-items: center;
  /* Input/Value */
  font-family: 'Inter', sans-serif;
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

.input_sum_container .btn_max {
  position: absolute;
  top: 14px;
  right: 14px;
}

.btn_max {
  display: flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: #112130;
}

.text_max {
  color: #fffef1;
  text-align: center;
  /* Header/1024/H-04 */
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

::placeholder {
  color: rgba(255, 255, 255, 0.45);

  /* Input/Value */
  font-family: 'Inter', sans-serif;
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
  color: #fff;

  /* Input/Value */
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}

.custom-input {
  height: 56px;
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
  color: rgba(255, 255, 255, 0.5);

  /* Input/Label2 */
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}

input {
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  outline: none;
}

.active {
  transform: translateY(-20px);
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.5);
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
  border: 1px solid #a783f3;
  background: rgba(255, 255, 255, 0.2);
}

.transfer_title_text {
  color: rgba(255, 255, 255, 0.8);
  /* Header/01 */
  font-family: 'Inter', sans-serif;
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
  color: #fffef1;
  /* Title/04 */
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
}

@media (max-width: 768px) {
  .address_container {
    flex-wrap: wrap;
    /*display: compact;*/
  }
}
</style>
