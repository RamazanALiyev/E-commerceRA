import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import "swiper/css/bundle";
import { BrowserRouter } from "react-router-dom";
import { store } from '../src/store'
import { Provider } from 'react-redux'
import 'alertifyjs/build/css/alertify.css';
import ScrollToTop from "./ScrollToDo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ScrollToTop/>
  <Provider store={store}> 
    <App />
    </Provider>
  </BrowserRouter>
);
