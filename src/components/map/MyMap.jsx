import React, { Component } from "react";
import 'ol/ol.css';
import OlMap from "ol/map";
import OlView from "ol/view";
import OlLayerTile from "ol/layer/tile";
import OlSourceXYZ from "ol/source/XYZ";
import OlLayerVector from "ol/layer/Vector";
import OlSourceVector from "ol/source/vector";
import OlFeature from "ol/Feature";
import OlGeomPoint from "ol/geom/Point";
import {defaults as defaultControls, ScaleLine} from 'ol/control';
import {Icon, Style} from 'ol/style';


class PublicMap extends Component {
    constructor(props) {
        super(props);

        this.state = { center: [14127679.82, 4512570.74], zoom: 14, projection: 'EPSG:3857' };

        //임시 feature 생성
        this.iconFeature = new OlFeature({
            geometry: new OlGeomPoint([14128679.82, 4512570.74]),
            name: 'My position',
          });

        let iconStyle = new Style({
            image: new Icon({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: '../../../static/images/boy.png'
            })
        });

        this.iconFeature.setStyle(iconStyle);

        this.olmap = new OlMap({
            target: null,
            layers: [
                new OlLayerTile({
                    source: new OlSourceXYZ({
                        // projection : "EPSG:3857",
                        url: 'http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png',
                        // crossOrigin: "anonymous"
                    })
                }),
                // new OlLayerTile({
                //     source: new OlSourceOSM()
                // })
                new OlLayerVector({
                    source: new OlSourceVector({
                      features: [this.iconFeature]
                    })
                  })
            ],
            view: new OlView({
                projection: this.state.projection,
                center: this.state.center,
                zoom: this.state.zoom
            }),
            //지도위 컨트롤러들 생성
            controls: defaultControls().extend([
                new ScaleLine({
                  units: 'degrees'
                })
              ])
        });
    }

    updateMap() {
        this.olmap.getView().setCenter(this.state.center);
        this.olmap.getView().setZoom(this.state.zoom);
    }

    componentDidMount() {
        //위에만든 맵을 element와 맵핑
        this.olmap.setTarget("map");

        // Listen to map changes
        // this.olmap.on("moveend", () => {
        //     let center = this.olmap.getView().getCenter();
        //     let zoom = this.olmap.getView().getZoom();
        //     this.setState({ center, zoom });
        // });
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        // let center = this.olmap.getView().getCenter();
        // let zoom = this.olmap.getView().getZoom();
        // if (center === nextState.center && zoom === nextState.zoom) return false;
        // return true;
    }

    // userAction() {
    //     this.setState({ center: [546000, 6868000], zoom: 5 });
    // }

    render() {
        this.updateMap(); // Update map on render?
        return (
            <div id="map" style={{ width: "50%", height: "360px" }}>
                {/* <button onClick={e => this.userAction()}>setState on click</button> */}
            </div>
        );
    }
}

export default PublicMap;
