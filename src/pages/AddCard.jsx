import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../services/authService'

function AddCard({ setAdding }) {
  const [cardInfo, setCardInfo] = useState({
    bankAccount: '',
    banckRouting: '',
    accountHolder: '',
    bankType: '',
    bankName: ''
  });

  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/payments', cardInfo)
      .then((response) => {
        console.log("Información de la tarjeta:", response.data)
        setCardInfo({
          bankAccount: '',
          banckRouting: '',
          accountHolder: '',
          bankType: '',
          bankName: ''
        });
        setAdding(false)
        navigate('/profileuser')
      })
      .catch((err) => {
        console.log(err)
      })


  };

  return (
    <div className="bg-white mb-24 shadow-md rounded-lg overflow-hidden p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Bank Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="accountNumber" className="block text-gray-700 font-semibold mb-2">Account Number:</label>
          <input type="text" id="accountNumber" name="bankAccount" value={cardInfo.bankAccount} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="bankRoute" className="block text-gray-700 font-semibold mb-2">Bank Route:</label>
          <input type="text" id="bankRoute" name="banckRouting" value={cardInfo.banckRouting} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-gray-700 font-semibold mb-2">Account Holder:</label>
          <input type="text" id="cardName" name="accountHolder" value={cardInfo.accountHolder} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="bankType" className="block text-gray-700 font-semibold mb-2">Bank Type:</label>
          <input type="text" id="bankType" name="bankType" value={cardInfo.bankType} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="bankName" className="block text-gray-700 font-semibold mb-2">Bank Name:</label>
          <input type="text" id="bankName" name="bankName" value={cardInfo.bankName} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="flex justify-between mt-4">
          <button type="submit" className="relative bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded overflow-hidden">
            <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
              Save
            </span>
          </button>
          <button onClick={() => setAdding(false)} className="relative bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded overflow-hidden ml-4">
            <span className="w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
              Cancel
            </span>
          </button>
        </div>


      </form>

    </div>
  );
}

export default AddCard;


