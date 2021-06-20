import React from "react";
import {useSelector,useDispatch} from "react-redux";
import Counter from "../components/Counter";
import {increase,decrease} from "../modules/counter";


//리덕스 스토어와 연동된 컨테이너 컴포넌트를 만들 때 connect 함수를 사용하는 대신 react-redux에서 제공하는 Hooks를 사용할 수 있다
//useSelector Hook 를 사용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회 할 수있다.
// const 결과 = useSelector(상태 선택 함수)
//상태 선택 함수는 mapStateToProps 와 형태가 똑같다
//CounterConainer 에서 connect 함수 대신 useSelecotr 를 사용하여 counter,numver 값을 조회 함으로써 Counter에게 props를 넘겨준다


const CounterContainer =()=>{
    const number =useSelector(state=>state.counter.number);
        //useDispatch Hook은 컴포넌트 내부에서 스토어의 내장 함수 dispatch 를 사용할 수 있게 해준다
        //컨테이너 컴포넌트에서 액션을 디스패치해야 한다면 useDispatch 을 사용하면 된다
        //const dispatch=useDispatch();
        //dispatch({type:'SAMPLE_ACTION})
    const dispatch=useDispatch();
    
    return(
        <Counter
        number={number}
        onIncrease={()=>dispatch(increase())}
        onDecrease={()=>dispatch(decrease())}
        />
        );

};
export default CounterContainer

