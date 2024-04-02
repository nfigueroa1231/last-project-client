import React, { useState, useEffect } from 'react';
import { get } from '../services/authService'
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const [providersList, setprovidersList ] = useState(null)
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

    const handleClick = (e) => {
        e.preventDefault()

        navigate('/mi-luma')
    }

    return (
        <div>
          {providersList && providersList?.map((provider, index) => (
            <div key={index} className="pt-5 pl-5 max-w-xs">
              <div className="w-80 h-40 rounded overflow-hidden shadow-lg" onClick={handleClick}>
                {provider.type === 'Luma' && (
                    <img className="w-full h-full object-cover" src={"https://pbs.twimg.com/profile_images/1555260401901780992/tubkVHsv_400x400.jpg"} alt="Imagen" />
                )}
              </div>
            </div>
          ))}
          
          {providersList && providersList.length === 0 && (
            // ADD PROVIDER VIEW
            <div className="pt-5 pl-5 max-w-xs">
                <p>Add a new provider</p>
              <div className="w-80 h-40 rounded overflow-hidden shadow-lg" onClick={handleClick}>
                {/* <p>Add a new provider</p> */}
              </div>
            </div>
          )}
        </div>
      );
}

export default Dashboard;
