//루트 리듀서
import { combineReducers } from 'redux' ;
import counter2 from './counter' ;
import mymap_config from './mymap' ;

export default combineReducers({
    counter2,
    mymap_config,
    //다른 리듀서를 만들게 되면 여기에 import
}) ;