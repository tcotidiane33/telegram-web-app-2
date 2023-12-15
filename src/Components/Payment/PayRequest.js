import React, { useState, useEffect } from "react";
import { CINETPAY } from "./cinetpay-nodejs/lib/cinetpay"; // Assurez-vous que le chemin est correct
import "./payRequest.css";
import Nav from '../Nav/Nav';
import { cartItems } from "../../db/productSignals";

const PayRequest = ({ API_KEY, SITE_ID }) => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        // Fonction pour calculer le prix total
        const calculateTotalPrice = () => {
            return cartItems.length > 0
                ? cartItems.map((checkItem) => checkItem.price * checkItem.quantity).reduce((previous, next) => previous + next)
                : 0;
        };

        // Met à jour le prix total lorsque le panier change
        setAmount(calculateTotalPrice());
    }, [cartItems]);

    //const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("XOF");
    const [custom, setCustom] = useState("");
    const [designation, setDesignation] = useState("");

    const handlePayment = async () => {
        try {
            const cp = new CINETPAY('447088687629111c58c3573.70152188', 911501, 'http://localhost:3001/notify');
    
            const transactionId = generateTransactionId();
    
            // Convertissez amount en nombre avant de l'utiliser dans la méthode pay
            const numericAmount = parseFloat(amount);
    
            const response = await cp.pay(
                numericAmount,  // Utilisez le montant converti
                transactionId,
                'XOF',
                custom,
                designation
            );
    
            console.log("Paiement réussi :", response);

            // Gérez la redirection ou la confirmation ici

        } catch (error) {
            console.error("Erreur de paiement :", error.message);
            // Gérez les erreurs de paiement ici
        }
    };
    const generateTransactionId = () => {
        // Génère un nombre aléatoire, le multiplie par une valeur pour augmenter la longueur, et le convertit en chaîne
        const randomId = Math.random().toString(36).substr(2, 10);

        // Vous pouvez également ajouter un préfixe pour indiquer qu'il s'agit d'un ID de transaction
        const transactionId = `TX-${randomId}`;

        return transactionId;
    };

    // Exemple d'utilisation
    const transactionId = generateTransactionId();
    console.log(transactionId);


    return (
        <div>
            <Nav />
            <h1>Formulaire de Paiement CinetPay</h1>
            <div>
                <label>Montant :</label>
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} />

            </div>
            <div>
                <label>Devise :</label>
                <input
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />
            </div>
            <div>
                <label>Personnalisé :</label>
                <input
                    type="text"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                />
            </div>
            <div>
                <label>Désignation :</label>
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
