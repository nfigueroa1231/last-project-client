import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth.context'
import { post } from '../services/authService'

const MiLumaAccountDetails = () => {

    const [userInfo, setUserInfo] = useState(null)
    const { miLumaToken } = useContext(AuthContext)

    useEffect(() => {
        post('/mi-luma/account-info', {token: miLumaToken})
        .then((response) => {
            console.log("this is the response, MiLumaAccountDetails", response.data)
            setUserInfo(response.data)
        })
        .catch((err) => {
            console.log("Error logging in", err)
        })       
    }, [])

  return (
    <div>
        {userInfo && <h1>We have user Info</h1>}
    </div>
  )
}

export default MiLumaAccountDetails