import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {IntlProvider} from "react-intl";
import reducer from "./reducers";

import App from "./App";

import "./index.css";

const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale="en">
            <App />
        </IntlProvider>
    </Provider>,
  document.getElementById("root")
);

export default store;
