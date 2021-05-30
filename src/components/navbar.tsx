import React from 'react';
import { useState } from 'react';
import {ConnectWallet} from '../utils/connectWallet';



export const Navbar: React.FC<any> = () => {   
    return <>
        <nav className="bg-gray-800 h-24 md">
            <div className="flex">
                <div className="place-self-center">
                <h1 className="text-white text-2xl">Dapp Functionalities</h1>
                </div>
                <div className="place-self-end">
                <button type="button" className="items-center m-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    onClick={ConnectWallet}> Connect
                 </button>  
                </div>
               
            </div>
        </nav>
    </>
}