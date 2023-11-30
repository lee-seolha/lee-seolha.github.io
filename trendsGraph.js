fetch('sonifiedTrendsGraph.json')
  then(response => response.json())
  then(data => {
    // Parse the JSON data and use it to create the chart
    createChart(data);
  })
  catch(error => {
    console.error('Error:', error);
  });

function createChart(data) {
  // Use the parsed JSON data to create the Highcharts chart
  Highcharts.chart('trendsGraphContainer', data);
}