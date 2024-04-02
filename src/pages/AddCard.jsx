import React, { useState } from 'react';

function AddCard() {
  const [newCard, setNewCard] = useState({
    accountNumber: '',
    bankRoute: '',
    cardName: '',
    bankType: '',
    bankName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({
      ...newCard,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // implementar la lógica para guardar la tarjeta de banco
    console.log('Formulario enviado:', newCard);
    // Lógica para enviar los datos a tu backend o realizar otras operaciones de guardado
    // Puedes enviar newCard a tu backend utilizando fetch o axios
  };

  return (
    <div>
      <h2>Add payment method:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account number:</label>
          <input type="text" name="accountNumber" value={newCard.accountNumber} onChange={handleChange} />
        </div>
        <div>
          <label>Bank routing:</label>
          <input type="text" name="bankRoute" value={newCard.bankRoute} onChange={handleChange} />
        </div>
        <div>
          <label>Card name:</label>
          <input type="text" name="cardName" value={newCard.cardName} onChange={handleChange} />
        </div>
        <div>
          <label>Bank type:</label>
          <input type="text" name="bankType" value={newCard.bankType} onChange={handleChange} />
        </div>
        <div>
          <label>Bank name:</label>
          <input type="text" name="bankName" value={newCard.bankName} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddCard;
