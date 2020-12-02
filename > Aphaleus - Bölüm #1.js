const Discord = require('discord.js');
const client = new Discord.Client();

var mineflayer = require("mineflayer");


var bot = mineflayer.createBot({
    host: "SUNUCU IP",
    port: 25565, // Elinde port yoksa dokunma.
    username: "BOT İSMİ",
    version: "1.8", // Aynı şekilde "1.16.2" gibi yazabilirsiniz diğer sürümleri.
    keepAlive: true,
    colorsEnabled: false,
  });


client.on('ready', () => {
    console.log(`Bağlandı!`)
    console.log(`Username: ${client.user.tag}`);
});

bot.on('chat', function(username, message) {
    if (username === bot.username) return;
    client.channels.cache.get("DISCORD KANAL ID").send(`<${username}> ${message}`)
});

client.on("message", function(message) {
});

client.login('TOKEN');
