//컴포넌트 에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고 ,액션도 디스패치 해준다
//리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트 라고 부른다

import React from "react";
import {connect} from "react-redux"
import Counter from "../components/Counter"
import{increase,decrease} from "../modules/counter"

//위 컴포넌트를 리덕스와 연동하려면 react-redux 에서 제공하는 connect 함수를 사용해야 한다
// connect(mapStateToProps mapDispatchToProps)(연동할 컴포넌트)
//mapStateToProps 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
//mapDispatchToProps 는 액션생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//connect  함수를 호출하고 나면 또 다른 함수를 반환한다
//반환된 함수에 컴포넌트를  파리미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어진다
// const makeContainer=connect(mapStateToProps,mapDispatchToProps)
//makeContainer(타깃 컴포넌트)

const CounterContainer =({number,increase,decrease})=>{
    return(
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

const mapStateToProps=state=>({
    number:state.counter.number,
});

const mapDispatchToProps=dispatch=>({
    //임시 함수
    increase:()=>{
        dispatch(increase()); //액션생성 함수를 불러와서 액션 객체를 만들고 디스패치해준다
        console.log("increase");
    },
    decrease:()=>{
        dispatch(decrease());
        console.log('decrease');

    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);

//mapStateToprops 와 mapDispatchProps 에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다
//mapStateToProps는 state를 파라미터로 받아오며 이 값은 현재 스토어가 지니고 있는 상태를 가리킨다
//mapDispatchToProps 의 경우 store의 내장함수 dispatch 를 파라미터로 받아온다
//mapDispatchToProps에서는 진행 절차를 설명하기 위해 임시로 console.log를 사용



