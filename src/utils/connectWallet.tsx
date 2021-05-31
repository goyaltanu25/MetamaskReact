import {web3} from './getw3';

declare let window: any;

export async function connectWallet(){
        let accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            const accountObj = {
                isConnected: true,
                address: accounts[0]
            }
            return accountObj.isConnected;
        } else {
            window.ethereum.enable();
            return false;
        }
}



