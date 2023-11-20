import React from 'react';
import './PaymentStatus.css';

const AcceptedStatus = () => {
  return (
    <div className="payment-status accepted">
      <h2>Paiement Accepté</h2>
      <p>Votre paiement a été effectué avec succès.</p>
    </div>
  );
};

export default AcceptedStatus;
