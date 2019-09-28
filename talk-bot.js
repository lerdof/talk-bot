const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
});

client.on('message', msg => {
  if (msg.content === 'احمد') {
    msg.reply('تاج راسك');
  }
});


client.login('NjI3MzkzNjY3MDg2Mjg2ODY4.XY7__w.pyHheTBezVYur1Qbshwyo6_Wwos');
