
// import { useState } from 'react'
// import { post } from '../services/authService'

// const MiAcueductosLogin = () => {

//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     })

//     const handleTextChange = (e) => {
//         const { name, value } = e.target;
//         setUser((prev) => ({ ...prev, [name]: value }));
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault()
//         post('/mi-luma/acueductos', user)
//         .then((response) => {
//             console.log("this is the login response", response.data)
//             // setUserInfo(response.data)
//             // console.log("this is the token", response.data.data.token)
//             // storeMiLumaToken(response.data.data.token)
//             // navigate('/luma-details')
//         })
//         .catch((err) => {
//             console.log("Error logging in", err)
//         })
//       }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>

//             <label>
//                 Email
//                 <input type='text' name='email' value={user.email} onChange={handleTextChange} />
//             </label>
//             <label>
//                 Password
//                 <input type='text' name='password' value={user.password} onChange={handleTextChange} />
//             </label>

//             <button type='submit'>Submit</button>

//         </form>
//     </div>
//   )
// }

// export default MiAcueductosLogin
