<template>
  <div class="chart" ref="chartdiv">
  </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5locales_ru_RU from "@amcharts/amcharts5/locales/ru_RU";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

export default {
  name: 'ChartXY',
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    root.locale = am5locales_ru_RU

    root.dateFormatter.set("intlLocales", 'ru')

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      pinchZoomX: false,
    }));

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    cursor.lineX.set("visible", false);

    let xRenderer = am5xy.AxisRendererX.new(root, {
      strokeOpacity: 0.5
    });
    xRenderer.grid.template.set("visible", false);
    let yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.5
    });
    yRenderer.grid.template.set("visible", false);
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.5,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 1,
      renderer: yRenderer
    }));
    xAxis.set()
    xAxis.get("dateFormats")["day"] = {month: "long", day: "numeric"};
    xAxis.get("periodChangeDateFormats")["day"] = {month: "long", day: "numeric"};

    let series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "visits",
      valueXField: "date",
      fill: am5.color('#7411B2'),
      tooltip: am5.Tooltip.new(root, {
        labelText: "Визиты: {valueY}",
      })
    }));

    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.2
    });


    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Circle.new(root, {
          radius: 4,
          stroke: root.interfaceColors.get("background"),
          strokeWidth: 1,
          fill: series.get("fill")
        })
      });
    });
    series.strokes.template.set("stroke", '#7411B2');

    let data = [
      {"date": "2020-07-01", "visits": 213},
      {"date": "2020-07-02", "visits": 249},
      {"date": "2020-07-03", "visits": 179},
      {"date": "2020-07-04", "visits": 170},
      {"date": "2020-07-05", "visits": 184},
      {"date": "2020-07-06", "visits": 202},
      {"date": "2020-07-07", "visits": 198},
      {"date": "2020-07-08", "visits": 168},
      {"date": "2020-07-09", "visits": 176},
      {"date": "2020-07-10", "visits": 171},
      {"date": "2020-07-11", "visits": 190},
      {"date": "2020-07-12", "visits": 154},
      {"date": "2020-07-13", "visits": 246},
      {"date": "2020-07-14", "visits": 250},
      {"date": "2020-07-15", "visits": 227},
      {"date": "2020-07-16", "visits": 140},
      {"date": "2020-07-17", "visits": 170},
      {"date": "2020-07-18", "visits": 125},
      {"date": "2020-07-19", "visits": 106},
      {"date": "2020-07-20", "visits": 207},
      {"date": "2020-07-21", "visits": 222},
      {"date": "2020-07-22", "visits": 198},
      {"date": "2020-07-23", "visits": 204},
      {"date": "2020-07-24", "visits": 213},
      {"date": "2020-07-25", "visits": 145},
      {"date": "2020-07-26", "visits": 166},
      {"date": "2020-07-27", "visits": 163},
      {"date": "2020-07-28", "visits": 135},
      {"date": "2020-07-29", "visits": 45}

    ]
    let newData = data.map(obj => {
      return {...obj, date: new Date(obj['date']).getTime()}
    })


    series.data.setAll(newData);

    series.appear(1000);
    chart.appear(1000, 100);

    this.root = root;
  },

  beforeUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart {
  width: 60%;
  height: 400px;
}
</style>