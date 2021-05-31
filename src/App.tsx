import React,{useEffect, useState} from 'react';
import {connectWallet} from './utils/connectWallet';
import Home from './views/Home'
import {Navbar} from './components/navbar'
import './App.css';
import Login from './views/Login';

function App() {
  const [isConnected, setWallet] = useState<Boolean>()
  
  useEffect(()=>{
    async function wallet() {
      const isConnected = await connectWallet(); 
      setWallet(isConnected);
    }
    wallet()
  })
  return (
    <div>
      <Navbar/>
      {isConnected ?
      <Home/> :
      <Login/>
      }

    </div>
  );
}

export default App;
