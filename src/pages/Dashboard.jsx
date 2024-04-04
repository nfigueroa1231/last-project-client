import React, { useState, useEffect } from 'react';
import { get } from '../services/authService'
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const [providersList, setprovidersList] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {  //peform
    get('/providers')
      .then((response) => {
        console.log("Providers list", response.data)
        setprovidersList(response.data)
      })
      .catch((err) => {
        console.log("Error getting providers list", err)
      })
  }, []);

  const handleClick = (id) => {


    navigate(`/provider/${id}`)
  }

  // const handleOtherClick = () => {
  //   navigate('/mi-luma')
  // }

  const handleOtherClick = () => {
    navigate('/providercards')
  }
 

  return (
    <div>
      {providersList && providersList?.map((provider, index) => (
        <div key={index} className="pt-5 pl-5 max-w-xs" onClick={() => handleClick(provider._id)}>
          <div className="w-80 h-40 rounded overflow-hidden shadow-lg">
            {provider.type === 'Luma' && (
              <img className="w-full h-full object-cover" src={"https://pbs.twimg.com/profile_images/1555260401901780992/tubkVHsv_400x400.jpg"} alt="Imagen" />

            )}
          </div>
          <h3 className="text-2xl font-semibold text-gray-700">{provider.type}: {provider.accounts[0].accountNumber}</h3>
          <h4 className="text-2xl font-semibold text-gray-700">See Details</h4>
        </div>
      ))}

      {providersList && providersList.length === 0 && (
        // ADD PROVIDER VIEW
        <div className="pt-5 pl-5 max-w-xs">
          <div className="w-80 h-40 rounded overflow-hidden shadow-lg" onClick={handleOtherClick}>

            {/* <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
                Add a new provider
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
                    </span> */}
            <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl text-black">
              Add a new provider
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </span>




          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>    plus */}
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>        */}



