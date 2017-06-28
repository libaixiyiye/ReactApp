import React from 'react';
import {render} from 'react-dom';
import App from './containers/index'
import './assets/index.less'
import {Provider} from 'react-redux';
import {configureStore} from  './store/index';
//可以在configureStore传入初始状态
let store=configureStore();//生成store
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));