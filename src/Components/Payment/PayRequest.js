import React, { useState } from "react";
import { CINETPAY } from "./cinetpay-nodejs/lib/cinetpay"; // Adjust the path as needed
import "./payRequest.css";
import Nav from '../Nav/Nav';


const API_KEY = '447088687629111c58c3573.70152188';
const SITE_ID = '911501';
// const NOTIFY_URL = 'VOTRE_NOTIFY_URL';



const PayRequest = ({ API_KEY, SITE_ID, NOTIFY_URL }) => {
    const [amount, setAmount] = useState(0);
    
    // const [transactionId, setTransactionId] = useState("");
    const [currency, setCurrency] = useState("CFA");
    const [custom, setCustom] = useState("");
    const [designation, setDesignation] = useState("");

    const handlePayment = async () => {
        try {
            const cinetpay = new CINETPAY(API_KEY, SITE_ID, NOTIFY_URL);
            const paymentResponse = await cinetpay.pay(
                amount,
                // transactionId,
                currency,
                custom,
                designation
            );
            console.log(paymentResponse);
            // Gérer la réponse du paiement ici (redirection, affichage de confirmation, etc.)
        } catch (error) {
            console.error("Erreur de paiement:", error.message);
            // Gérer les erreurs de paiement ici
        }
    };

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
            {/* <div>
                <label>ID de Transaction:</label>
                <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                />
            </div> */}
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
