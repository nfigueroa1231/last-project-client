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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {user && (
        <>
          <h2 className="text-2xl mb-2">Welcome, <span className="font-bold">{user.name} {user.lastName}</span>!</h2>
          <p className="text-gray-700 mb-2">Email: <span className="text-gray-500">{user.email}</span></p>

          <button onClick={() => setAdding(true)} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 overflow-hidden">
            <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
              Add Payment Information
            </span>
          </button>

          {adding && (
            <div className="mt-4">
              <AddCard setAdding={setAdding} />
            </div>
          )}

          {paymentMethods.length > 0 && (
            <div className="mt-4">
              {paymentMethods.map((bank) => (
                <div key={bank._id} className="border p-4 mb-4">
                  <h2 className="text-3xl font-bold mb-4">{bank.accountHolder}</h2>
                  <p className="text-gray-700">Bank Number: {bank.bankA}</p>
                  <p className="text-gray-700">Bank Name: {bank.bankName}</p>
                  <p className="text-gray-700">Bank Routing: {bank.banckRouting}</p>
                  <p className="text-gray-700">Account Holder: {bank.accountHolder}</p>
                  <p className="text-gray-700">Bank Type: {bank.bankType}</p>

                  <button onClick={() => editAccount(bank._id)} className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4 overflow-hidden">
                    <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
                      Edit Account
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProfileUser;