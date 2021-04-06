import {createStore} from 'redux';

const ADD="ADD"
const DELITE="DELITE"

  const addToDo=(text)=>{
    return{
        type:ADD,
        text
    
    }
}

 const deleteToDo=(id)=>{
    return{
        type:DELITE,
        id:parseInt(id)
    }
}


const reducer =(state=[],action)=>{

    switch(action.type){
        case ADD:
            return [{text: action.text, id:Date.now()}, ...state];
            case DELITE:
                return state.filter(toDo => toDo.id !== action.id);
                default:
                    return state;
    }

};

const store =createStore(reducer);

export const actionCreators={
    addToDo,
    deleteToDo
}

export default store;