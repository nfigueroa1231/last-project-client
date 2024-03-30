import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth.context'
import { post } from '../services/authService'

const MiLumaAccountDetails = () => {

  const [userInfo, setUserInfo] = useState(null)
  const { miLumaToken } = useContext(AuthContext)

  useEffect(() => {
    post('/mi-luma/account-info', {token: miLumaToken})
    .then((response) => {
        console.log("this is the response, MiLumaAccountDetails", response.data.data)
        setUserInfo(response.data.data)

    })
    .catch((err) => {
        console.log("Error logging in", err)
    })       
  }, [])

  // UI De Mi Luma 
  return (
    <div>
        {userInfo && <h1>We have user Info: {userInfo.username}</h1>}
        {userInfo && <h1>Accounts: {userInfo.accountIds[0]}</h1>}
    </div>
  )
}

export default MiLumaAccountDetails