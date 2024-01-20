<template>
  <div class="partners">
    <div class="parthers_container">
      <div class="c_container section_profile">
        <div class="section_profile_title">Профиль</div>
        <div class="section_profile_subtitle">UID: 0123456789</div>
      </div>
      <div class="c_container profile_tables">
        <div class="profiles_text">Данные участников сетки</div>
        <v-container>
          <!-- v-data-table -->
          <v-data-table
            :headers="headers"
            :items="items"
            @click:row="onRowClick"
          >
          </v-data-table>

          <!-- Dynamic v-expansion-panel -->
          <v-expansion-panels>
            <v-expansion-panel v-for="item in expandedItems" :key="item.id">
              <v-expansion-panel-header>
                {{ item.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
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
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Mail', value: 'mail' },

      ],
      items: [
        { id: 1, name: 'Item 1', description: 'Description 1' , mail:"gooo@gmail.com" },
        { id: 2, name: 'Item 2', description: 'Description 2',mail:"gooo@gmail.com" },
        { id: 2, name: 'Item 3', description: 'Description 3' ,mail:"gooo@gmail.com"},
        { id: 2, name: 'Item 4', description: 'Description 4',mail:"gooo@gmail.com" },

        // Add more items as needed
      ],
      expandedItems: [],
      selectedItem: null,
    };
  },
  methods: {
    onRowClick(item) {
      // Toggle expansion for the clicked item
      const index = this.expandedItems.findIndex((i) => i.id === item.id);
      if (index === -1) {
        this.expandedItems.push(item);
      } else {
        this.expandedItems.splice(index, 1);
      }
    }
  }
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
