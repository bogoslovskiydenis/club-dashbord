<template>
  <div class="partners">
    <div class="parthers_container">
      <div class="c_container section_profile">
        <div class="section_profile_title">Профиль</div>
        <div class="section_profile_subtitle">UID: 0123456789</div>
      </div>
      <div class="c_container profile_tables">
        <div class="profiles_text">Данные участников сетки</div>
        <TableApp :header="datatable" :history="historyfind">
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
import TableApp from '~/components/table/table.vue'

export default {
  name: 'FindPartnersPage',
  components: { TableApp },
  layout: 'admin',
  data() {
    return {
      datatable: [
        { text: 'Никнейм', align: 'left', sortable: false, value: 'nickname' },
        { text: 'Уровень', value: 'levl' },
        { text: 'Сумма', value: 'allmoney' },
      ],
      historyfind: [
        {
          nickname: 'Елтон Джон1',
          levl: 1,
          allmoney: '$ 56565',
        },
        {
          nickname: 'Елтон Джон2',
          levl: 2,
          allmoney: '$ 42323',
        },
        {
          nickname: 'Елтон Джон3',
          levl: 3,
          allmoney: '$ 44523',
        },
        {
          nickname: 'Елтон Джон4',
          levl: 4,
          allmoney: '$ 89898',
        },
        {
          nickname: 'Елтон Джон5',
          levl: 5,
          allmoney: '$ 7687',
        },
        {
          nickname: 'Елтон Джон11',
          levl: 1,
          allmoney: '$ 464',
        },
        {
          nickname: 'Елтон Джон14',
          levl: 4,
          allmoney: '$ 135',
        },
        {
          nickname: 'Елтон Джон13',
          levl: 3,
          allmoney: '$ 111',
        },
        {
          nickname: 'Елтон Джон12',
          levl: 2,
          allmoney: '$ 231',
        },
        {
          nickname: 'Елтон Джон111',
          levl: 1,
          allmoney: '$ 232',
        },
        {
          nickname: 'Елтон Джон1123',
          levl: 1,
          allmoney: '$ 312312',
        },
      ],
    }
  },
}
</script>

<style>
.parthers_container {
  padding-top: 64px;
}

.section_profile {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #a783f3;

  background: rgba(255, 255, 255, 0.2);
}

.section_profile_title {
  color: rgba(255, 255, 255, 0.8);

  /* Header/01 */
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.72px;
}

.profile_tables {
  padding-top: 37px;
}

.section_profile_subtitle {
  color: #fff;

  /* Body/02 */
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
}

.profiles_text {
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
}
</style>
