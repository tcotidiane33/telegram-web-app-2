import React, { useState } from "react";
import { CINETPAY } from "./cinetpay-nodejs/lib/cinetpay"; // Adjust the path as needed
import "./payRequest.css";
import Nav from '../Nav/Nav';

const PayRequest = () => {
    
const setAmount () =
    

    return (
        <div>
            <Nav />
            <h1>Formulaire de Paiement CinetPay</h1>
            <div>
                <label>Montant:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <label>Devise:</label>
                <input
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />
            </div>
            <div>
                <label>Personnalisé:</label>
                <input
                    type="text"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                />
            </div>
            <div>
                <label>Désignation:</label>
                <input
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                />
            </div>
            <button onClick={handlePayment}>Effectuer le Paiement</button>
        </div>
    );
};
export default PayRequest;
