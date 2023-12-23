<template>
  <v-data-table
    :headers="header"
    :items="history"
    class="elevation-1"
  >
    <slot />
  </v-data-table>
</template>
<script>

export default {
  name: 'TableApp',
  props: {
    header: {
      type: Array,
      default() {
        return []
      }
    },
    history: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
