import React,{useEffect, useState} from 'react';
import Home from './views/Home'
import {Navbar} from './components/navbar'
import './App.css';
import Login from './views/Login';
import {web3} from './utils/getw3';

declare let window: any;


function App() {
  const [isConnected, setWallet] = useState<Boolean>()
  
  async function connectWallet(){
         const accounts = await window.ethereum.enable();
         if(accounts.length > 0){
           const isConnected = window.ethereum.isConnected();
           console.log(isConnected);
           setWallet(isConnected);
         }else{
          const isConnected = window.ethereum.isConnected();
          console.log(isConnected);
         }
         

  }

  useEffect(()=>{
    connectWallet(); 
  },[])

  return (
    <div>
      <Navbar/>
      {isConnected ?
      <Home 
      isConnected={isConnected}
      /> :
      <Login 
      isConnected={isConnected}
      connectWallet={connectWallet}
      />
      }

    </div>
  );
}

export default App;
