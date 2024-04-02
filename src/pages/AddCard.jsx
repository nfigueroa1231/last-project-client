import React, { useState } from 'react';

function AddCard() {
  const [cardInfo, setCardInfo] = useState({
    accountNumber: '',
    bankRoute: '',
    cardName: '',
    bankType: '',
    bankName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu servidor o realizar alguna otra acción para guardar la información
    console.log('Información de la tarjeta:', cardInfo);
    // Limpia los campos después de enviar el formulario
    setCardInfo({
      accountNumber: '',
      bankRoute: '',
      cardName: '',
      bankType: '',
      bankName: ''
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Card Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="accountNumber" className="block text-gray-700 font-semibold mb-2">Account Number:</label>
          <input type="text" id="accountNumber" name="accountNumber" value={cardInfo.accountNumber} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="bankRoute" className="block text-gray-700 font-semibold mb-2">Bank Route:</label>
          <input type="text" id="bankRoute" name="bankRoute" value={cardInfo.bankRoute} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-gray-700 font-semibold mb-2">Card Name:</label>
          <input type="text" id="cardName" name="cardName" value={cardInfo.cardName} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="bankType" className="block text-gray-700 font-semibold mb-2">Bank Type:</label>
          <input type="text" id="bankType" name="bankType" value={cardInfo.bankType} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="bankName" className="block text-gray-700 font-semibold mb-2">Bank Name:</label>
          <input type="text" id="bankName" name="bankName" value={cardInfo.bankName} onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
        </div>
        <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Save</button> {/* Botón simple estilizado de color negro */}
      </form>
    </div>
  );
}

export default AddCard;
