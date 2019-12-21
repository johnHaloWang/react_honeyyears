import React, { Component } from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";

export default class ImageMapper extends Component {
	constructor(props) {
		super(props);
        // this.hoverOn = this.hoverOn.bind(this);
		// this.hoverOff = this.hoverOff.bind(this);
		// this.hoverOff= this.hoverOff.bind(this);
		// this.mouseMove = this.mouseMove.bind(this);
		//this.click = this.click.bind(this);

        this.state = {expand: true};

		[
			"drawrect",
			"drawcircle",
			"drawpoly",
			"initCanvas",
			"renderPrefilledAreas"
		].forEach(f => (this[f] = this[f].bind(this)));

		let absPos = { position: "absolute", top: 0, left: 0 };
		 this.styles = {
		 	container: { position: "relative" },
			canvas: { ...absPos, pointerEvents: "none", zIndex: 2 },
			img: { ...absPos, zIndex: 1, userSelect: "none" },
			map: (props.onClick && { cursor: "pointer" }) || undefined
		};

		// Props watched for changes to trigger update
		this.watchedProps = [
			"active",
			"fillColor",
			"height",
			"imgWidth",
			"lineWidth",
			"src",
			"strokeColor",
			"width"
		];
	}

	shouldComponentUpdate(nextProps) {
		const propChanged = this.watchedProps.some(
			prop => this.props[prop] !== nextProps[prop]
			
		);
		return !isEqual(this.props.map, this.state.map) || propChanged;
	}


	componentWillMount() {
		this.updateCacheMap();
	}

	updateCacheMap() {
		this.setState(
			{ map: JSON.parse(JSON.stringify(this.props.map)) },
			this.initCanvas
		);
	}

	componentDidUpdate() {
		this.updateCacheMap();
		this.initCanvas();
	}

	drawrect(coords, fillColor, lineWidth, strokeColor) {
		// let [left, top, right, bot] = coords;
		// this.ctx.fillStyle = fillColor;
		// this.ctx.lineWidth = lineWidth;
		// this.ctx.strokeStyle = strokeColor;
		// this.ctx.strokeRect(left, top, right - left, bot - top);
		// this.ctx.fillRect(left, top, right - left, bot - top);
		// this.ctx.fillStyle = this.props.fillColor;
	}

	drawcircle(coords, fillColor, lineWidth, strokeColor) {
		this.ctx.fillStyle = fillColor;
		this.ctx.beginPath();
		this.ctx.lineWidth = lineWidth;
		this.ctx.strokeStyle = strokeColor;
		this.ctx.arc(coords[0], coords[1], coords[2], 0, 2 * Math.PI);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.fill();
		//this.ctx.fillStyle = this.props.fillColor;
	}

	drawpoly(coords, fillColor, lineWidth, strokeColor) {
		// coords = coords.reduce(
		// 	(a, v, i, s) => (i % 2 ? a : [...a, s.slice(i, i + 2)]),
		// 	[]
		// );
		
		// this.ctx.fillStyle = fillColor;
		// this.ctx.beginPath();
		// this.ctx.lineWidth = lineWidth;
		// this.ctx.strokeStyle = strokeColor;
		// let first = coords.unshift();
		// this.ctx.moveTo(first[0], first[1]);
		// coords.forEach(c => this.ctx.lineTo(c[0], c[1]));
		// this.ctx.closePath();
		// this.ctx.stroke();
		// this.ctx.fill();
		// this.ctx.fillStyle = this.props.fillColor;
	}

	initCanvas() {
		if (this.props.width) this.img.width = this.props.width;
		if (this.props.height) this.img.height = this.props.height;

		console.log('In initCancas: image width', this.img.width, ' window width ', this.props.width );
		this.canvas.width = this.props.width || this.img.clientWidth;
		console.log('In initCanvas: image clientwidth', this.img.clientWidth);
		// this.setState (
		// 	{imgWidth2: this.img.width, width2:}
		// 	// {width2: this.props.width}
		// );
		this.canvas.height = this.props.height || this.img.clientHeight;
		this.container.style.width =
			(this.props.width || this.img.clientWidth) + "px";
		this.container.style.height =
			(this.props.height || this.img.clientHeight) + "px";
		this.ctx = this.canvas.getContext("2d");
		this.ctx.fillStyle = this.props.fillColor;
		this.ctx.strokeStyle = this.props.strokeColor;

		if (this.props.onLoad) this.props.onLoad();

		this.renderPrefilledAreas();
	}

	hoverOn(area, index, event) {
        console.log("fired hover on");
		const shape = event.target.getAttribute("shape");
		console.log("..." + event.target.getAttribute("coords").split(","))
		// const coords = event.target.getAttribute("coords").split(",");
		if (this.props.active && this["draw" + shape]) {
			this["draw" + shape](
				event.target.getAttribute("coords").split(","),
				// [coords[0]/0.6, coords[1]/0.6, coords[2]/0.6],
				area.fillColor,
				area.lineWidth || this.props.lineWidth,
				area.strokeColor || this.props.strokeColor
			);
			console.log("------I am in hover on: ", area.coords);
		}
		// const splited = event.target.getAttribute("coords").split(",");
		// console.log('hover on splited', splited);
		if (this.props.onMouseEnter) this.props.onMouseEnter(area, index, event);
	}

	hoverOff(area, index, event) {
        console.log("fired hover off");
		if (this.props.active) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.renderPrefilledAreas();
		}

		if (this.props.onMouseLeave) this.props.onMouseLeave(area, index, event);
	}

	click(area, index, event) {
        console.log("fired click");
		if (this.props.onClick) {
			event.preventDefault();
			// this.props.onClick(area, index, event);
			this.testing();
		}
	}
	testing(){
		console.log("Fire testing");
	}

	imageClick(event) {
        console.log("fired image click");
		if (this.props.onImageClick) {
			event.preventDefault();
			this.props.onImageClick(event);
		}
	}

    
    mouseEnter(area, index, event){
        console.log("fired mouse enter");
        if(this.props.onMouseEnter){
            this.props.onMouseEnter(area, index, event);
            
        }
    }
	mouseMove(area, index, event) {
        console.log("fired mouse move")
		if (this.props.onMouseMove) {
			this.props.onMouseMove(area, index, event);
		}
	}

	imageMouseMove(area, index, event) {
        console.log("fired image mouse move");
		if (this.props.onImageMouseMove) {
			this.props.onImageMouseMove(area, index, event);
		}
	}

	scaleCoords(coords) {
		// console.log("testing: " + this.props)
		const { imgWidth, width } = this.props;
		// const imgWidth = this.canvas.width;
		console.log("imgWidth: " + imgWidth);
		console.log("width: " + width);
		// calculate scale based on current 'width' and the original 'imgWidth'
		const scale = width && imgWidth && imgWidth > 0 ? (imgWidth/width < 1)?1:imgWidth/width : 1;
		console.log("scale: " + scale);
		// console.log(coords[0]);
		//return coords.map(coord => coord * scale);
		return [coords[0] * scale, coords[1] * scale, coords[2]];
	}

	renderPrefilledAreas() {
		this.state.map.areas.map((area, index, event) => {
			console.log("debug...");
			console.log('event: ', event, ' area: ', area);
			if (!area.preFillColor) return;
			console.log("did this place");
			const scaled = this.scaleCoords(area.coords)
			console.log(scaled[0], scaled[1], scaled[2])
			const scaledCoordsX = [area.coords[0]/0.65, area.coords[1]/0.65, area.coords[2]/0.65]
			const input = [scaled[0]/0.88, scaled[1]/0.88, scaled[2]/0.88]
			this["draw" + area.shape](
				// event.target.getAttribute("coords").split(","),
				scaled,
				area.preFillColor,
				area.lineWidth || this.props.lineWidth,
				area.strokeColor || this.props.strokeColor
			);
		});
	}

	computeCenter(area) {
		if (!area) return [0, 0];

		

		switch (area.shape) {
			case "circle":
				// console.log('Fired compute center', scaledCoords[0], scaledCoords[1]);
				return [area.coords[0], area.coords[1]];
			case "poly":
			case "rect":
			default: {
				// Calculate centroid;
				const scaledCoords = this.scaleCoords(area.coords);
				const n = scaledCoords.length / 2;
				const { y, x } = scaledCoords.reduce(
					({ y, x }, val, idx) => {
						return !(idx % 2) ? { y, x: x + val / n } : { y: y + val / n, x };
					},
					{ y: 0, x: 0 }
				);
				return [x, y];
			}
		}
	}

	renderAreas() {
		return this.state.map.areas.map((area, index) => {
			// const scaledCoordsX = [area.coords[0]/0.65, area.coords[1]/0.65, area.coords[2]/0.65]//this.scaleCoords(area.coords);
            // const scaledCoordsX = [area.coords[0], area.coords[1], area.coords[2]]
            const scaledCoordsX = this.scaleCoords(area.coords);
			const center = this.computeCenter(area);
            const extendedArea = { ...area, scaledCoordsX, center};
			console.log("find me in renderAreas:"+ extendedArea.scaledCoordsX);
			console.log("remder area: area id: ", area._id, " ", index);
			return (
				<div id = 'stupid'>
					<area
						key={area.id||index}
						shape={area.shape}
						coords= {scaledCoordsX}
						onMouseEnter={this.hoverOn.bind(this, extendedArea, index)}
						onMouseLeave={this.hoverOff.bind(this, extendedArea, index)}
						onMouseMove={this.mouseMove.bind(this, extendedArea, index)}
						onClick={this.click.bind(this, extendedArea, index)}
						href={area.href}
					/>
					<p>'render area' {extendedArea.scaledCoordsX}</p>
				</div>
				
			);
		});
	}

	render() {
		return (
			<div style={this.styles.container} ref={node => (this.container = node)}>
				<img
					style={this.styles.img}
					src={this.props.src}
					useMap={`#${this.state.map.name}`}
					alt=""
					ref={node => (this.img = node)}
					onLoad={this.initCanvas}
					onClick={this.imageClick.bind(this)}
                    onMouseMove={this.imageMouseMove.bind(this)}
                    
				/>
				<canvas ref={node => (this.canvas = node)} style={this.styles.canvas} />
				<map name={this.state.map.name} style={this.styles.map}>
					{this.renderAreas()}
				</map>
			</div>
		);
	}
}

ImageMapper.defaultProps = {
	active: true,
	fillColor: "rgba(255, 255, 255, 0.5)",
	lineWidth: 1,
	map: {
		areas: [],
		name: "image-map-" + Math.random()
	},
	strokeColor: "rgba(0, 0, 0, 0.5)"
};

ImageMapper.propTypes = {
	active: PropTypes.bool,
	fillColor: PropTypes.string,
	height: PropTypes.number,
	imgWidth: PropTypes.number,
	lineWidth: PropTypes.number,
	src: PropTypes.string.isRequired,
	strokeColor: PropTypes.string,
	width: PropTypes.number,

	onClick: PropTypes.func,
	// click: PropTypes.func,
	onMouseMove: PropTypes.func,
	onImageClick: PropTypes.func,
	onImageMouseMove: PropTypes.func,
	onLoad: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,

	map: PropTypes.shape({
		areas: PropTypes.arrayOf(
			PropTypes.shape({
				area: PropTypes.shape({
					coords: PropTypes.arrayOf(PropTypes.number),
					href: PropTypes.string,
					shape: PropTypes.string,
					preFillColor: PropTypes.string,
					fillColor: PropTypes.string
				})
			})
		),
		name: PropTypes.string
	})
};