const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#" ;
const fs = require('fs');


const ask = Object.values(JSON.parse(fs.readFileSync("./ask.json", "utf8")));

var chatListen;
client.on('message', message => {
  if (message.author.id === client.user.id) return
   const bbb = ask[Math.floor(Math.random() * ask.length)];
   const bb1 = bbb
    const input = message.content;
    if (input.toLowerCase().split(' ')[0] == prefix + "لعب"){
  message.channel.send({embed: {
    title: "لعب",
    description: bb1.swal,
       "thumbnail": {
    "url": message.author.displayAvatarURL
  },
      "footer": {
        "text": "DARK KNIGHT ⚘"
      },
  }}).then(() => {
        chatListen = true;
      })
    }Math.round(Math.random() * 5000);
  const word = bb1.jwab
var isCorrect
ask.forEach(bb1 => {
  if (message.content === bb1.jwab) {
var embed = new Discord.RichEmbed()
.setTitle("إجابة صحيحه")
.setFooter(message.author.tag)
.setColor("RANDOM")
message.channel.send(embed)
    return isCorrect = true
  } else {
    isCorrect = false
  }
})
});

client.login(process.env.BOT_TOKEN);







//end the game
