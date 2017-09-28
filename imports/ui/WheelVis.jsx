import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class WheelVis extends Component {


    mouseover(d){
        // Fade all the segments.
        d3.selectAll("path")
            .style("opacity", 0.3);

        // Then highlight only those that are an ancestor of the current segment.
        d3.selectAll("path")
            .filter(function(node) {
                return (node.name === d.name);
            })
            .style("opacity", 1);
    }

    mouseleave(d){
        d3.selectAll("path")
            .transition()
            .duration(500)
            .style("opacity", 1)

    }

    componentDidMount(){
        let self = this;
        let width = 825;
        let height = 825;
        let padding = 10;
        let el = ReactDOM.findDOMNode(this.refs.chartContainer);
        let svg = d3.select(el)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        let radius = (Math.min(width, height) / 2) - 10;

        let points = 50;
        let x = d3.scale.linear()
            .range([0, 2 * Math.PI]);
        let y = d3.scale.linear()
            .domain([0, points-1])
            .range([radius/2, radius]);
        let q = {
            "ecstasy":"#e7d300",
            "admiration":"#9bb700",
            "terror":"#509600",
            "amazement":"#037f27",
            "grief":"#007bd8",
            "loathing":"#3c003c",
            "rage":"#b7001f",};
        let colors = {
            "default":"#ffffff",
            "ecstasy":"#ffe854",
            "admiration":"#00b400",
            "terror":"#008000",
            "amazement":"#0089e0",
            "grief":"#0000c8",
            "loathing":"#de00de",
            "rage":"#d40000",
            "vigilance":"#ff7d00",
            "joy":"#ffff54",
            "trust":"#54ff54",
            "fear":"#009600",
            "surprise":"#59bdff",
            "sadness":"#5151ff",
            "disgust":"#ff54ff",
            "anger":"#d40000",
            "anticipation":"#ffa854",
            "serenity":"#ffffb1",
            "acceptance":"#8cff8c",
            "apprehension":"#8cc68c",
            "distraction":"#a5dbff",
            "pensiveness":"#8c8cff",
            "boredom":"#ffc6ff",
            "annoyance":"#ff8c8c",
            "interest":"#ffc48c",
            "love":"#e2ffd1",
            "submission":"#c5f0c5",
            "awe":"#cde8e2",
            "disapproval":"#cddaff",
            "remorse":"#e2d4ff",
            "contempt":"#ffd4e2",
            "aggressiveness":"#ffd3c5",
            "optimism":"#fef0d1"
        };

        let data = [
            {
                x:-Math.PI/8,
                dx:Math.PI/4,
                y:0,
                dy:150,
                name:"ecstasy",
            },
            {
                x:Math.PI/8,
                dx:Math.PI/4,
                y:0,
                dy:150,
                name:"admiration",
            },
            {
                x:3*Math.PI/8,
                dx:Math.PI/4,
                y:0,
                dy:150,
                name:"terror",

            },
            {
                x:5*Math.PI/8,
                dx:Math.PI/4,
                y:0,
                dy:150,
                name:"amazement",
            },
            {
                x:7*Math.PI/8,
                dx:Math.PI/4,
                y:0,
                dy:150,
                name:"grief",
            },
            {
                x:9*Math.PI/8,
                dx:Math.PI/4,
                y:0,
                dy:150,
                name:"loathing",
            },
            {
                x:11*Math.PI/8,
                dx:Math.PI/4,
                y:0,
                dy:150,
                name:"rage",
            },
            {
                x:13*Math.PI/8,
                dx:Math.PI/4,
                y:0,
                dy:150,
                name:"vigilance",
            },
            {
                x:-Math.PI/8,
                dx:Math.PI/4,
                y:150,
                dy:90,
                name:"joy",

            },
            {
                x:Math.PI/8,
                dx:Math.PI/4,
                y:150,
                dy:90,
                name:"trust",

            },
            {
                x:3*Math.PI/8,
                dx:Math.PI/4,
                y:150,
                dy:90,
                name:"fear",

            },
            {
                x:5*Math.PI/8,
                dx:Math.PI/4,
                y:150,
                dy:90,
                name:"surprise",

            },
            {
                x:7*Math.PI/8,
                dx:Math.PI/4,
                y:150,
                dy:90,
                name:"sadness",

            },
            {
                x:9*Math.PI/8,
                dx:Math.PI/4,
                y:150,
                dy:90,
                name:"disgust",

            },
            {
                x:11*Math.PI/8,
                dx:Math.PI/4,
                y:150,
                dy:90,
                name:"anger",

            },
            {
                x:13*Math.PI/8,
                dx:Math.PI/4,
                y:150,
                dy:90,
                name:"anticipation",

            },            {
                x:-Math.PI/8,
                dx:Math.PI/4,
                y:240,
                dy:80,
                name:"serenity",

            },
            {
                x:Math.PI/8,
                dx:Math.PI/4,
                y:240,
                dy:80,
                name:"acceptance",

            },
            {
                x:3*Math.PI/8,
                dx:Math.PI/4,
                y:240,
                dy:80,
                name:"apprehension",

            },
            {
                x:5*Math.PI/8,
                dx:Math.PI/4,
                y:240,
                dy:80,
                name:"distraction",

            },
            {
                x:7*Math.PI/8,
                dx:Math.PI/4,
                y:240,
                dy:80,
                name:"pensiveness",

            },
            {
                x:9*Math.PI/8,
                dx:Math.PI/4,
                y:240,
                dy:80,
                name:"boredom",

            },
            {
                x:11*Math.PI/8,
                dx:Math.PI/4,
                y:240,
                dy:80,
                name:"annoyance",

            },
            {
                x:13*Math.PI/8,
                dx:Math.PI/4,
                y:240,
                dy:80,
                name:"interest",

            },
            {
                x:0,
                dx:Math.PI/4,
                y:320,
                dy:70,
                name:"love"
            },
            {
                x:Math.PI/4,
                dx:Math.PI/4,
                y:320,
                dy:70,
                name:"submission"
            },
            {
                x:Math.PI/2,
                dx:Math.PI/4,
                y:320,
                dy:70,
                name:"awe"
            },
            {
                x:3*Math.PI/4,
                dx:Math.PI/4,
                y:320,
                dy:70,
                name:"disapproval"
            },
            {
                x:Math.PI,
                dx:Math.PI/4,
                y:320,
                dy:70,
                name:"remorse"
            },
            {
                x:5*Math.PI/4,
                dx:Math.PI/4,
                y:320,
                dy:70,
                name:"contempt"
            },
            {
                x:3*Math.PI/2,
                dx:Math.PI/4,
                y:320,
                dy:70,
                name:"aggressiveness"
            },
            {
                x:7*Math.PI/4,
                dx:Math.PI/4,
                y:320,
                dy:70,
                name:"optimism"
            },
        ];

        svg.on("mouseleave",this.mouseleave.bind(this));
        let arc = d3.svg.arc()
            .startAngle(function(d) { return d.x; })
            .endAngle(function(d) { return d.x + d.dx; })
            .innerRadius(function(d) { return d.y; })
            .outerRadius(function(d) { return d.y + d.dy; });

        let groups = svg.selectAll("path")
            .data(data).enter().append("g")
            .attr("transform", "translate(" + (radius + padding) + ", " + (radius + padding) + ")");

        groups.append("svg:path")
            .attr("d", arc)
            .attr("id", function(d,i){  return ("arc-"+i)})
            .attr("fill-rule", "evenodd")
            .style("fill", function(d) {
                if(colors[d.name]){
                    return colors[d.name];
                } else {
                    return colors["default"];
                }
            })
            .style("opacity", 1)

            .on("mouseover", self.mouseover.bind(self))
            .on("click",function (d){  self.props.handler(d.name); } )
            .each(function(d,i){

                let firstArcSection = /(^.+?)L/;
                let newArc = firstArcSection.exec( d3.select(this).attr("d") )[1];

                newArc = newArc.replace(/,/g , " ");
                groups.append("path")
                    .attr("class", "hiddenDonutArcs")
                    .attr("id", "arc"+i)
                    .attr("d", newArc)
                    .style("fill", "none");
            });


        let text = groups.append("text")
            .attr("dy", 30)
            .attr("letter-spacing",".10em")
            .append("textPath") //append a textPath to the text element
            .attr("xlink:href", function(d,i){  return ("#arc"+i)})
            .attr("startOffset","50%")
            .style("text-anchor","middle")
            .text(function(d) { return d.name; })
            /*.attr("transform", function(d) {
                let rotation = ((d.x + (d.dx /2)) * 180/Math.PI) - 90;
                return "rotate(" + rotation + " 0 0)";
            })
            .attr("x", function(d){
                let padding;
                if(d.y === 0) {
                    padding = 25;
                } else{
                    padding = 0;
                }
                return d.y + padding;
            })*/
            .attr("dx", "6") // margin
            .attr("dy", ".35em") // vertical-align
            .on("click",function (d){ self.props.handler(d.name);} );
        /*
        let angle = d3.scale.linear()
            .domain([0, points-1])
            .range([0, radians]);

        let angle2 = d3.scale.linear()
            .domain([0, points-1])
            .range([0, Math.PI/12]);
        let pathGroup = svg.append("g");
        let line1 = d3.svg.line.radial()
            .interpolate("basis")
            .tension(0)
            .radius(radius)
            .angle(function(d, i) { return angle(i); });
        let line2 = d3.svg.line.radial()
            .interpolate("basis")
            .tension(0)
            .radius(function(d,i){return y(i);})
            .angle(function(d,i){return angle2(i);});
        let line3 = d3.svg.line.radial()
            .interpolate("basis")
            .tension(0)
            .radius(radius/2)
            .angle(function(d, i) { return angle(i); });
        pathGroup.append("path").datum(d3.range(points))
            .attr("class", "line")
            .attr("d", line1)
            .attr("transform", "translate(" + (radius + padding) + ", " + (radius + padding) + ")");
        pathGroup.append("path").datum(d3.range(points))
            .attr("class", "line")
            .attr("d", line2)
            .attr("transform", "translate(" + (radius + padding) + ", " + (radius + padding) + ")");

        let combinedD = "";
        pathGroup.selectAll("path").each(function() {
            combinedD += d3.select(this).attr("d");
        });
        */
    }

    render(){
        return (<div ref="chartContainer" />);
    }
}