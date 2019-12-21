import React from "react";
// import mappic from "./map2.png"
// import ResizeListener from "./Comp";
import Chart from "./Chart"

export class Map extends React.Component {
    constructor(props){
        super();
        this.state = {
            //  map = this.props.map
        };
    }

    render() {
        return(
            <div>
                <Chart width={window.innerWidth} img = {"./map2.png"}></Chart>
                {/* <img src={mappic} id="myImgId" usemap="#image-map" width="100%" height="100%" class="map"></img> */}
                {/* <map name="image-map" id="mymap">
                    <area coords="130,39,20" shape="circle" onclick=""/>
                    <area coords="94,123,20" shape="circle" onclick=""/>
                    <area coords="49,328,20" shape="circle" onclick=""/>
                    <area coords="73,398,20" shape="circle" onclick=""/>
                    <area coords="303,81,20" shape="circle" onclick=""/>
                    <area coords="591,112,20" shape="circle" onclick=""/>
                    <area coords="795,167,20" shape="circle" onclick=""/>
                    <area coords="782,274,20" shape="circle" onclick=""/>
                    <area coords="483,76,20" shape="circle" onclick=""/>
                
                    <p>X:<span id="x"></span></p>
                    <p>Y:<span id="y"></span></p>
                </map> */}
            </div>
        );
    }
}
export default Map;