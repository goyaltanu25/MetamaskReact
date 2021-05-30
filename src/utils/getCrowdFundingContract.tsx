import {web3} from './getw3';
import AgreementContractAbi from '../ABI/crowdfunding.json'

export const getContract = (abi: any, address: any) => {
    return new web3.eth.Contract(abi, address);
}

// contract addresses
const AgreementContractAddress = "0xC04e1d4Dd28F4be10430318443333767D573eAbC";
// Crowd Funding contract
export const crowdFundingContract = getContract(AgreementContractAbi, AgreementContractAddress);
