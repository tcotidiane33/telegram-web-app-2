const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Choisissez un port approprié

app.use(bodyParser.json());

app.post('/notify', (req, res) => {
    // Traitez ici les données de notification de CinetPay
    const notificationData = req.body;
    console.log('Notification reçue :', notificationData);

    // Répondez à CinetPay avec un statut 200 pour indiquer que la notification a été traitée avec succès
    res.status(200).send('Notification reçue avec succès');
});

app.listen(port, () => {
    console.log(`Serveur d'écoute des notifications en cours sur le port ${port}`);
});
