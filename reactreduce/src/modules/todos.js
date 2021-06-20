const CHANGE_INPUT="todo/CHANGE_INPUT"; //인풋 값 변경
const INSERT="todo/INSERT";//새로은 TODO 생성
const TOGGLE="todo/TOGGLE"; //TO 체크및 체크해제
const REMOVE="todo/REMOVE"//리스트 삭제


export  const changeInput=input=>({
type:CHANGE_INPUT,
input
})

let id=3; //insert가 호출 될 때마다 1씩 더해진다

export const insert=text=>({
    type:INSERT,
    todo:{
        id:id++,
        text,
        done:false
    }
});

export const toggle=id=>({
    type:TOGGLE,
    id
});

export const remove=id=>({
    type:REMOVE,
    id
})

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

function todos(state = initialState,action){
    switch(action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input:action.input
            };

            case INSERT:
                return{
                    ...state,
                    todos:state.todos.concat(action.todo)
                };
                case TOGGLE:
                    return{
                        ...state,
                        todos:state.todos.map(todo=>
                                todo.id === action.id ?{...todo, done: !todo.done}:todo
                            )
                    };
                    case REMOVE:
                        return{
                            ...state,
                            todos:state.todos.filter(todo=>todo.id !== action.id)
                        };
                        default:
                            return state;
    }
}

export default todos;