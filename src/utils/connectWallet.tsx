import {web3} from './getw3';

declare let window: any;

export async function connectWallet(){
    const account = window.ethereum.on("accountsChanged", async function() {
        // Time to reload your interface with accounts[0]!
        const accounts = await web3.eth.getAccounts();
        return accounts;
      });
      if (account.length > 0) {
        const accountObj = {
            isConnected: true,
            address: account[0]
        }
        return accountObj.isConnected;
    } else {
        window.ethereum.enable();
        return false;
    }
}



