//서브 리듀서
// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT' ;
const DECREMENT = 'counter/DECREMENT' ;
const TEST = 'counter/TEST' ;

// 액션 생성 함수 정의
export const increment = () => ({ type: INCREMENT }) ;
export const decrement = () => ({ type: DECREMENT }) ;
export const testaction = () => ({ type: TEST }) ;

// 초기 상태 정의
const initialState = {
    number: 0,
    text: 'pilwon'
} ;

// 리듀서 작성
//첫번째인자는 파라미터의 현재상태, 두번째는 액션객체
export default function Counter(state=initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1 ,
            } ;
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            } ;
        case TEST:
            return {
                ...state,
                text: state.text+"!",
            } ;
        default:
            return state ;
    }
}