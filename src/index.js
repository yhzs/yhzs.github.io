import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root'
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducers'
import DevTools from './containers/DevTools'

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            logger
        ),
        DevTools.instrument()
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});


ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
