import {createAction, handleActions} from "redux-actions";

//redux-actions를 사용하면 액션 생성 함수를 더 짧은 코드로 작성 할 수 있다.
//switch/case 문이 아닌 handleActions 라는 함수를 사용하여 각 액션마다 업데이트 함수를 설정하는 형식으로 작성
//createAction 을 사용하면 매번 객체를 직접 만들어 줄 필요 없이 더욱 간단하게 액션 생성함수 선언

const INCREASE='counter/INCREASE';
const DECREASE= 'counter/DECREASE';

export const increase=createAction(INCREASE);
export const decrease=createAction(DECREASE);

//handleACtions라는 함수 사용
//handleActions 함수의 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수선언
//두번째 파라미터에는 초기상태를 넣어준다.

const initialState={
    number:0,
};

const counter =handleActions(
    {
        [INCREASE]:(state,action)=>({number:state.number + 1}),
        [DECREASE]:(state,action)=>({number:state.number - 1}),
    },
    initialState,
);

export default counter;