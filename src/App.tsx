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
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          const accountObj = {
              isConnected: true,
              address: accounts[0]
          }
          setWallet(accountObj.isConnected);
      } else {
          window.ethereum.enable();
          setWallet(false);
      }      
  }

  useEffect(()=>{
     connectWallet(); 
  },[])

  return (
    <div>
      <Navbar/>
      {isConnected ?
      <Home/> :
      <Login 
      isConnected={isConnected}
      connectWallet={connectWallet}
      />
      }

    </div>
  );
}

export default App;
