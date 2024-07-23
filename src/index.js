import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import './style/index.scss';

import {store} from './libs/Store/store';

import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

const devMode = process.env.NODE_ENV === 'development';

if (devMode && module && module.hot) {
    module.hot.accept();
}
