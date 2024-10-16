// src/components/PaymentMethods.js

import React, { useState } from 'react';
import './PaymentMethods.css';
import AddCardModal from './AddCardModal';

const PaymentMethods = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const creditCards = [
    {
      number: '**** **** **** 4381',
      autopayment: true,
      default: true,
    },
    {
      number: '**** **** **** 5632',
      autopayment: true,
      default: false,
    },
  ];

  const invoices = [
    { id: 245212, description: 'Subscription Renewal', date: '20.04.2022', status: 'Pay Now' },
    { id: 262156, description: 'Subscription Renewal', date: '20.04.2022', status: 'Paid' },
    { id: 256255, description: '250 Credits', date: '20.04.2022', status: 'Paid' },
    { id: 267893, description: 'Subscription Renewal', date: '20.04.2022', status: 'Canceled' },
  ];

  return (
    <div className="payment-methods-container">
      <h2>Payment Methods</h2>
      <p>
        Here you can manage notification and phasellus et lectus at dui, lacus, fusce aliquam sagittis netus.
      </p>

      <div className="credit-cards">
        <h3>Credit Cards</h3>
        {creditCards.map((card, index) => (
          <div key={index} className="credit-card">
            <span>{card.number}</span>
            <div className="credit-card-controls">
              <label>
                Autopayment
                <input type="checkbox" checked={card.autopayment} readOnly />
              </label>
              {card.default && <span className="default-label">Default Payment Method</span>}
              <button className="delete-button">🗑️</button>
            </div>
          </div>
        ))}
        <button className="add-card-button" onClick={() => setIsModalOpen(true)}>+ Add New Credit Card</button>
      </div>

      <div className="invoices">
        <h3>Invoices</h3>
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.id}</td>
                <td>{invoice.description}</td>
                <td>{invoice.date}</td>
                <td>
                  {invoice.status === 'Pay Now' ? (
                    <button className="pay-now-button">{invoice.status}</button>
                  ) : (
                    invoice.status
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddCardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PaymentMethods;
