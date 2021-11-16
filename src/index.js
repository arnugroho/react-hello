import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './container/ContainerHello'
import ContainerHello, {AnotherContainerHello} from "./container/ContainerHello";


class HelloWorld extends React.Component{
    render() {
        return(
            <h2>Hello here</h2>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <AnotherContainerHello />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
