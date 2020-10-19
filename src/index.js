import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Profile from './screens/Profile/Profile';
import Controller from './screens/Controller';

ReactDOM.render(
    <span>
       {/* <Profile></Profile>  */}
       {/* <SimpleModal></SimpleModal> */}
       <Controller></Controller>
    </span>, 
    document.getElementById('root')
);
