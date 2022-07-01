<template>
  <div class="analytic-page">
    <h2 class="analytic-page__title">Аналитика</h2>
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
  flex: 1 1 auto;
  height: 100vh;
  &__title {
    align-self: center;
  }
  &__chart {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__chart-title {
   padding: 20px;
  }

}
</style>