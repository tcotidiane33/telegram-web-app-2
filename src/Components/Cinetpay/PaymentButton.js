import React, { useState } from 'react';
import axios from "axios";
import './Payment.css';
const PaymentButton = () => {
  const [paymentResponse, setPaymentResponse] = useState(null);

  const handlePayment = async () => {
    try {
      const siteId = "911501"; // Remplacez par votre Site ID
      const apiKey = "447088687629111c58c3573.70152188"; // Votre API Key
      const transactionId = Math.floor(Math.random() * 100000000).toString();

      const requestData = {
        apikey: apiKey,
        site_id: siteId,
        transaction_id: transactionId,
        amount: 100,
        currency: 'XOF',
        channels: 'ALL',
        description: 'Test de paiement',
        customer_name: "Kondro",
        customer_surname: "Network",
        customer_email: "support@kondronetwork.com",
        customer_phone_number: "0769469844",
        customer_address: "BP ABIDJAN 01",
        customer_city: "Abidjan Cocody",
        customer_country: "CI",
        customer_state: "West Africa",
        customer_zip_code: "00225"
      };

      const config = {
        method: "post",
        url: "https://api-checkout.cinetpay.com/v2/payment",
        headers: {
          "Content-Type": "application/json",
        },
        data: requestData,
      };

      const response = await axios(config);
      setPaymentResponse(response.data); // Ne pas utiliser JSON.stringify ici
    } catch (error) {
      setPaymentResponse({
        code: "ERROR",
        message: "Erreur lors du paiement",
        description: error.message,
      });
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Effectuer le paiement</button>
      {paymentResponse && (
        <div className="payment-receipt">
          <h2>Réception de paiement :</h2>
          <p><strong>Code :</strong> {paymentResponse.code}</p>
          <p><strong>Message :</strong> {paymentResponse.message}</p>
          <p><strong>Description :</strong> {paymentResponse.description}</p>
          {paymentResponse.data && (
            <div>
              <p><strong>Payment Token :</strong> {paymentResponse.data.payment_token}</p>
              <p><strong>Payment URL :</strong> <a href={paymentResponse.data.payment_url} target="_blank" rel="noopener noreferrer">{paymentResponse.data.payment_url}</a></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PaymentButton;
