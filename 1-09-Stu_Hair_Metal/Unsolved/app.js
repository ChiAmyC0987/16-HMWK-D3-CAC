// Step 1:  Set up chart size
//==========================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// step 2: SVG wrapper
//==========================
// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3: Import Data
//==========================
d3.csv("hairData.csv")
  .then(function(hairData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    hairData.forEach(function(data) {
      data.hair_length = +data.hair_length;
      data.num_hits = +data.num_hits;
    });

    // Step 2: Create scale functions
    // ==============================
      var xTimeScale = d3.scaleTime()
        .domain(d3.extent(hairData, d => d.hair_length))
        .range([0, width]);

      var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(hairData, d => d.num_hits)])
        .range([height, 0]);

     // Step 3: Create axis functions
    // ==============================

    // Step 4: Append Axes to the chart
    // ==============================

    // Step 5: Create Circles
    // ==============================

    // Step 6: Initialize tool tip
    // ==============================

    // Step 7: Create tooltip in the chart
    // ==============================

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Number of Billboard 100 Hits");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Hair Metal Band Hair Length (inches)");
  });