//루트 리듀서
import { combineReducers } from 'redux' ;
import counter2 from './counter' ;

export default combineReducers({
    counter2,
    //다른 리듀서를 만들게 되면 여기에 import
}) ;