import React, { Component } from 'react';
import  mappic from "../img/map2.png";
import '../App.css';
import ImageMapper from './ImageMapper';
// import ImageMapper from 'react-image-mapper';

export default class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
	  width: window.innerWidth,
	  imgWidth: 1303,
	//   width: props.img.width,
	  height: props.img.height,
	//   winWidth: window.innerWidth,
      height: window.innerHeight,
	  img: props.img,
	  area: props.area
    }
  }

  getInitialState() {
		return { hoveredArea: null, msg: null, moveMsg: null };
	}
	load() {
		this.setState({ msg: "Interact with image !" });
	}
	clicked(area) {
    	console.log('clicked');
		this.setState({
			msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	}
	clickedOutside(evt) {
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
		});
	}
	moveOnImage(evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			moveMsg: `You movedX on the image at coords ${JSON.stringify(coords)} !`
		});
	}
	enterArea(area) {
    	console.log('In area');
		this.setState({
      		hoveredArea: area,
			areamsg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	}

	leaveArea(area) {
		this.setState({
			hoveredArea: null,
			msg: `${area.shape} ${area.name} at coords ${JSON.stringify(
				area.coords
			)} !`
		});
	}
	moveOnArea(area, evt) {
    	console.log("move on area");
		const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
		this.setState({
			moveMsg: `.....You moved on ${area.shape} ${
				area.name
			} at coords ${JSON.stringify(coords)} !`
		});
	}

	getTipPosition(area) {
		return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
	}
  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth < 500) {
    	this.setState({ width: 400, height: 300});
    } else {
	  let update_width  = this.state.width;
	
	// let update_width = imgScale * ;
	//   let update_height = Math.floor(Math.round(this.state.height));
	let update_height = Math.round(this.state.height);
	this.setState({ width: update_width, height: update_height});
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    var MAP = {
      name: "my-map",
      areas: [
        // { name: "1", shape: "poly", coords: [25,33,27,300,128,240,128,94], preFillColor: "green", fillColor: "blue"  },
        // { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },
        // { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },
        // { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },
        { 
		  name: "1", shape: "circle", coords: [313,146,20], preFillColor: "red",  fillColor:"rgb(255,255,255,0.7)", lineWidth:4, strokeColor: "black"
        }, 
                          
        
        // { name: "5", shape: "circle", coords: [170, 100, 25 ],  preFillColor: "red"},
        {
          name: "6",
          shape: "circle",
          coords: [354, 94, 20],
		  preFillColor: "red",
		  fillColor:"rgb(255,255,255,0.7)", 
		  lineWidth: 4,
		  strokeColor: "black"
        }
      ]
    }
    return(
      <div>
		<div className="presenter">
			<div className="container">
				<ImageMapper
					src={mappic}
					map={MAP}
					width={this.state.width}
					imgWidth={this.state.imgWidth}
					onLoad={() => this.load()}
					onClick={area => this.clicked(area)}
					onMouseEnter={(evt) => this.enterArea(evt)}
					onMouseLeave={area => this.leaveArea(area)}
					onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
					onImageClick={evt => this.clickedOutside(evt)}
					onImageMouseMove={evt => this.moveOnImage(evt)}
					lineWidth={4}
					strokeColor={"white"}
				/>
				{this.state.hoveredArea && (
					<span className="tooltip" style={{...this.getTipPosition(this.state.hoveredArea)} }>
						{this.state.hoveredArea && this.state.hoveredArea.name}
					</span>
				)}
			</div>
			<pre className="message">
				{this.state.msg ? this.state.msg : null}
			</pre>
			<pre>{this.state.moveMsg ? this.state.moveMsg : null}</pre>
			<pre>area message: {this.state.areamsg ? this.state.areamsg : null}</pre>
		</div>
	</div>
    );
  }
}
