import React, {useState, useEffect, Component } from 'react';
import  mappic from "../img/map2.png";
import '../App.css';
// import ImageMapper from './ImageMapper';
import ImageMapper from 'react-image-mapper';
import { Redirect } from 'react-router-dom'


import ReactDOM from "react-dom"  //var ReactDOM = require("react-dom");

 
//   console.log(items);
// var MAP = {
//     name: "my-map",
    
// 	 areas: [
//     //     items.map(item => (
//     //         {
//     //             name: item.name, //"1.北达科他州",
//     //             shape: item.shape,//"circle",
//     //             coords: item.coords,//[222, 36, 10],
//     //             preFillColor: item.preFillColor,//"rgb(255,255,255,0.3)",
//     //             lineWidth: item.LineWidth,//4,
//     //             strokeColor: item.strokeColor,//"black",
//     //             href:item.href,//'/北达科他州',
//     //         }
//     //     ),
    
         
// 		{
// 			name: "1.北达科他州",
// 			shape: "circle",
// 			coords: [222, 36, 10],
//             preFillColor: "rgb(255,255,255,0.3)",
//             lineWidth: 4,
//             strokeColor: "black",
//             href:'/北达科他州',
// 			// fillColor: "#0000ff"
// 		},
// 		{
// 			name: "2.蒙大纳州",
//             shape: "circle",
// 			coords: [140, 37, 10],
// 			preFillColor: "rgb(255,255,255,0.3)",
//             lineWidth: 4,
//             strokeColor: "black",
//             href:'/蒙大纳州',
            
// 			// strokeColor: "#0000ff"
// 		},
// 		// {
// 		// 	name: "3",
// 		// 	shape: "poly",
// 		// 	coords: [381, 241, 383, 94, 462, 53, 457, 282],
// 		// 	preFillColor: "yellow", // this is mandatory for stroke color to work
// 		// 	lineWidth: 10,
// 		// 	strokeColor: "#6afd09"
// 		// },
// 		// {
// 		// 	name: "4",
// 		// 	shape: "poly",
// 		// 	coords: [245, 285, 290, 285, 274, 239, 249, 238],
// 		// 	preFillColor: "red"
// 		// },
// 		// {
// 		// 	name: "5",
// 		// 	shape: "circle",
// 		// 	coords: [170, 100, 25],
// 		// 	preFillColor: "rgb(255,255,255,0.3)",
// 		// 	lineWidth: 2
// 		// },
// 		// {
// 		// 	name: "6",
// 		// 	shape: "rect",
// 		// 	coords: [270, 100, 200, 50],
// 		// 	lineWidth: 2,
// 		// 	preFillColor: "rgba(255, 255, 255, 0.3)",
// 		// 	strokeColor: "#6afd09"
// 		// }
// 	]
// };

var URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg";

export class Map2 extends React.Component{
    constructor(){
        super();
        const items = require ('../data/area.json');
        this.state = {
            hoveredArea: null, msg: null, moveMsg: null
        };
        
        this.MAP = {
            name: "my-map",
            areas: items.items
        }
        console.log(this.MAP);
    }
	getInitialState() {
        console.log("initial State");
		return { hoveredArea: null, msg: null, moveMsg: null };
	}
	load() {
        console.log("load");
		this.setState({ msg: "Interact with image !" });
	}
	clicked(area) {
        console.log("clicked");
		this.setState({
			msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
				area.coords
			)} !`
        });
        // return(
        //     <Redirect to={area.href}/>
        // );
        // window.open(area.href, '_blank');
        window.open(area.href, '_self');

        
	}
	clickedOutside(evt) {
        console.log("clicked out side");
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
		});
	}
	moveOnImage(evt) {
        console.log("move on image");
        const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
        console.log("move on Image: ",  JSON.stringify(coords));
		this.setState({
			moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
		});
	}
	enterArea(area) {
        console.log('enter area', area.shape);
		this.setState({
			hoveredArea: area,
			msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	}
	leaveArea(area) {
        console.log("leave area");
		this.setState({
			hoveredArea: null,
			msg: `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	}
	moveOnArea(area, evt) {
        console.log("move on area");
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			moveMsg: `You moved on ${area.shape} ${
				area.name
			} at coords ${JSON.stringify(coords)} !`
		});
	}

	getTipPosition(area) {
        console.log('get Tip Position');
		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
	}

	render() {
		return (
			<div className="grid">
				<div className="presenter">
					<div className="container">
						<ImageMapper
							src={mappic}
							map={this.MAP}
							width={500}
							onLoad={() => this.load()}
							onClick={area => this.clicked(area)}
							onMouseEnter={area => this.enterArea(area)}
							onMouseLeave={area => this.leaveArea(area)}
							onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
							onImageClick={evt => this.clickedOutside(evt)}
							onImageMouseMove={evt => this.moveOnImage(evt)}
							lineWidth={4}
							strokeColor={"white"}
						/>
						{this.state.hoveredArea && (
							<span
								className="tooltip"
								style={{ ...this.getTipPosition(this.state.hoveredArea) }}
							>
								{this.state.hoveredArea && this.state.hoveredArea.name}
							</span>
						)}
					</div>
					<pre className="message">
						{this.state.msg ? this.state.msg : null}
					</pre>
					<pre>
                        {this.state.moveMsg ? this.state.moveMsg : null}
                    </pre>
				</div>
			</div>
		);
	}
}

export default Map2;