<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'PieApp',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true,
      default: () => {}

    },
    chartOptions: {
      type: Object,
      default: () => {}
    },
  }
}
</script>
