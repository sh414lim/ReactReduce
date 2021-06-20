//concet 함수를 사용할 때는 일반적으로 위 코드와 같이 mapStateToProps 와 mapDispatchToProps 를 미리 선언해놓고 사용한다
//하지만 concet 함수 내부에 익명 함수 형태로 선언해도 문제가 되지 않는다

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"

import Counter from "../components/Counter";
import{increase,decrease} from "../modules/counter";


const CounterContainer=({number,increase,decrease})=>{
    return(
        <Counter number={number} onIncrease={increase} onDecreas={decrease}/>
    );
};
// 컴포넌트에서 액션을 디스패치 하기 위해 각 액션 생성 함수를 호출하고 dispatch 로 감사는 작업이 번거로울 수도잇다
//리덕스에서 제공하는 bindActionCreators 유틸함수를 사용하면 간편하다



export default connect(
    state=>({
        number:state.counter.number,
    }),
    dispatch=>
        bindActionCreators(
            {
                increase,
                decrease
            },
            dispatch,
        ),
      
)(CounterContainer)

//액션 생성 함수를 호출하여 디스패치하는 코드가 한줄이기 때문에 불필요한 코드 블록을 생략해주 었다

//  increase:()=>dispatch(increase()),
//  increase:()=>{return dispatch(increase())}
//두 코드는 동일하다


