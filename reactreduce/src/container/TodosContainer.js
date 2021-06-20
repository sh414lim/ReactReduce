import React from "react";
import {connect} from "react-redux";
import { changeInput,insert,toggle,remove } from "../modules/todos";
import Todos from "../components/Todo";

const TodoContainer=({input,todos,changeInput,insert,toggle,remove})=>{
    return(
        <Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
        />
    )
}

export default connect(
    //비 구조화 할당을 통해 todos를 분리
    //state.todos.input 대신 todos.input 를사용
    ({todos})=>({
        input:todos.input,
        todos:todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,

    },

)(TodoContainer);


//todos 모듈에서 작성했던 액션생성 함수와 상태 안에 있던 값을 컴포넌트의 props로 전달

//
