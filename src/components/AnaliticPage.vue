<template>
  <div class="analytic-page">
    <h1 class="analytic-page__title">Аналитика</h1>
    <div class="analytic-page__chart">
      <div class="analytic-page__chart-title">
        Аналитика по визитам
      </div>
      <chart-x-y/>
    </div>
  </div>
</template>

<script>
import ChartXY from "@/components/Chart";

export default {
  name: "AnalyticPage",
  components: {ChartXY},

}
</script>

<style scoped lang="scss">
.analytic-page {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100vh;

  &__title {
    margin: 20px;
    align-self: center;
    font-size: 72px;
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
    font-size: 16px;
  }

}
</style>