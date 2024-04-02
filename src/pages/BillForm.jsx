// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { post } from '../services/authService'
// // import 'bootstrap/dist/css/bootstrap.min.css';

// function BillForm() {
//   const [newAccount, setNewAccount] = useState({
//     company: "",
//     name: "",
//     // adress: "",
//     // phone: 0,
//     accountNumber: "",
//     // amount: 0, 
//     // dueDate: ""
//   });

//   const navigate = useNavigate()

//   const handleTextChange = (e) => {
//     const { name, value } = e.target;
//     setNewAccount((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleNumberChange = (e) => {
//     const { name, value } = e.target;
//     setNewAccount((prev) => ({ ...prev, [name]: Number(value)}));
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(newAccount);
    
//     post('/account', newAccount)
//       .then((response) => {
//         console.log("This is the new account", response.data)
//         navigate('/account')
//         setNewAccount({
//           company: "",
//           name: "",
//           adress: "",
//           phone: 0,
//           accountNumber: "",
//           amount: 0, 
//           dueDate: ""
//         })
//       })
//       .catch((err) => {
//         consol.log("Error creating account", err)
//         setNewAccount({
//           company: "",
//           name: "",
//           adress: "",
//           phone: 0,
//           accountNumber: "",
//           amount: 0, 
//           dueDate: ""
//         })
//       })
//   };

//   return (
//     <div className="container">
//       <h1>Account Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input type="text" className="form-control" id="name" name="name" value={newAccount.name} onChange={handleTextChange} placeholder="Enter your name" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="company" className="form-label">Company Name</label>
//           <input type="text" className="form-control" id="company" name="company" value={newAccount.company} onChange={handleTextChange} placeholder="Enter the company name" />
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default BillForm;


