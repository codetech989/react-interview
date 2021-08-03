import React from 'react';
import './App.css';
import Routes from "./Routes/routes";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import store from "../src/store/store";
import 'antd/dist/antd.css'

export const persistor = persistStore(store);
function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes/>
          </PersistGate>
        </Provider>
      </div>
  );
}

export default App;
