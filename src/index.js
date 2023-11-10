import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './container/ContainerHello'
// import ContainerHello from "./container/ContainerHello";
//import ContainerHello, {AnotherContainerHello} from "./container/ContainerHello";
import "./component/ComponentHello";
//import Greeting, {GreetingArrow} from "./component/ComponentHello";


class HelloWorld extends React.Component{
    render() {
        return(
            <h2>Hello here</h2>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
