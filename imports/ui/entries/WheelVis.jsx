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
        let svg = d3.select("svg#wheel")

        let radius = (Math.min(width, height) / 2) - 10;

        let points = 50;
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
            "rage":"#b7001f",
        };
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
            "anger":"#ff0000",
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
                x:15*Math.PI/8,
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

        let paths = groups.append("path")
            .attr("d", arc)

            .attr("id", function(d,i){  return ("arc-"+i)})
            .style("fill", function(d) {
                if(colors[d.name]){
                    return colors[d.name];
                } else {
                    return colors["default"];
                }
            })
            .attr("fill-rule", "nonzero")
            .style("stroke","#000000")
            .style("stroke-width","1px")
            .style("opacity", 1)
            .on("mouseover", self.mouseover.bind(self))
            .on("click",function (d){  self.props.handler(d.name); } )


            paths.each(function(d,i){

                let firstArcSection = /(^.+?)L/;
                let newArc = firstArcSection.exec( d3.select(this).attr("d") )[1];

                newArc = newArc.replace(/,/g , " ");
                let angle = d.x;

                if (angle >= (Math.PI/2 - 0.01)&& angle <= (3*Math.PI/2 - 0.01)) {
                    let startLoc 	= /M(.*?)A/,		//Everything between the capital M and first capital A
                        middleLoc 	= /A(.*?)0 0 1/,	//Everything between the capital A and 0 0 1
                        endLoc 		= /0 0 1 (.*?)$/;	//Everything between the 0 0 1 and the end of the string (denoted by $)
                    //Flip the direction of the arc by switching the start and end point (and sweep flag)
                    let newStart = endLoc.exec( newArc )[1];
                    let newEnd = startLoc.exec( newArc )[1];
                    let middleSec = middleLoc.exec( newArc )[1];

                    //Build up the new arc notation, set the sweep-flag to 0
                    newArc = "M" + newStart + "A" + middleSec + "0 0 0 " + newEnd;
                    d.flipped = true;
                } else{
                    d.flipped = false;
                }
                groups.append("path")
                    .attr("class", "hiddenArcs")
                    .attr("id", "arc"+i)
                    .attr("d", newArc)
                    .style("fill", "none");
            });


        let text = groups.append("text")
            .attr("dy", function(d) {
                if (d.flipped) {
                    return -30;
                } else{
                    return 40;
                }
            })
            .attr("letter-spacing",".10em")
            .append("textPath") //append a textPath to the text element
            .attr("xlink:href", function(d,i){  return ("#arc"+i)})
            .attr("startOffset","50%")
            .style("text-anchor","middle")
            .text(function(d) { return d.name;})
            .attr("dx", "6") // margin
            .attr("dy", ".35em") // vertical-align
            .on("click",function (d){ self.props.handler(d.name);} );


    }

    render(){
        return (<div ref="chartContainer" >
            <svg id="wheel" height="825" width="825"/>
        </div>);
    }
}