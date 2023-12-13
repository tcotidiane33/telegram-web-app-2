// Payment.js

import Order from "./Order";
import { getData } from "../db/db";

const cinetpay = require("cinetpay-nodejs");

const API_KEY = '447088687629111c58c3573.70152188';
const SITE_ID = '911501';
const NOTIFY_URL = 'VOTRE_NOTIFY_URL';

const orderItems = getData();
const order = new Order(orderItems);

const totalAmount = order.calculateTotal();
const transactionId = order.generateTransactionId();

const cp = new cinetpay(API_KEY, SITE_ID, NOTIFY_URL);

cp.pay(totalAmount, transactionId, 'XOF', 'Custom Data', 'Order Payment')
    .then(response => {
        console.log('Payment successful:', response);
        // Mettez à jour la      base de données ou effectuez d'autres actions nécessaires
    })
    .catch(err => {
        console.error('Payment error:', err);
        // Affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions nécessaires
    });
