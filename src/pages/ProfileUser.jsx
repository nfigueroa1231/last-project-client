import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

const ProfileUser = () => {

    const { user } = useContext(AuthContext)


  return (
    <div>
        <h1>Profile</h1>

        {
            user && 
            <>

                <h2>Welcome {user.name} {user.lastName}!</h2>
         
            </>
        }
    
    
    </div>
  )
}

export default ProfileUser



// import { useEffect, useState } from "react";

// const [userInfo, setUserInfo] = useState(null)

// function ProfileUser() {

//     // useEffect(() => {    API CALL
//     //     get('/user')
//     //         .then((response) => {
//     //             console.log("Here is the user information previously submitted", response.data)
//     //             setUserInfo(response.data)
//     //         })
//     //         .catch((err) => {
//     //             console.log("Error getting previous user information", err)
//     //         })
//     // }, []);

//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       post("/auth/signup", newUser)
//         .then((response) => {
//           storeToken(response.data.authToken);
//           authenticateUser();
//           navigate("/dashboard");
//         })
//         .catch((err) => {
//           setErrorMessage(err.response.data.message);
//           setUserInfo({
//             email: "",
//             password: "",
//             name: "",
//             lastName: ""
//           });
//         });
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit} className="">
//                 <div className="mb-6">
//                     <span className="text-sm text-gray-300">
//                         Fill out the info you want to update!
//                     </span>
//                     <h4 className="text-2xl font-semibold text-gray-700">
//                         Create your account
//                     </h4>
//                 </div>
//                 <div className="flex flex-wrap mb-4 -mx-2">
//                     <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
//                         <input
//                             className="py-2.5 px-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none"
//                             type="text"
//                             placeholder="First Name"
//                             name="name"
//                             value={userInfo.name}
//                             onChange={handleTextChange}
//                         />
//                     </div>
//                     <div className="w-full px-2 lg:w-1/2">
//                         <input
//                             className="py-2.5 px-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none"
//                             type="text"
//                             placeholder="Last Name"
//                             name="lastName"
//                             value={userInfo.lastName}
//                             onChange={handleTextChange}
//                         />
//                     </div>
//                 </div>
//                 <input
//                     className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none"
//                     type="email"
//                     placeholder="Email address"
//                     name="email"
//                     value={userInfo.email}
//                     onChange={handleTextChange}
//                 />
//                 <input
//                     className="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none"
//                     type="password"
//                     placeholder="Enter your password"
//                     name="password"
//                     onChange={handleTextChange}
//                 />
//                 <Button title={"Sign Up"} type={"submit"} />
//             </form>
//         </>
//     );
// }

// export default ProfileUser;
