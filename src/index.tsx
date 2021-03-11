/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { Widget } from "./components/Widget";
import * as serviceWorker from "./serviceWorker";
import { State } from "./store/state";
import { Host } from "./components/Host";
import watchAll from "./store/root.saga";
import { paymentInfoReducer } from "./store/paymentInfo/reducer";
import { layoutReducer } from "./store/layout/reducer";

const rootReducer = combineReducers<State>({
  layout: layoutReducer,
  paymentInfo: paymentInfoReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchAll);

ReactDOM.render(
  <React.StrictMode>
    <Host>
      <Provider store={store}>
        <Widget />
      </Provider>
    </Host>
  </React.StrictMode>,
  document.getElementById("root")
);

// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.store = store;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
