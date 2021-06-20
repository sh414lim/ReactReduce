import React,{useCallback} from "react";
import { useSelector,useDispatch } from "react-redux";
import { changeInput,insert,toggle,remove } from "../modules/todos";
import Todos from "../components/Todo";

const TodosContainer =()=>{
    
    //useSelector 를 사용할때 비구조화 할당 문법 을 활용


    const {input,todos}=useSelector(({todos})=>({
        input:todos.input,
        todos:todos.todos,
    }));
        
    //useDispatch 를 사용할 때 각 액션을 디스패치 하는 함수를 생성

    const dispatch=useDispatch();

    //액션의 종류가 많아서 어떤 값이 액션 생성 함수의 파라밑로 사용되어야 하는지 일일이 명시 해주어야한다


    const onChangeInput=useCallback(input=>dispatch(changeInput(input)),[
        dispatch
    ]);

    const onInsert=useCallback(text=>dispatch(insert(text)),[dispatch]);
    const onToggle=useCallback(id=>dispatch(toggle(id)),[dispatch]);
    const onRemove=useCallback(id=>dispatch(remove(id)),[dispatch]);

    return(
        <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
        />
    );
};

export default TodosContainer;

