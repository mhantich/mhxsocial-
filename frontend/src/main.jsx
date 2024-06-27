import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import  authSlice  from './store/authSlice.js';
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";
import { UserApi } from './store/UserApi.js';
import  NewAuth from './store/NewAuth.js';
import globalReducer from "./store/index.js";
import { markPlace } from './store/markPlace.js';
import { MovieApi } from './store/MovieApi.js';


const store = configureStore({
  reducer: {
     authSlice,
     NewAuth,
  globalReducer,

    [UserApi.reducerPath]: UserApi.reducer,
    [markPlace.reducerPath]: markPlace.reducer,
    [MovieApi.reducerPath]: MovieApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(UserApi.middleware,markPlace.middleware,MovieApi.middleware),
});
setupListeners(store.dispatch);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
