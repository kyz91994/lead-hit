<template>
  <div class="analytic-page">
    <h1 class="analytic-page__title">Аналитика</h1>
    <div class="analytic-page__chart">
      <div class="analytic-page__chart-title">
        Аналитика по визитам
      </div>
      <chart-new/>
    </div>
  </div>
</template>

<script>

import ChartNew from "@/components/Chart";
export default {
  name: "AnalyticPage",
  components: {ChartNew},
}
</script>

<style scoped lang="scss">
.analytic-page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  &__title {
    align-self: center;
  }

  &__chart {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__chart-title {
    margin: 0 auto;
  }

  &__chart__body {
  }
}
</style>