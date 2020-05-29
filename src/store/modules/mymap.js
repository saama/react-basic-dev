//서브 리듀서
// 액션 타입 정의
const SENDMESSAGE = 'SENDMESSAGE' ;

// 액션 생성 함수 정의
export const sendmessage = () => ({ type: SENDMESSAGE }) ;

// 초기 상태 정의
const initialState = {
    title: '개인 지도 프로젝트 입니다.',
    url: 'http://xdworld.vworld.kr:8080/2d/Base/201512/{z}/{x}/{y}.png',
    message: ''
} ;

export default function mymap(state=initialState,action) {
    switch(action.type) {
        case SENDMESSAGE:
            console.log(action);
            return {
                ...state,
                message: state.message+"!" ,
            } ;
        default : return state;
    }
}