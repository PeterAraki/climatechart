<?php
function convertDate($rawDate) {
  $date = ($rawDate - 719529) * 24 * 3600 * 1000;
  return $date;
}

include 'connection.php';

if( isset( $_POST[ "Submit" ] )) 
{
  $period = $_POST["period"];
  $weathertype = $_POST["weathertype"];
  $region = $_POST["region"];
  echo $period . " " . $weathertype . " " . $region . "<br>";

  $query = "select date, value from dataweather where type = \"" . $weathertype . "\"  and belt = " . $region;
  echo $query."<br>";

  $result = $connect->query($query);

  

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
     
    }
  } else {
    echo "0 results";
  }
  
}

$dataPoints1 = array();
$dataPoints2 = array();
?>

<!DOCTYPE html>
<html>
<head>
<title>Climate Analysis</title>
<!-- <link rel="stylesheet" type="text/css" href="index.css">
<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
<script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
<script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
<script src="index.js"></script> -->
<script>
  window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: "Comparison of Exchange Rates"
      },
      subtitles: [{
        text: "GBP & EUR to INR",
        fontSize: 18
      }],
      axisY: {
        prefix: "₹"
      },
      legend:{
        cursor: "pointer",
        itemclick: toggleDataSeries
      },
      toolTip: {
        shared: true
      },
      data: [
      {
        type: "area",
        name: "GBP",
        showInLegend: "true",
        xValueType: "dateTime",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "₹#,##0.##",
        dataPoints: <?php echo json_encode($dataPoints1); ?>
      },
      {
        type: "area",
        name: "EUR",
        showInLegend: "true",
        xValueType: "dateTime",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "₹#,##0.##",
        dataPoints: <?php echo json_encode($dataPoints2); ?>
      }
      ]
    });
    
    chart.render();
    
    function toggleDataSeries(e){
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      }
      else{
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }
</script>
</head>
<body>
  <div id="chartContainer" style="height: 370px; width: 100%;"></div>
  <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

  <form method="post" action="<?php $_PHP_SELF ?>">
    <label for="period">Range of time:</label>
    <select name="period" id="period">
      <option value="2">2 years</option>
      <option value="5">5 years</option>
      <option value="10">10 years</option>
      <option value="20">20 years</option>
      <option value="50">Max(50 years)</option>
    </select>
    <label for="weathertype">Type of weather:</label>
    <select name="weathertype" id="weathertype">
      <option value="TMIN">TMIN</option>
      <option value="TMAX">TMAX</option>
      <option value="TAVG">TAVG</option>
      <option value="WDSP">WDSP</option>
      <option value="PRCP">PRCP</option>
      <option value="DEWP">DEWP</option>
      <option value="GUST">GUST</option>
    </select>
    <label for="region">Region:</label>
    <select name="region" id="region">
      <option value="1">001</option>
      <option value="2">002</option>
      <option value="3">003</option>
      <option value="4">004</option>
      <option value="5">005</option>
      <option value="6">006</option>
      <option value="7">007</option>
      <option value="8">008</option>
    </select>
    <select name="seasonality" id="seasonality">
      <option value="week">week</option>
      <option value="month">month</option>
      <option value="year">year</option>
    </select>
    <input type="submit" value="Submit">
  </from>
</body>
</html>