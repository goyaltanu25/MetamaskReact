import React,{useState} from 'react';
import Home from './Home';

const Login = ({isConnected,connectWallet}) => {
    const [username,setUserName]=useState();
    const [password,setpassword]=useState();
    const [isConnect,connected]=useState(false);

    const handleInput=({name,value})=>{
     switch(name){
       case 'email':setUserName(value);break;
       case 'password':setpassword(value);break;
       default: return;
     }
    }
    const login=()=>{
      if(username==="travis@gmail.com" && password==="12345678"){
        connected(true);
      }
    }
    return <>
    {!isConnect ?
    <div className="w-2/5 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true"/>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label  className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" required 
            onChange={(e)=>handleInput(e.target)}
            value={username}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
          </div>
          <div>
            <label className="sr-only">Password</label>
            <input id="password" name="password" type="password"  required 
            onChange={(e)=>handleInput(e.target)}
            value={password}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
          </div>
        </div>
        <div>
          <button type="submit" 
          onClick={login}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {/* <!-- Heroicon name: solid/lock-closed --> */}
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        
        </div>
      </form>
      <div className="w-full text-center p-2">OR</div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={connectWallet}>
            {isConnected ? "Connected" : "Connect Using Metamask"}
          </button>
    </div>
    :
    <Home isConnected={isConnect}/>}
      </>
  }
  
  export default Login;