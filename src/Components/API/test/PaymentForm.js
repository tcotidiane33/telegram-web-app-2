import React, { useState } from "react";
import { Cinetpay } from "../cinetpay"; // Assurez-vous que le chemin est correct
import Nav from "../../Nav/Nav";
import { calculateTotalPrice } from "../../../db/productSignals";

const { PaymentConfig, CinetPayConfig } = require('../models');
const PaymentForm = () => {
    const [amount, setAmount] = useState(calculateTotalPrice.value);
    console.log(calculateTotalPrice.value);
    const [currency, setCurrency] = useState("XOF");
    const [channels, setChannels] = useState("ALL");
    const [description, setDescription] = useState("Test de paiement");




    const handleSubmit = async (e) => {
        e.preventDefault();

        // Générez un ID de transaction unique
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        const uniqId = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

        // Créez l'objet de configuration du paiement à partir des valeurs du formulaire
        const paymentConfig = {
            transaction_id: uniqId,
            amount,
            currency,
            channels,
            description,
        };

        try {
            // Initialisez votre instance Cinetpay avec les informations de configuration
            const cp = new Cinetpay({
                apikey: '447088687629111c58c3573.70152188',
                site_id: 911501,
                notify_url: 'https://google.com/notify',
                return_url: 'https://youtube.com/return',
                lang: 'fr',
            });

            // Utilisez la méthode makePayment de Cinetpay pour effectuer le paiement
            const response = await cp.makePayment(paymentConfig).then((response) => console.log(response))
                .catch((err) => console.log(err));

            // Gérez la réponse du paiement, redirigez ou effectuez d'autres actions si nécessaire
            console.log("Paiement réussi :", response);
        } catch (error) {
            // Gérez les erreurs de paiement ici
            console.error("Erreur de paiement :", error.message);
        }
    };

    return (
        <>
            <Nav />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Montant:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        readOnly
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
                    <label>Canal:</label>
                    <input
                        type="text"
                        value={channels}
                        onChange={(e) => setChannels(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Effectuer le Paiement</button>
            </form>
        </>
    );
};

export default PaymentForm;
