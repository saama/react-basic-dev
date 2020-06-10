import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux' ;


const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

const rootElement = document.getElementById('root');
ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>
    , rootElement
);