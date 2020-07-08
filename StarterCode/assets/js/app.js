// @TODO: YOUR CODE HERE!
var width = parseInt(d3.select("#scatter").style("width"));
var height = width-100;
var margin = 10;
var bottom_padding = 10;
var left_padding = 10;
var labels = 100;
var graph = d3.select("#scatter").append("svg").attr("width", width).attr("height", height);
var radius_circles = 10;

var xlabel = d3.select(".xlabel");
var ylabel = d3.select(".ylabel");

graph.append("g").attr("class", "xlabel");
graph.append("g").attr("class", "ylabel");

xlabel.append("text").attr("data-name", "poverty").attr("data-axis", "x").text("In Poverty (%)");
ylabel.append("text").attr("data-name", "healthcare").attr("data-axis", "y").text("Lacks Healthcare (%)");

d3.csv("StarterCode/assets/data/data.csv").then(function(data){
    display_graph(data);
});

function display_graph(data){
    var xdata = "poverty";
    var ydata = "healthcare";
    var xmin = d3.min(data, function(d){return parseFloat(d[xdata])*0.9;});
    var xmax = d3.max(data, function(d){return parseFloat(d[xdata])*1.1;});
    var ymin = d3.min(data, function(d){return parseFloat(d[ydata])*0.9;});
    var ymax = d3.max(data, function(d){return parseFloat(d[ydata])*1.1;});
    var xscale = d3.scaleLinear().domain([xmin, xmax]).range([margin + graph, width - margin]);
    var yscale = d3.scaleLinear().domain([ymin, ymax]).range([height - graph - margin, margin]);
    var xaxis = d3.axisBottom(xscale);
    var yaxis = d3.axisLeft(yscale);

    xaxis.ticks(10);
    yaxis.ticks(10);

    graph.append("g").attr("class", "xaxis").call(xaxis);
    graph.append("g").attr("class", "yaxis").call(yaxis);

    //append circles & format circles
}
