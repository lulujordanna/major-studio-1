var dataFile = 'files/nudes.csv';

d3.csv(dataFile, function(error, data){
    var input = {'data': data, 'width': 1000, 'height': 400},
        canvas = setUpSvgCanvas(input);

    drawBars(input, canvas); 
}); 

function drawBars(input, canvas) {
    var params = {'input': input, 'canvas': canvas};
    initialize(params);
    update(params);
}

function initialize(params) {

    // unpacking params
    var canvas = params.canvas,
        input = params.input;

    // unpacking canvas
    var svg = canvas.svg,
        margin = canvas.margin,
        width = params.width = canvas.width,
        height = params.height = canvas.height;

    // processing Data and extracting binNames and clusterNames
    var formattedData = formatData(input.data),
        blockData = params.blockData = formattedData.blockData,
        binNames = params.binNames = formattedData.binNames,
        clusterNames = params.clusterNames = formattedData.clusterNames;


    // initialize color
    var color = setUpColors().domain(clusterNames);
    
    // initialize scales and axis
    var scales = initializeScales(width, height),
        x = scales.x,
        y = params.y = scales.y;

    x.domain(binNames);
    y.domain([0, d3.max(blockData, function(d) { return d.y1; })]);

    initializeAxis(svg, x, y, height, width);

    // initialize bars
    var bar = params.bar = svg.selectAll('.bar')
      .data(blockData)
      .enter().append('g')
      .attr('class', 'bar')

    bar.append('rect')
            .attr('x', function(d) { return x(d.x);})
            .attr('y', function(d) {return y(0);})
            .attr('width', x.bandwidth())
            .attr('height', 0)
            .attr('fill', function(d){ return color(d.cluster);}); 

    // heights is a dictionary to store bar height by cluster
    // this hierarchy is important for animation purposes
    // each bar above the chosen bar must collapse to the top of the
    // selected bar, this function defines this top
    params.heights = setUpHeights(clusterNames, blockData);

    // defining max of each bin to convert later to percentage
    params.maxPerBin = setUpMax(clusterNames, blockData);

    // variable to store chosen cluster when bar is clicked
    var chosen = params.chosen = {
        cluster: null
    };

    // initialize legend
    var legend = params.legend = svg.selectAll('.legend')
        .data(clusterNames)
        .enter().append('g')
            .attr('class', 'legend');

    legend.append('rect')
        .attr('x', width + margin.right - 18)
        .attr('y', function(d, i) {return 20 * (clusterNames.length - 1 - i);})
        .attr('height', 18)
        .attr('width', 18)
        .attr('fill', function(d){ return color(d);})
        .on('click', function(d){
            chosen.cluster = chosen.cluster === d ? null : d;
            update(params);
        });

    legend.append('text')
        .attr('x', width + margin.right - 25)
        .attr('y', function(d, i) { return 20 * (clusterNames.length - 1 - i) ;})
        .text(function(d) {return d;})
        .attr('dy', '.95em')
        .style('text-anchor', 'end');

//     // initialize checkbox options
//     d3.select("#myCheckbox").on("click",function(){
//         update(params);
//     });
//     params.view = false;
}

function update(params){
    // retrieving params to avoid putting params.x everywhere
    var svg = params.canvas.svg,
        margin = params.canvas.margin,
        y = params.y,
        blockData = params.blockData,
        heights = params.heights,
        chosen = params.chosen,
        width = params.width,
        height = params.height,
        bar = params.bar,
        clusterNames = params.clusterNames,
        binNames = params.binNames,
        legend = params.legend,
        maxPerBin = params.maxPerBin,
        view = params.view;

    var transDuration = 700;

    // re-scaling data if view is changed to percentage
    // and re-scaling back if normal view is selected
    
    // var newView = d3.select("#myCheckbox").property("checked");
    var newView = true;
    
    if(newView){
        console.log('checked')
        if(view != newView){
            blockData.forEach(function (d){
                d.y0 /= maxPerBin[d.x];
                d.y1 /= maxPerBin[d.x];
                d.height /= maxPerBin[d.x];
            });
            heights = setUpHeights(clusterNames, blockData);
        }
    }
    else{
        console.log('unchecked')
        if(view != newView){
            blockData.forEach(function (d){
                d.y0 *= maxPerBin[d.x];
                d.y1 *= maxPerBin[d.x];
                d.height *= maxPerBin[d.x];
            });
            heights = setUpHeights(clusterNames, blockData);
        }
    }
    params.view = newView;


    // update Y axis
    if(chosen.cluster == null){
        y.domain([0, d3.max(blockData, function(d) { return d.y1; })]);
    }
    else{
        y.domain([0, d3.max(heights[chosen.cluster])]);
    }

    if(newView){
        y.domain([0, 1]);
    }

    var axisY = d3.axisLeft(y)
        .tickSize(-width);

    if(newView){
        axisY.tickFormat(d3.format(".0%"));
    }

    svg.selectAll('.axisY')
        .transition()
        .duration(transDuration)
        .call(axisY);


    // update legend
    legend.selectAll('rect')
        .transition()
        .duration(transDuration)
        .attr('height', function(d) {return choice(chosen.cluster, d, 18, 18, 0);})
        .attr('y', function(d) {
            var i = clusterNames.indexOf(d);
            if (i > clusterNames.indexOf(chosen.cluster)){
                return choice(chosen.cluster, d, 20 * (clusterNames.length - 1 - i) , 0, 0);
            }
            else {
                return choice(chosen.cluster, d, 20 * (clusterNames.length - 1 - i) , 0,  18);
            }
        });
    legend.selectAll('text')
        .transition()
        .duration(transDuration)
        .attr('y', function(d) {
            var i = clusterNames.indexOf(d);
            if (i > clusterNames.indexOf(chosen.cluster)){
                return choice(chosen.cluster, d, 20 * (clusterNames.length - 1 - i) , 0, 0);
            }
            else {
                return choice(chosen.cluster, d, 20 * (clusterNames.length - 1 - i) , 0,  18);
            }
        })
        .style('font-size' ,function(d, i) {return choice(chosen.cluster, d, '10px', '10px', '0px');})
        .attr('x', function(d) {return choice(chosen.cluster, d, 
            width + margin.right - 25,
            width + margin.right - 25,
            width + margin.right - 25 - this.getComputedTextLength()/2);});

    // update bars
    bar.selectAll('rect')
        .on('click', function(d){
            chosen.cluster = chosen.cluster === d.cluster ? null : d.cluster;
            update(params);
        })

        .transition()
        .duration(transDuration)
        .attr('y', function(d) { 
            return choice(chosen.cluster, d.cluster,
                y(d.y1),
                y(d.height),
                myHeight(chosen, d, clusterNames, binNames, y, heights));
            
        })
        .attr('height', function(d) { 
            return choice(chosen.cluster, d.cluster,
                height - y(d.height),
                height - y(d.height),
                0);
            
        });
}

// heights is a dictionary to store bar height by cluster
// this hierarchy is important for animation purposes 
function setUpHeights(clusterNames, blockData) {
    var heights = {};
    clusterNames.forEach(function(cluster) { 
        var clusterVec = [];
        blockData.filter(function (d){ return d.cluster == cluster;}).forEach(function(d) {
            clusterVec.push(d.height);
        });
        heights[cluster] = clusterVec;
    });
    return heights;
}

// getting the max value of each bin, to convert back and forth to percentage
function setUpMax(clusterNames, blockData){
    var lastClusterElements = blockData.filter(function(d){return d.cluster == clusterNames[clusterNames.length - 1]})
    var maxDict = {};
    lastClusterElements.forEach(function(d) {
        maxDict[d.x] = d.y1;
    });
    return maxDict;
}

// custom function to provide correct animation effect
// bars should fade into the top of the remaining bar
function myHeight(chosen, d, clusterNames, binNames, y, heights){
    if(chosen.cluster == null){
        return 0;
    }
    if(clusterNames.indexOf(chosen.cluster) > clusterNames.indexOf(d.cluster)){
        return y(0);
    }
    else {
        return y(heights[chosen.cluster][binNames.indexOf(d.x)]);
    }
}


// handy function to play the update game with the bars and legend
function choice(variable, target, nullCase, targetCase, notTargetCase){
    switch(variable) {
    case null:
        return nullCase;
    case target:
        return targetCase;
    default:
        return notTargetCase;
    }
}


function initializeScales(width, height){
    var x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(0.5);

    var y = d3.scaleLinear()
        .range([height, 0]);

    return {
        x: x,
        y: y
    };
}


function initializeAxis(svg, x, y, height, width){
    var yAxis = d3.axisLeft(y)
        .tickSize(-width);

    svg.append('g')
        .attr('class', 'axisY')
        .call(yAxis);

    svg.append('g')
        .attr('class', 'axisX')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));
}

function setUpSvgCanvas(input) {
    // Set up the svg canvas
    var margin = {top: 20, right: 80, bottom: 20, left: 80},
        width = input.width - margin.left -margin.right,
        height = input.height - margin.top -margin.bottom;

    let svg = d3.select('section#visualization-1')
        .select("svg")
        .attr('width', width + margin.left + margin.right )
        .attr('height', height + margin.top +margin.bottom )
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    return {
        svg: svg,
        margin: margin,
        width: width,
        height: height,
    };
}

function setUpColors() {
    return d3.scaleOrdinal().range(["#f3dc50", "#b43175"]);
}


// formatting Data to a more d3-friendly format
// extracting binNames and clusterNames
function formatData(data){

    var clusterNames = d3.keys(data[0]).filter(function(key) {return key !== 'Year'; });
    var binNames = [];

    var blockData = [];

    for(var i = 0; i < data.length; i++){
        var y = 0;
        binNames.push(data[i].Year);
        for(var j = 0; j < clusterNames.length; j++){
            var height = parseFloat(data[i][clusterNames[j]]);
            var block = {'y0': parseFloat(y),
                'y1': parseFloat(y) + parseFloat(height),
                'height': height,
                'x': data[i].Year,
                'cluster': clusterNames[j]};
            y += parseFloat(data[i][clusterNames[j]]);
            blockData.push(block);
        }
    }
    return {
        blockData: blockData,
        binNames: binNames,
        clusterNames: clusterNames
    };
}