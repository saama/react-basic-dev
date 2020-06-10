import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReduxPractice from '../presentational/ReduxPractice';
//action안의 액션함수들 가져옴
import { increment, decrement, testaction } from '../../../store/modules/counter';
//모든 action타입이 있는 actionTypes을 가져와 필요한것만 import
import {
    ACTIONTEST
  } from '../../../store/actionType/actionTypes';


class CounterContainer extends Component { //3
    handleIncrement = () => {
        //통신 후 로직 작성
        this.props.increment() ;
    } ;
    handleDecrement = () => {
        this.props.decrement () ;
    } ;
    handleTest = () => {
        this.props.testaction () ;
    } ;
    //이벤트가 발생했을때 state를 parameter를 넘겨주어 바꿔줄수있음
    //axios등의 로직을 이곳에 넣으면 될듯
    actionTest = () => {
        this.props.onLoad ('login success');
        alert(this.props.text4); //mapStateToProps와 맵핑한 변수를 사용할수 있다.
        // 이 이벤트가 발생후 state가 바꼈기 때문에 위에처럼 alert를 할 시 2번째에 바뀐 state가 나옴
    } ;

    //이처럼 api를 사용해 해당 액션을 동작시킬수 있음
    componentDidMount(){
        this.props.onLoad ('login success!!');
    }


    render() {
        const { number , text2, text3, text4 } = this.props ;
        return (
            <ReduxPractice
                text={text2}
                value={number}
                value2={text4}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onTest={this.handleTest}
                onLoad={this.actionTest}
            />
        ) ;
    } 
}

//root reducer안에 연결된 reducer이름
const mapStateToProps = ({ counter2 }) => ({  //2
    number: counter2.number,
    text2: counter2.text,
    text3: counter2.action1,
    text4: counter2.text2,
}) ;

const mapDispatchToProps = dispatch => ({
    increment, 
    decrement, 
    testaction,
    //onLoad라는 변수보다 type을 ACTIONTEST으로 해줬기때문에 reducer에서 맵핑되어 알아서 동작함
    onLoad: payload => dispatch({ type: ACTIONTEST, payload }),
}) ; //1

export default connect ( // 스토어와 연결
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer) ;