const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6801831511:AAFrnpNUI-exTl2Em4P0GMjLM-MeFcPlAZ8';
const webAppUrl = 'https://lecompay.netlify.app/';
const webAppUrlShop = 'https://checkout.cinetpay.com/payment/f26ad37d95c1eb1c1a00f5e58596f06246db5764b28deb5e77003b7924d6c8315bdd3dcca8c0d049ab5bb2ccf28463faaf66bccbe20bc9'
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
          [{text: 'Welcome to Cuisto Dingo', web_app: {url:webAppUrl}}]
        ]
      }
    })
    
  }
  if(text === '/pay'){
    await bot.sendMessage(chatId, 'payment <3 :) ', {
      reply_markup: {
        keyboard: [
          [{text: 'Open Cinetpay !', web_app: {url:webAppUrlShop}}]
        ]
      }
    })
  }


});
