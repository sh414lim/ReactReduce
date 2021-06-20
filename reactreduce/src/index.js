import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'
import rootReducer from "./modules"
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"


const store=createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
<Provider store={store}>{/*리액트 컴포넌트에서 스토어를 사용할 수 있도록 APP 컴포넌트를 react-redux 에서 제공하는 Provider 컴포넌트로 감싸 준다  이 컴포넌트를 사용할때는 store를 props로 전달해 주어야 한다*/}
<App/>,
</Provider>,
   document.getElementById("root"));