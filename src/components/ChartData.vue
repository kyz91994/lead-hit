<template>
<div class="chart" ref="chartdiv2"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
export default {
  name: "ChartData",
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv2);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    root.dateFormatter.set("dateFormat", "yyyy-MM-dd")
    root.dateFormatter.set("intlLocales", "ru")

    let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          wheelY: "zoomX",
          layout: root.verticalLayout,
          maxTooltipDistance: 0
        })
    );

// Define data
//     let data = [
//       {"date":"2020-07-01","visits":213},
//       {"date":"2020-07-02","visits":249},
//       {"date":"2020-07-03","visits":179},
//       {"date":"2020-07-04","visits":170},
//       {"date":"2020-07-05","visits":184},
//       {"date":"2020-07-06","visits":202},
//       {"date":"2020-07-07","visits":198},
//       {"date":"2020-07-08","visits":168},
//       {"date":"2020-07-09","visits":176},
//       {"date":"2020-07-10","visits":171},
//       {"date":"2020-07-11","visits":190},
//       {"date":"2020-07-12","visits":154},
//       {"date":"2020-07-13","visits":246},
//       {"date":"2020-07-14","visits":250},
//       {"date":"2020-07-15","visits":227},
//       {"date":"2020-07-16","visits":140},
//       {"date":"2020-07-17","visits":170},
//       {"date":"2020-07-18","visits":125},
//       {"date":"2020-07-19","visits":106},
//       {"date":"2020-07-20","visits":207},
//       {"date":"2020-07-21","visits":222},
//       {"date":"2020-07-22","visits":198},
//       {"date":"2020-07-23","visits":204},
//       {"date":"2020-07-24","visits":213},
//       {"date":"2020-07-25","visits":145},
//       {"date":"2020-07-26","visits":166},
//       {"date":"2020-07-27","visits":163},
//       {"date":"2020-07-28","visits":135},
//       {"date":"2020-07-29","visits":45}
//
//     ]
    let data = [
      {date:new Date("2020-07-01").getTime(),visits:213},
      {date:new Date("2020-07-02").getTime(),visits:249},
      {date:new Date("2020-07-03").getTime(),visits:179},
      {date:new Date("2020-07-04").getTime(),visits:170},
      {date:new Date("2020-07-05").getTime(),visits:184},
      {date:new Date("2020-07-06").getTime(),visits:202},
      {date:new Date("2020-07-07").getTime(),visits:198},
      {date:new Date("2020-07-08").getTime(),visits:168},
      {date:new Date("2020-07-09").getTime(),visits:176},
      {date:new Date("2020-07-10").getTime(),visits:171},
      {date:new Date("2020-07-11").getTime(),visits:190},
      {date:new Date("2020-07-12").getTime(),visits:154},
      {date:new Date("2020-07-13").getTime(),visits:246},
      {date:new Date("2020-07-14").getTime(),visits:250},
      {date:new Date("2020-07-15").getTime(),visits:227},
      {date:new Date("2020-07-16").getTime(),visits:140},
      {date:new Date("2020-07-17").getTime(),visits:170},
      {date:new Date("2020-07-18").getTime(),visits:125},
      {date:new Date("2020-07-19").getTime(),visits:106},
      {date:new Date("2020-07-20").getTime(),visits:207},
      {date:new Date("2020-07-21").getTime(),visits:222},
      {date:new Date("2020-07-22").getTime(),visits:198},
      {date:new Date("2020-07-23").getTime(),visits:204},
      {date:new Date("2020-07-24").getTime(),visits:213},
      {date:new Date("2020-07-25").getTime(),visits:145},
      {date:new Date("2020-07-26").getTime(),visits:166},
      {date:new Date("2020-07-27").getTime(),visits:163},
      {date:new Date("2020-07-28").getTime(),visits:135},
      {date:new Date("2020-07-29").getTime(),visits:45}
    ];

// Create Y-axis
    let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          extraTooltipPrecision: 1,
          renderer: am5xy.AxisRendererY.new(root, {})
        })
    );

// Create X-Axis
    let xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: { timeUnit: "day", count: 1 },
          startLocation: 0.5,
          endLocation: 0.5,
          renderer: am5xy.AxisRendererX.new(root, {
            // minGridDistance: 30
          })
        })
    );

    xAxis.get("dateFormats")["day"] = {month: "long", day: "numeric"};
    xAxis.get("periodChangeDateFormats")["day"] = {month: "short", day: "numeric"};

// Create series
    function createSeries(name, field) {
      let series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: field,
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {}),
            maskBullets: false
          })
      );

      series.bullets.push(function() {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: series.get("fill")
          })
        });
      });

      series.strokes.template.set("strokeWidth", 2);

      series.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")
      series.data.setAll(data);
    }

    createSeries("График визитов", "visits");

// Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "zoomXY",
      xAxis: xAxis
    }));

    xAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));

    yAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));

    this.root = root;
  },
  beforeUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>