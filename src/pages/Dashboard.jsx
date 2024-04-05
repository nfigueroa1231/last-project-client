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

 

  const handleOtherClick = () => {
    navigate('/providercards')
  }
 

  return (
    <div>
      <h1 className="mb-1 mt-5 text-4xl font-extrabold ml-5 leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
                    <a href="#_">DebtPaid</a>
                </h1>
                <p className="text-lg ml-5 font-medium w-screen text-gray-500 sm:text-2xl">No Providers? Let's Boost Your Game! Click 'Add' and Get Rolling</p>
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

        <div className="pt-5 pl-5 max-w-xs">
          <div className="w-80 h-40 rounded overflow-hidden shadow-lg" onClick={handleOtherClick}>
            <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl text-black">
              <img className="w-full h-full object-cover" src={"https://wumbo.net/symbols/plus/feature.png"} alt="Imagen" />

            </span>

          </div>
        </div>
    </div>
  );
}

export default Dashboard;





