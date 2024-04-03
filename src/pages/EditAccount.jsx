import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { get, put, axiosDelete } from '../services/authService'

function EditAccount() {
  const [cardInfo, setCardInfo] = useState({
    bankAccount: '',
    banckRouting: '',
    accountHolder: '',
    bankType: '',
    bankName: ''
  });

  const navigate = useNavigate()

  const { accountId } = useParams()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/payments/${accountId}`, cardInfo)
      .then((response) => {
        console.log("Información de la tarjeta:", response.data)
        setCardInfo({
          bankAccount: '',
          banckRouting: '',
          accountHolder: '',
          bankType: '',
          bankName: ''
        });
        navigate('/profileuser')
      })
      .catch((err) => {
        console.log(err)
      })

    
  };

  const handleDelete = () => {
    axiosDelete(`/payments/${accountId}`)
        .then((response) => {
            console.log("Deleted account ===>", response.data)
            navigate('/profileuser')
        })
        .catch((err) => {
            console.log(err)
        })
  }

  useEffect(() => {

    get(`/payments/${accountId}`)
        .then((response) => {
            console.log("Found account ===>", response.data)
            setCardInfo(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

  }, [accountId])



  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 max-w-lg mx-auto">
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
        <button type="submit" className="relative bg-black px-6 py-3 rounded mt-4 overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
            Update
          </span>
        </button>
      </form>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
}

export default EditAccount;