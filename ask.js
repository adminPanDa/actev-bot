const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const prefix= '#';
var UserBlocked = new Set(), // create a new set to save users id.
    Users = [];

var aoasm =[{q:"ما عاصمة **افغانستان**",a:"1",Users:null},{q:"من عمك؟",a:"انت",Users:null},{q:"من هو PO?",a:"PO",Users:null}];

bot.on("message", async message => {

if(message.content == prefix+"لعب"){

        UserBlocked.add(message.author.id)

        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];

        message.channel.send(ask.q).then(msg=> msg.delete(20000))

        const msgs = await message.channel.awaitMessages(msg => {

if(msg.content.includes(ask.a)){

        message.channel.send("لقد ربحت ...");

      } else {

        message.channel.send("لقد خسرت ...");

      }

        } ,{maxMatches:1,time:10000});

      UserBlocked.delete(message.author.id)

}
});

//end the game

bot.login(process.env.BOT_TOKEN);







//end the game
