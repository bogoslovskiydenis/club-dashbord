<template>
  <div class="partners">
    <div class="parthers_container">
      <div class="c_container section_profile">
        <div class="section_profile_title">Профиль</div>
        <div class="section_profile_subtitle">UID: 0123456789</div>
      </div>
      <div class="c_container profile_tables">
        <div class="profiles_text">Данные участников сетки</div>
        <v-data-table
          :headers="header"
          :expanded.sync="expanded"
          :items="userexpanded"
          item-key="name"
          show-expand
          class="elevation-2"
        >
          <template v-slot:expanded-item="{ item }">
            <td>
              <p v-for="source in item.sources" :key="source.name">{{ source.name }}</p>
            </td>
            <td>
              <p v-for="source in item.sources" :key="source.lvl">{{ source.lvl }}</p>
            </td>
            <td>
              <p v-for="source in item.sources" :key="source.fat">{{ source.sum }}</p>
            </td>
          </template>
          <!--       <template v-slot:expanded-item="{ item }">
                  <tr v-for="source in item.sources">
                    <td>{{source.name}}</td>
                    <td>{{source.calories}}</td>
                    <td>{{source.fat}}</td>
                    <td>{{source.carbs}}</td>
                  </tr>
                </template> -->
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FindPartnersPage',
  layout: 'admin',
  data() {
    return {
      // headers: [
      //   { text: 'ID', value: 'id' },
      //   { text: 'Name', value: 'name' },
      //   { text: 'Description', value: 'description' },
      //   { text: 'Mail', value: 'mail' },
      //
      // ],
      // items: [
      //   { id: 1, name: 'Item 1', description: 'Description 1' , mail:"gooo@gmail.com" },
      //   { id: 2, name: 'Item 2', description: 'Description 2',mail:"gooo@gmail.com" },
      //   { id: 2, name: 'Item 3', description: 'Description 3' ,mail:"gooo@gmail.com"},
      //   { id: 2, name: 'Item 4', description: 'Description 4',mail:"gooo@gmail.com" },
      //
      //   // Add more items as needed
      // ],
      expanded: [],
      // groupBy:[{
      //   key: 'name',
      //   subInfo:"subInfo"
      // }],
      header: [
        {
          text: 'Никнейм',
          align: 'start',
          sortable: false,
          value: 'name',
          key:"name",
          expand: 'data-table-expand'
        },
        { text: 'Уровень', value: 'lvl' },
        { text: 'Сумма', value: 'sum' },
        { text: 'Email', value: 'email' },
      ],
      userexpanded: [
        {
          name: 'Елтон Джон',
          lvl: 1,
          sum: "1000$",
          email:"google@gmail.com",
          sources: [
            {
              name: 'Коля',
              lvl: 2,
              sum: "1000$",
              email:"google@gmail.com",
            },
            {
              name: 'Игорь',
              lvl: 3,
              sum: "1000$",
              email:"google@gmail.com",
            },
            {
              name: 'Вася',
              lvl: 4,
              sum: "1000321$",
              email:"google@gmail.com",
            }
          ]
        },
        {
          name: 'Елтон Джон2',
          lvl: 2,
          sum: "1000$",
          email:"google@gmail.com",
          sources: [
            {
              name: 'Петя',
              lvl: 5,
              sum: "1000$",
              email:"google@gmail.com",
            }
          ]
        },
        {
          name: 'Женя',
          lvl: 11,
          sum: "10$",
          email:"google@gmail.com",
          sources: [
            {
              name: 'Дед Иван))',
              lvl: 2,
              sum: "1$",
              email:"google@gmail.com",
            }
          ]
        }
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
