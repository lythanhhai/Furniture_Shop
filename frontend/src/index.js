import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
// import CombineReducers from "./Store/showModalStore";
import { CombineReducers, ConfigureStore } from "./Store/showModalStore";
import { useEffect } from "react";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(ConfigureStore);
const store = ConfigureStore;
let persistor = persistStore(store);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
