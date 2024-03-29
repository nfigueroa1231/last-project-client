import { useEffect, useState, useContext }  from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { post } from '../services/authService'
import axios from 'axios'

const MiLuma = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [userInfo, setUserInfo] = useState(null)

    const { storeMiLumaToken } = useContext(AuthContext)

    const navigate = useNavigate()

    

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
      };

    const handleSubmit = (e) => {
        e.preventDefault()

        post('/mi-luma', user)
        .then((response) => {
            console.log("this is the login response", response.data)
            setUserInfo(response.data)
            console.log("this is the token", response.data.data.token)
            storeMiLumaToken(response.data.data.token)
            navigate('/luma-details')
        })
        .catch((err) => {
            console.log("Error logging in", err)
        })

    }


  return (
    <div>

        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input type='text' name='username' onChange={handleTextChange}  />
            </label>
            <label>
                Password
                <input type='text' name='password' onChange={handleTextChange} />
            </label>
            <button type='sunmit'>Login</button>
        </form>

        {
            userInfo &&

            <h1>We have user info.</h1>
        }

    </div>
  )
}

export default MiLuma;