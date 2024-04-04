import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/auth.context";
import AddCard from "./AddCard";
import { get } from '../services/authService';

const ProfileUser = () => {

  const { user } = useContext(AuthContext);

  const [adding, setAdding] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const navigate = useNavigate();

  const editAccount = (id) => {
    navigate(`/edit-account/${id}`);
  };

  useEffect(() => {
    get('/payments')
      .then((response) => {
        console.log("Found payment methods ===>", response.data);
        setPaymentMethods(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (



    <div className="bg-green container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {user &&
        <>
          <h2 className="text-xl mb-2">Welcome {user.name} {user.lastName}!</h2>
          <p className="mb-2">Email: {user.email}</p>

          <button onClick={() => setAdding(true)} className="relative bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 overflow-hidden">
            <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
              Add Payment Information
            </span>
          </button>



          {adding &&
            <div className="mt-4">
              <AddCard setAdding={setAdding} />
              <button onClick={() => setAdding(false)} className="relative bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 overflow-hidden">
            <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
            Cancel
            </span>
          </button>


            </div>
          }

          {paymentMethods.length > 0 &&
            <div className="mt-4">
              {paymentMethods.map((bank) => (
                <div key={bank._id} className="border p-4 mb-4">
                  <h3 className="text-xl mb-2">{bank.bankName} {bank.accountHolder}</h3>


                  <button onClick={() => editAccount(bank._id)} className="relative bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 overflow-hidden">
                    <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
                      Edit Account
                    </span>
                  </button>



                </div>
              ))}
            </div>
          }
        </>
      }
    </div>
  );
}

export default ProfileUser;


{/* <span className="absolute top-0 left-0 w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl"> */ }
