import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

var axios = require("axios");

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 1276613... removed spinner
var spinner = function() {
  setInterval(spinner, 600000);
  console.log("spinner");
  axios.get("https://lyricrace.herokuapp.com");
};
spinner();
<<<<<<< HEAD
>>>>>>> parent of 1276613... removed spinner
=======
>>>>>>> parent of 1276613... removed spinner
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
document.body.style = "background-color:#3f3075;";
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
