// am5.ready(function() {

//   // Create root element
//   // https://www.amcharts.com/docs/v5/getting-started/#Root_element
//   var root = am5.Root.new("chartdiv");
  
  
//   // Set themes
//   // https://www.amcharts.com/docs/v5/concepts/themes/
//   root.setThemes([
//     am5themes_Animated.new(root)
//   ]);
//   root.dateFormatter.setAll({
//     dateFormat: "yyyy",
//     dateFields: ["valueX"]
//   });
  
// // The data
// var data = [{
//   "date": "1994",
//   "value1": 1587,
//   "value2": 650,
//   "value3": 121
// }, {
//   "date": "1995",
//   "value1": 1567,
//   "value2": 683,
//   "value3": 146
// }, {
//   "date": "1996",
//   "value1": 1617,
//   "value2": 691,
//   "value3": 138
// }, {
//   "date": "1997",
//   "value1": 1630,
//   "value2": 642,
//   "value3": 127
// }, {
//   "date": "1998",
//   "value1": 1660,
//   "value2": 699,
//   "value3": 105
// }, {
//   "date": "1999",
//   "value1": 1683,
//   "value2": 721,
//   "value3": 109
// }, {
//   "date": "2000",
//   "value1": 1691,
//   "value2": 737,
//   "value3": 112
// }, {
//   "date": "2001",
//   "value1": 1298,
//   "value2": 680,
//   "value3": 101
// }, {
//   "date": "2002",
//   "value1": 1275,
//   "value2": 664,
//   "value3": 97
// }, {
//   "date": "2003",
//   "value1": 1246,
//   "value2": 648,
//   "value3": 93
// }, {
//   "date": "2004",
//   "value1": 1318,
//   "value2": 697,
//   "value3": 111
// }, {
//   "date": "2005",
//   "value1": 1213,
//   "value2": 633,
//   "value3": 87
// }, {
//   "date": "2006",
//   "value1": 1199,
//   "value2": 621,
//   "value3": 79
// }, {
//   "date": "2007",
//   "value1": 1110,
//   "value2": 210,
//   "value3": 81
// }, {
//   "date": "2008",
//   "value1": 1165,
//   "value2": 232,
//   "value3": 75
// }, {
//   "date": "2009",
//   "value1": 1145,
//   "value2": 219,
//   "value3": 88
// }, {
//   "date": "2010",
//   "value1": 1163,
//   "value2": 201,
//   "value3": 82
// }, {
//   "date": "2011",
//   "value1": 1180,
//   "value2": 285,
//   "value3": 87
// }, {
//   "date": "2012",
//   "value1": 1159,
//   "value2": 277,
//   "value3": 71
// }];
  
  
//   // Create chart
//   // https://www.amcharts.com/docs/v5/charts/xy-chart/
//   var chart = root.container.children.push(am5xy.XYChart.new(root, {
//     focusable: true,
//     panX: true,
//     panY: true,
//     wheelX: "panX",
//     wheelY: "zoomX",
//     pinchZoomX:true
//   }));
  
//   var easing = am5.ease.linear;
  
  
//   // Create axes
//   // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
//   var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//     maxDeviation: 0.1,
//     groupData: false,
//     baseInterval: {
//       timeUnit: "year",
//       count: 1
//     },
//     renderer: am5xy.AxisRendererX.new(root, {
  
//     }),
//     tooltip: am5.Tooltip.new(root, {})
//   }));
  
//   var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//     maxDeviation: 0.2,
//     renderer: am5xy.AxisRendererY.new(root, {})
//   }));
  
  
//   // Add series
//   // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//   var series1 = chart.series.push(am5xy.LineSeries.new(root, {
//     minBulletDistance: 10,
//     connect: false,
//     xAxis: xAxis,
//     yAxis: yAxis,
//     valueYField: "value1",
//     openValueYField: "value2",
//     valueXField: "date",
//     tooltip: am5.Tooltip.new(root, {
//       pointerOrientation: "horizontal",
//       labelText: "{valueY}"
//     })
//   }));

//   var series2 = chart.series.push(am5xy.LineSeries.new(root, {
//     minBulletDistance: 10,
//     connect: false,
//     xAxis: xAxis,
//     yAxis: yAxis,
//     valueYField: "value2",
//     openValueYField: "value3",
//     valueXField: "date",
//     tooltip: am5.Tooltip.new(root, {
//       pointerOrientation: "horizontal",
//       labelText: "{valueY}"
//     })
//   }));

//   var series3 = chart.series.push(am5xy.LineSeries.new(root, {
//     minBulletDistance: 10,
//     connect: false,
//     xAxis: xAxis,
//     yAxis: yAxis,
//     valueYField: "value3",
//     valueXField: "date",
//     tooltip: am5.Tooltip.new(root, {
//       pointerOrientation: "horizontal",
//       labelText: "{valueY}"
//     })
//   }));
  
//   series1.fills.template.setAll({
//     fillOpacity: 0.2,
//     visible: true
//   });
//   series2.fills.template.setAll({
//     fillOpacity: 0.2,
//     visible: true
//   });
  
//   series1.strokes.template.setAll({strokeWidth: 2});
//   series2.strokes.template.setAll({strokeWidth: 2});
//   series3.strokes.template.setAll({strokeWidth: 2});
  
  
//   // Set up data processor to parse string dates
//   // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
//   series1.data.processor = am5.DataProcessor.new(root, {
//     dateFormat: "yyyy-MM-dd",
//     dateFields: ["date"]
//   });

//   series2.data.processor = am5.DataProcessor.new(root, {
//     dateFormat: "yyyy-MM-dd",
//     dateFields: ["date"]
//   });

//   series3.data.processor = am5.DataProcessor.new(root, {
//     dateFormat: "yyyy-MM-dd",
//     dateFields: ["date"]
//   });
  
//   series1.data.setAll(data);
//   series2.data.setAll(data);
//   series3.data.setAll(data);
  
//   series1.bullets.push(function() {
//     var circle = am5.Circle.new(root, {
//       radius: 4,
//       fill: root.interfaceColors.get("background"),
//       stroke: series1.get("fill"),
//       strokeWidth: 2
//     })
  
//     return am5.Bullet.new(root, {
//       sprite: circle
//     })
//   });
  
//   series2.bullets.push(function() {
//     var circle = am5.Circle.new(root, {
//       radius: 4,
//       fill: root.interfaceColors.get("background"),
//       stroke: series2.get("fill"),
//       strokeWidth: 2
//     })
  
//     return am5.Bullet.new(root, {
//       sprite: circle
//     })
//   });

//   series3.bullets.push(function() {
//     var circle = am5.Circle.new(root, {
//       radius: 4,
//       fill: root.interfaceColors.get("background"),
//       stroke: series3.get("fill"),
//       strokeWidth: 2
//     })
  
//     return am5.Bullet.new(root, {
//       sprite: circle
//     })
//   });
  
//   // Add cursor
//   // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
//   var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
//     xAxis: xAxis,
//     behavior: "none"
//   }));
//   cursor.lineY.set("visible", false);
  
//   // add scrollbar
//   chart.set("scrollbarX", am5.Scrollbar.new(root, {
//     orientation: "horizontal"
//   }));
  
  
//   // Make stuff animate on load
//   // https://www.amcharts.com/docs/v5/concepts/animations/
//   series1.appear(1000);
//   series2.appear(1000);
//   series3.appear(1000);
//   chart.appear(1000, 1000);
  
// }); // end am5.ready()