import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators, addToDo } from '../store';

function Home({toDos,addToDo}){

    const [text,setText] =useState('')
    
    const onChange=(e)=>{
        setText(e.target.value)
    }

    const onSubmit=e=>{
        e.preventDefault();
        setText('');
        addToDo(text);
    }
    return(
        <>
        <h1>TO Do</h1>
        <form onSubmit={onSubmit}>
            <input type='text' value={text} onChange={onChange}/>
            <button>Add</button>
        </form>
        <ul>
            {toDos.map(toDo=><ToDo{...toDo} key={toDo.id}/>)}
        </ul>
        </>
    );
}

//connect()는 Home로 부터 보내는 props에 추가될 수 있도록 허용 해준다.
function mapStateToProps(state,ownProps){

    return {toDos:state};
}

function mapDispatchToProps(dispatch){
    return {
        //addToDO: 는 dispatch 을 호출한다
        addToDo:(text)=>dispatch(actionCreators.addToDo(text))
    };
}

//Redux state로 부터 home(component)에 prop으로써 전달한다
export default connect(mapStateToProps,mapDispatchToProps) (Home);

//componetn인 Home과 함께 mapStateToProps 써서 state를 가져오고 싶어 한다.
//우리는 mapStateToProps() function을 써서 store로부터 state를 가져다 준다
//이것을 mapStateToProps 라고 부른다
//mapStateToProps 는 두 종류의 arguments 와 함께 호출 

//function mapStateToProps(state,ownProps)
