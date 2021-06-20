import {createAction,handleActions} from "redux-actions"

//createAction 으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용한다
//액션 생성 함수에 파라미터가 필요하다

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경함
const INSERT ='todos/INSERT';
const TOGGLE='todos/TOGGLE';
const REMOVE='todos/REMOVE';

export const changeInput =createAction(CHANGE_INPUT,input=>input);

let id=3;// insert 가 호출 될때 마다 1씩 더해진다;


//insert의 경우 todo 객체를 액션 객체안에 넣어 주어야 한다
//두번째 파라미터에 text 를 넣으면 todo객체가 반환되는 함수를 넣어준다
export const insert=createAction(INSERT,text=>({
    id:id++,
    text,
    done:false,
}));

export const toggle=createAction(TOGGLE, id=>id);
export const remove=createAction(REMOVE, id=>id);

//handleActions 로 리듀서 작성
//creatAction 으로 만든 액션 생성 함수는 파라미터로 받아온 값을  객체 안에 넣을때 원하는 이름으로 넣으면 안된다
//action.id ,action.todo 와 같이 action.payload 라는 이름을 공통적으로 넣어 주어야한다
//기존의 업데이트 로직에서도 모두 action.payload 값을 조회하여 업데이트 하도록 구현


//액션 생성 함수는 액션에 필요한 추가 데이터를 모두 paylaad 라는 이름으로 사용하기 때문에 action.id action.todo 를 조회하는 대신 
//모두 공통적으로 action.payload 값을 조회하도록 리듀서 구현

const initialState={
    input:'',
    todos:[
        {
            id:1,
            text:'리덕스 기초 배우기',
            done:true
        },
        {
            id:2,
            text:'리액트와 리덕스 사용',
            done:false
        }
    ]
};


const todos=handleActions(
    {
        [CHANGE_INPUT]:(state,{payload:input})=>({...state,input:input}),
        [INSERT]:(state,{payload:todo})=>({
            ...state,
            todos:state.todos.concat(todo),
        }),
        [TOGGLE]:(state,{payload:id})=>({
            ...state,
            todos:state.todos.map(todo=>
                todo.id === id ? {...todo , done:!todo.done}:todo,

                ),
        }),
        [REMOVE]:(state,{payload:id})=>({
            ...state,
            todos:state.todos.filter(todo=>todo.id !== id),
        }),
    },
    initialState,
)

export default todos;

//모든 추가 데이터 값을 action.payload 로 사용하기 때문에 나중에 리두서 코드를 다시 볼때 햇갈리수도 있다
//객체 비구화 할당 문법으로 action 값의 payliad 이름을 새로 설정해주면 좀 더 쉽게 파악할 수 잇다