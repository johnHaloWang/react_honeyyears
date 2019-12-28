import React, {useState, useEffect, Component } from 'react';
import  mappic from "../img/map3.jpg";
import '../App.css';
// import ImageMapper from './ImageMapper';
import ImageMapper from 'react-image-mapper';
// import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


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
        // this.setState({ msg: "Interact with image !" });
        this.setState({ msg: "For test only" });
        
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
            <div>
                <div>
                {/* <!-- Header --> */}
			

		{/* <!-- Banner --> */}
			<section id="banner">
				<div class="inner">
					<h1> <span>大多数人都曾梦想过有朝一日可以环游世界，四海为家。<br />
					可随着年纪的增长，我们都随着社会的洪流趋于平庸，不得不为生计日夜奔劳。<br />
                    高晓松一句：“生活不止眼前的苟且，还有诗和远方。”曾经打动了多少文艺青年。<br/>
                    </span></h1>
					<ul class="actions">
						<li><a href="#" class="button alt">世界这么大，我想去看看</a></li>
					</ul>
				</div>
			</section>

		{/* <!-- One --> */}
			<section id="one">
				<div class="inner">
					<header>
						<h2>白日梦想家</h2>
					</header>
					<p>节目将通过两位在美国生活五年的25岁新婚夫妻的蜜月之行，利用一年的时间驾驶房车，走遍全美本土48州，为观众呈现一个真实，完整的美国。他们也将在这一年的时间内与他们的房车朝夕相处，并肩作战，一同实现曾经幻想过的美好的白日梦</p>
					{/* <ul class="actions">
						<li><a href="#" class="button alt">Learn More</a></li>
					</ul> */}
				</div>
			</section>

		{/* <!-- Two --> */}
			<section id="one">
				<div class="inner">
					{/* <article>
						<div class="content">
							<header>
								<h3>Pellentesque adipis</h3>
							</header>
							<div class="image fit">
								<img src="images/pic01.jpg" alt="" />
							</div>
							<p>Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.</p>
						</div>
					</article> */}
					<article class="alt">
						<div class="content">
							<header>
								<h3>48 States</h3>
							</header>
							<div class="image fit">
								<img src="images/pic02.jpg" alt="" />
							</div>
							<p>Click the black circle to view the trip.</p>
						</div>
                    </article>
                    <div className="presenter">
                        <div className="container jumbotron" >
                            <center>
                            <div className="imgCenter">
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
                        </center>
                        <pre className="message">
                            {this.state.msg ? this.state.msg : null}
                        </pre>
                        <pre>
                            {this.state.moveMsg ? this.state.moveMsg : null}
                        </pre>
                        </div>
			        </div>
				</div>
			</section>

		{/* <!-- Three --> */}
			<section id="three">
            <header>
                <h3><u>Sponsors</u></h3>
            </header>
				<div class="inner">
					<article>
						<div class="content">
							<span class="icon fa-laptop"></span>
							<header>
								<h3>Tempus Feugiat</h3>
							</header>
							<p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna lorem ullamcorper laoreet, lectus arcu.</p>
							<ul class="actions">
								<li><a href="#" class="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
					<article>
						<div class="content">
							<span class="icon fa-diamond"></span>
							<header>
								<h3>Aliquam Nulla</h3>
							</header>
							<p>Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed.</p>
							<ul class="actions">
								<li><a href="#" class="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
					<article>
					<div class="content">
							<span class="icon fa-laptop"></span>
							<header>
								<h3>Sed Magna</h3>
							</header>
							<p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula.</p>
							<ul class="actions">
								<li><a href="#" class="button alt">Learn More</a></li>
							</ul>
						</div>
					</article>
				</div>
			</section>

		{/* <!-- Footer --> */}
			<section id="footer">
				<div class="inner">
					<header>
						<h2>关注我们</h2>
					</header>
					{/* <form method="post" action="#">
						<div class="field half first">
							<label for="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div class="field half">
							<label for="email">Email</label>
							<input type="text" name="email" id="email" />
						</div>
						<div class="field">
							<label for="message">Message</label>
							<textarea name="message" id="message" rows="6"></textarea>
						</div>
						<ul class="actions">
							<li><input type="submit" value="Send Message" class="alt" /></li>
						</ul>
					</form> */}
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
					<a href="https://www.instagram.com/honeyyears/?r=nametag" class="fa fa-instagram"></a>
					<a href="https://www.youtube.com/channel/UCdGDDXqwO4Zmn44zLkImn2w/featured" class="fa fa-youtube"></a>
					<a href="https://www.facebook.com/profile.php?id=100045240573044" class="fa fa-facebook"></a>
					<a href="#" class="fa fa-twitter"></a>
					<div class="copyright">
						&copy; Untitled Design: <a href="https://templated.co/">TEMPLATED</a>. Images <a href="https://unsplash.com/">Unsplash</a>
					</div>
				</div>
			</section>
                
                    {/* <section id="cta" class="wrapper">
                        <div class="inner">
                            <h1>Slogan</h1>
                        </div>
                    </section> */}
                    {/* <section  class="wrapper">
                        <div class="content">
                            <header>
                                <a href="#" class="icon fa-paper-plane-o"><span class="label">Icon</span></a>
                                    <h3>Faucibus consequat</h3>
                            </header>
                            <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                        </div>
                    </section> */}
                    
                    
                </div>
            </div>
			
		);
	}
}

export default Map2;