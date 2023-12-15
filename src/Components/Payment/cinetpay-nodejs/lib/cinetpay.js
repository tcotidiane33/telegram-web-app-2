// import CinetPay from './node_modules/cinetpay-nodejs';
import axios from 'axios';

// const axios = require('axios');
const qs = require('querystring-es3');

const request = axios.create({
    baseURL: 'https://api.cinetpay.com/v1',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' }
});

export class CINETPAY {
    constructor(api_key, site_id, notify_url) {
        if (!api_key) throw new TypeError('api_key is required');
        if (typeof api_key !== 'string') throw new TypeError('api_key is required to be a string');
        if (!site_id) throw new TypeError('site_id is required');
        if (typeof site_id !== 'number') throw new TypeError('site_id is required to be a number');
        if (!notify_url) throw new TypeError('notify_url is required');
        if (typeof notify_url !== 'string') throw new TypeError('notify_url is required to be a string')
        this.api_key = api_key;
        this.site_id = site_id;
        this.notify_url = notify_url;
    }

    async pay(cpm_amount, cpm_trans_id, cpm_currency, cpm_custom, cpm_designation) {
        if (!cpm_amount || typeof cpm_amount != 'number') throw new TypeError('cpm_amount is required, it must be number')
        if (cpm_amount < 100) throw new TypeError('cpm_amount must be greater than or equal to 100')
        if (!cpm_trans_id) throw new TypeError('cpm_trans_id is required')
        if (typeof cpm_currency !== 'string') throw new TypeError('cpm_currency must be string')

        try {
            return await new Promise((resolve, reject) => {

                CINETPAY.setConfig({
                    apikey: this.api_key,
                    site_id: this.site_id,
                    notify_url: this.notify_url
                });

                // Lorsque la signature est générée
                CINETPAY.on('signatureCreated', function (token) {
                    console.log('Token généré: ' + token);
                });

                CINETPAY.on('paymentPending', function (e) {
                    console.log('Code:' + e.code + ' Message::' + e.message);
                });

                CINETPAY.on('error', function (e) {
                    console.log('Error code:' + e.code + ' Message::' + e.message);
                    reject(new Error('Payment error: ' + e.message));
                });

                CINETPAY.on('paymentSuccessfull', function (paymentInfo) {
                    resolve(paymentInfo);
                    // ... (code existant)
                });

                CINETPAY.setSignatureData({
                    amount: cpm_amount,
                    trans_id: cpm_trans_id,
                    currency: cpm_currency ? cpm_currency : 'CFA',
                    designation: cpm_designation ? cpm_designation : '',
                    custom: cpm_custom ? cpm_custom : ''
                });

                CINETPAY.getSignature();
            });
        } catch (err) {
            throw err;
        }
    }

    async checkPayStatus(cpm_trans_id) {
        if (!cpm_trans_id) {
            throw new TypeError('cpm_trans_id is required')
        }
        let requestBody = {
            username: this.api_key,
            password: this.site_id,
            cpm_trans_id: cpm_trans_id
        };
        try {
            return await request.post('/?method=checkPayStatus', qs.stringify(requestBody));
        } catch (err) {
            throw err
        }
    }
}
