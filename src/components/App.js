import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BottomMenuComponent from "./include/BottomMenuComponent";

import People from './people/container/PeoInfoFrame';
import Map from './map/container/MyMapContainer';
import Counter from './counter/container/CounterContainer';

function App() {
    return (
        <div className = "App" >
            <div>
                <Router>
                    {/* <div className="app"> */}
                    <Route exact path="/" component={Counter} />
                    <Route path="/people" component={People} />
                    <Route path="/map" component={Map} />
                    <BottomMenuComponent />
                    {/* </div> */}
                </Router>
            </div>
        </div>
);
}

export default App;