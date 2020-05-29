import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyMap from '../presentational/MyMap';


class MyMapContainer_ extends Component { //3
    render() {
        const { url } = this.props ;
        return (
            <MyMap
                url={url}
            />
        ) ;
    } 
}

//root reducer안에 연결된 reducer이름
const mapStateToProps = ({ mymap_config }) => ({  //2
    url: mymap_config.url,
}) ;

export default connect ( // 스토어와 연결
    mapStateToProps,
)(MyMapContainer_) ;