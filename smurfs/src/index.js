import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";

//context
import store from "./store";

//components
import App from "./components/App";

ReactDOM.render(
   <Provider store={store}>
      <App /> 
   </Provider>,
   document.getElementById("root")
);
