// create svg element
var svg = d3.select("section#visualization")
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1420 200")
            .classed("svg-content", true);


let width = 270;
let margin = 18;
let y = 100;           

var dataObject = [ 
  { imageId: 'gala2019',
    colors: ['#fca4ac', '#b4acd4', '#92e4d3', '#809e62', '#d4afa9', '#423940']
  },
  { imageId: 'gala2018',
    colors: ['#decfa0', '#bc9c44', '#a45414', '#ab4751', '#3c508f', '#4e4d49']
  },
  { imageId: 'gala2017',
    colors: ['#e79f9b', '#781019', '#b02423', '#085b79', '#03192e', '#c2c0bd']
  }, 
  { imageId: 'gala2016',
    colors: ['#745424', '#ac9c4c', '#dcccb1', '#f2eee5', '#e6b08c', '#474c4e']
  }, 
  { imageId: 'gala2015',
    colors: ['#093c8e', '#1c3c49', '#cf3529', '#a40d0a', '#e9c029', '#d3b07a']
  }
];

dataObject.forEach( (item,index) => {
    
    let x = (width+margin)*index;

    let rect = 45;
    item.colors.forEach( (color,index) => {
    svg.append('rect')
       .attr('x', x + rect * index)
       .attr('fill', color)
       .attr('y', y)
       .attr('width', rect)
       .attr('height', 100);
      }
    );
  });