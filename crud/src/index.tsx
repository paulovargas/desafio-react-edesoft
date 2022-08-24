import { createRoot } from "react-dom/client";
import './index.css'
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";

let reducers = combineReducers({userReducer})

const store = legacy_createStore(reducers, composeWithDevTools(
  applyMiddleware(thunkMiddleware)
));

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)