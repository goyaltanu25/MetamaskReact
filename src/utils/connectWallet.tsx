import {web3} from './getw3';

declare let window: any;

export async function ConnectWallet(){
        let accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            const accountObj = {
                isConnected: true,
                address: accounts[0]
            }
            console.log(accountObj);
            alert('Connected!');
        } else {
            alert('Please Connect to Wallet First!');
            window.ethereum.enable();
        }
}



