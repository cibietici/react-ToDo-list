import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configStore } from "./store";
import App from "./App.js"

ReactDOM.render(
    <Provider store={configStore()}>
      <App />  
    </Provider>,
    document.getElementById('root'),
);