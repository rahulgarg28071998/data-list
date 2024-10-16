// src/components/AddCardModal.js

import React, { useState } from 'react';
import './AddCardModal.css';

const AddCardModal = ({ isOpen, onClose }) => {
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle card submission here
    console.log({
      cardholder,
      cardNumber,
      expiryDate,
      cvc,
      saveCard,
    });
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Credit Card</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Cardholder
            <input
              type="text"
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
              required
            />
          </label>
          <label>
            Card Number
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            MM / YY
            <input
              type="text"
              value={expiryDate}
              placeholder="MM / YY"
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </label>
          <label>
            CVC
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={saveCard}
              onChange={() => setSaveCard(!saveCard)}
            />
            Save Card
          </label>
          <button type="submit">Save</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddCardModal;
