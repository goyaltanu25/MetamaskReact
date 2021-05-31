import {crowdFundingContract} from './getCrowdFundingContract'

// export const getIndices = async (account:any) => {
//     try {
//         const agreementIndicesResponse = await crowdFundingContract.methods.agreementIndices(account).call();
//         console.log('agreementIndicesResponse', agreementIndicesResponse);
//     } catch (e) { console.log(e) }


// }

export const dcbPools = async (dcbvalue:Number) => {
    try {
        const dcbPools = await crowdFundingContract.methods.dcbPools(dcbvalue).call();
        const data ={
            agreementID:dcbPools.agreementID._hex,
            hardcap:dcbPools.hardcap._hex,
            endDate:dcbPools.endDate._hex,
            agreementName:dcbPools.agreementName
        }
        return data;
        // if(dcbPools){
        //     const addedAgreement= await crowdFundingContract.methods.addDCBAgreement(data.agreementID,data.hardcap,data.endDate,data.agreementName).call();
        //     console.log('addDCBAgreement response', addedAgreement);
        // }
    } catch (e) { console.log(e) }

}