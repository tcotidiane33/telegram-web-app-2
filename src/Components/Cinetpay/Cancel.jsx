import React from 'react';
import './PaymentStatus.css';

const RefusedStatus = () => {
  return (
    <div className="payment-status refused">
      <h2>Paiement Refusé</h2>
      <p>Votre paiement a échoué.</p>
    </div>
  );
};

export default RefusedStatus;
