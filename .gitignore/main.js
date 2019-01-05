const Discord = require("discord.js");
const bot = new Discord.Client();

//Commande Avatar et activités du bot

bot.on('ready', function () {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Représente La Team Fraternel',
            type: "STREAMING",
            url: "https://twitch.tv/spykatra"
        }
    });
});

bot.on('message', function (message){
    if (message.content === 'Facebook') {
        message.channel.send('**Lache un j´aime, https://www.facebook.com/lateamfraternels**')
    }
})

bot.login('NTI4Njg0NzQwMjQ1NzE3MDAy.Dw64rQ.gDRbMJiXMADmmDyyd-NP0ZfBF9Y');
