<template>
  <div class=" partners">
    <div class="parthers_container">

      <div class="c_container section_profile">
        <div class="section_profile_title">
          Профиль
        </div>
        <div class="section_profile_subtitle">
          UID: 0123456789
        </div>
      </div>
      <div class="c_container profile_tables">
        <div class="profiles_text">
          Данные участников сетки
        </div>
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
import TableApp from '~/components/table/table.vue'

export default {
  name: 'FindPartnersPage',
  layout: "admin",
  components: {TableApp},
}
</script>

<style>

.parthers_container {
  padding-top: 64px;
}

.section_profile {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #A783F3;

  background: rgba(255, 255, 255, 0.20);
}

.section_profile_title {
  color: rgba(255, 255, 255, 0.80);

  /* Header/01 */
  font-family: "Inter", sans-serif;
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
  color: #FFF;

  /* Body/02 */
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
}

.profiles_text {
  padding: 24px 28px 24px 28px;
  color: #FFFEF1;
  /* Title/04 */
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
}

</style>
