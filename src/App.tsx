import React,{useEffect, useState} from 'react';
import {Navbar} from './components/navbar'
import './App.css';
import {Login} from './views/Login';


declare let window: any;


function App() {

  return (
    <div>
      <Navbar/>
      <Login/>
    </div>
  );
}

export default App;
