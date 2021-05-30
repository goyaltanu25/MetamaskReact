import { useState } from 'react';
import {getIndices,dcbPools} from '../utils/agreementData';


interface DcbpoolData{
  agreementID:string,
  hardcap:string,
  endDate:string,
  agreementName:string
}

const Home:React.FC = () => {
  const [inputAddress, setInput] = useState('')
  const [dcbpool, setDcbPoolsData] = useState<DcbpoolData>()

  const submit=()=>{
    if(inputAddress){
      getIndices(inputAddress)
    }
  }
  
  const getDcb =async ()=>{
     const dcbpooldata = await dcbPools();
     setDcbPoolsData(dcbpooldata);
  }
  return <>
    <div className="text-center decoration-clone bg-red-300 py-6 px-6 border-4 rounded-md">
      <h1 className='text-lg md:text-4lg'>
        Click on Connect!
      </h1>
      <div className="mb-3 pt-0">
        <input type="alphanumeric" placeholder="Enter Contract Owner Address"
          className="my-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-200"
          value={inputAddress}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="items-center m-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50" 
        onClick={submit}>Submit</button>
        <button className="items-center m-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50" 
        onClick={getDcb}>Get dcbPools</button>
      </div>
      {dcbpool &&
      <table className="table-fixed border-separate border-solid border-4 border-light-blue-500 mx-96">
         <thead>
           <tr className="bg-emerald-200">
             <th>Agreement ID</th>
             <th>Hardcap</th>
             <th>EndDate</th>
             <th>AgreementName</th>
           </tr>
         </thead>
         <tbody>
           <tr className="bg-emerald-200">
             <td>{dcbpool?.agreementID}</td>
             <td>{dcbpool?.hardcap}</td>
             <td>{dcbpool?.endDate}</td>
             <td>{dcbpool?.agreementName}</td>
           </tr>
         </tbody>
      </table>
     }
    </div>
  </>;
}

export default Home;
