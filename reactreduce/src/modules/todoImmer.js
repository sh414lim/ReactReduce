import { createAction,handleActions } from "redux-actions";
import product, { produce } from "immer";

//리듀서 에서는 항상 상태를 업데이트 할때 불변성을 지켜야 하기 때문에 ...스프레드 연산자 와 배열의 내장함수를 활용한다
//객체의 깊이가 깊지 않을수록 추후 불변성을 지켜 가면서 값을 업데이트 할때 수월합니다
//상황에 따라 상태 값들을 하나의 객체안에서 묶어서 넣는것이 코드의 가독성을 높이는데 유리하며 나중에 컴포넌트에 리덕스를 연동할 때도 더욱 편하다
//객체 구조가 복잡해지거나 객체로 이루어진 배열을 다룰 경우 immer 를 사용하면 훨씬 편리하게 상태를 관리할 수 있다.


const CHANGE_INPUT='todoimmer/CHANGE_INPUT';
const INSERT = 'todoimmer/INSERT';
const TOGGLE='todoimmer/TOGGLE';
const REMOVE='todos/REMOVE';

export const changeInput=createAction(CHANGE_INPUT, input=>input);

let id=3;

export const insert =createAction(INSERT,text=>({
    id:id++,
    text,
    done:false,
}));

export const  toggle=createAction(TOGGLE,id=>id);
export const remove=createAction(REMOVE,id=>id);

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
        [CHANGE_INPUT]:(state,{payload:input})=>
        product(state,draft=>{
            draft.input=input;
        }),

        [INSERT]:(state,{payload:todo})=>
        product(state,draft=>{
            draft.todos.push(todo);
        }),
        [TOGGLE]:(state, {payload:id})=>
        product(state,draft=>{
            const todo=draft.todos.find(todo=>todo.id === id);
            todo.done=!todo.done;
        }),
        [REMOVE]:(state,{payload :id})=>
        product(state,draft=>{
                const index =draft.todos.findIndex(todo=>todo.id === id);
                draft.todos.splice(index,1);
            }),
    },
    initialState,
)

export default todos;