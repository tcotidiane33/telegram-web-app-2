const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6801831511:AAFrnpNUI-exTl2Em4P0GMjLM-MeFcPlAZ8';
const webAppUrl = 'https://ecopayci.netlify.app/';
const webAppUrlOrder = 'https://ecopayci.netlify.app/order';
const webAppUrlPayment = 'https://ecopayci.netlify.app/paymentForm';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;


  if(text === '/start') {
    await bot.sendMessage(chatId, 'Hello <3 :) ', {
      reply_markup: {
        keyboard: [
          [{text: 'Welcome Chekete !', web_app: {url:webAppUrl}}]
        ]
      }
    })
    
  }
  if(text === '/orders' && text === '/carts') {
    await bot.sendMessage(chatId, 'Carts <3 :) ', {
      reply_markup: {
        keyboard: [
          [{text: 'Your Order !', web_app: {url:webAppUrlOrder}}]
        ]
      }
    })
    
  }
  if(text === '/pay'){
    await bot.sendMessage(chatId, 'payment <3 :) ', {
      reply_markup: {
        keyboard: [
          [{text: 'Got To Pay !', web_app: {url:webAppUrlPayment}}]
        ]
      }
    })
  }


});
