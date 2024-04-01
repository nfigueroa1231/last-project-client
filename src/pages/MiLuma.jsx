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

        // guardar el username y el password en Provider
        post('/providers', user)
        .then((response) => {
            console.log("saving user data", response.data)
            setUserInfo(response.data)
        })
        .catch((err) => {
            console.log("Error saving user data", err)
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
            <button type='submit'>Login</button>
        </form>

        {
            userInfo &&

            <h1>We have user info. </h1>
        }

    </div>
  )
}

export default MiLuma;