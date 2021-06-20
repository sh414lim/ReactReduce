//액션 타입 정의
//DUCKS 패턴
//액션 타입 액션 생성함수 리듀서 함수르 기능별로 파일 하나에 몰아서 다 작성하는 방식

//액션 타입 정의 하기
//액션타입은 대문자로 정의하고 문자열 내용은 모듈이름/액션 이름' 과 같은 형태로 작성한다
//문자열 안에 모듈 이름을 넣음으로 써 나중에 프로젝트가 커졋을대 액션의 이름이 충돌되지 않게 해준다


const INCREASE='counter/INCREASE';
const DECREASE='counter/DECREASE';

//액션 생성함수
export const increase =()=>({type:INCREASE})
export const decrease=()=>({type:DECREASE});

//초기 리듀서
//초기 상태 및 리듀서 함수 만들기
//counter 모듈의 초기 상태와 리듀서 함수 생성
//초기 상태에 number 값을 설정,리듀서 함수에는 현재 상태를 참조하여 새로운 객체를 생성하는 반환 하는코드 작성
const initialState={
    number:0
};



function counter(state = initialState, action) {
    switch(action.type){
        case INCREASE:
            return{
                number:state.number+1
            };
            case DECREASE:
                return{
                    number:state.number-1
                };
                default:
                    return state;

            
    }
}


export default counter;

