import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore, bindActionCreators} from 'redux'
import reducer from './reducer';
import * as actions from "./actions";

import App from './components/App';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;
const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const update = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
          {/* <Counter
            counter={getState().value}
            inc={inc}
            dec={dec}
            rnd={() => {
                const value = Math.floor(Math.random() * 10);
                rnd(value);
            }}
          /> */}
          <App/>
      </React.StrictMode>
    );
}
update();
subscribe(update);