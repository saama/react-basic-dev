import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReduxPractice from '../presentational/ReduxPractice';
//action안의 액션함수들 가져옴
import { increment, decrement, testaction } from '../../../store/modules/counter';


class CounterContainer extends Component { //3
    handleIncrement = () => {
        this.props.increment() ;
    } ;
    handleDecrement = () => {
        this.props.decrement () ;
    } ;
    handleTest = () => {
        this.props.testaction () ;
    } ;

    render() {
        const { number , text2 } = this.props ;
        return (
            <ReduxPractice
                text={text2}
                value={number}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onTest={this.handleTest}
            />
        ) ;
    } 
}

//root reducer안에 연결된 reducer이름
const mapStateToProps = ({ counter2 }) => ({  //2
    number: counter2.number,
    text2: counter2.text,
}) ;

const mapDispatchToProps = {increment, decrement, testaction} ; //1

export default connect ( // 스토어와 연결
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer) ;