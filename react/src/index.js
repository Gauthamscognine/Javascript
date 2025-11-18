import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parent from './props/parent';
import UserCard from './props/UserCard';
import LoginPage from './loginpage/lg';
import reportWebVitals from './reportWebVitals';
import Lifeapp from './lifecycle/lifeapp';
import LifecycleDemo from './lifecycle/lifecycledemo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
    /* <App />
    <LoginPage/> */}
    <Parent/>
    {/* <Lifeapp/> */}

   </React.StrictMode>
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
