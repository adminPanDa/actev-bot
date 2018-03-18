const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const prefix= '#';
var UserBlocked = new Set(); // create a new set to save users id.

var aoasm =[
    {q:"ما عاصمة **افغانستان**",a:""},
    {q:"ما عاصمة ** البانيا**",a:"كابول"},
    {q:"ما عاصمة **الجزائر **",a:"تيرانا"},
    {q:"ما عاصمة ** **",a:"الجزائر"},
    {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
    {q:"ما عاصمة **انجولا**",a:"لواندا"},
    {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
    {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
    {q:"ما عاصمة **ارمينيا**",a:""},
    {q:"ما عاصمة ** **",a:"يريفان"},
    {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
    {q:"ما عاصمة **النمسا**",a:"فيينا"},
    {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
    {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
    {q:"ما عاصمة **البحرين**",a:"المنامة"},
    {q:"ما عاصمة ** بنجلاديش**",a:"دكـا"},
    {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
    {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
    {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
    {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
    {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
    {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
    {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
    {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
    {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
    {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
    {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
    {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
    {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
    {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
    {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
    {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
    {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
    {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
    {q:"ما عاصمة **تشاد **",a:"نجامينا"},
    {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
    {q:"ما عاصمة **الصين **",a:"بكين"},
    {q:"ما عاصمة **جزر الُقمـــر **",a:""},
    {q:"ما عاصمة ** **",a:"مورونى"},
    {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
    {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
    {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
    {q:"ما عاصمة ** كوبا**",a:"هافانا"},
    {q:"ما عاصمة ** قبرص**",a:" "},
    {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
    {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
    {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
    {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
    {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
    {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
   ];
bot.on("message", async message => {
    if(message.content == prefix+"عاصمة"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('سؤال عواصم')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.q);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== bot.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == bot.user.id) return;
           if(result.content == "عاصمة") return
           if(result.content == ask.a){
             var embedx = new Discord.RichEmbed()
             .setTitle(':x:خطاء')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة خاطئة`);
             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {
               
                message.channel.sendEmbed(embedx);
           }
     });
  }
});



//number



var UserBlocked = new Set(); // cremte m new set to smve users id.

var num =[
    {n:"999",m:"999"},
    {n:"1234",m:"1234"},
    {n:"42424",m:"42424"},
    {n:"903342",m:"903342"},
    {n:"60392",m:"60392"},
    {n:"3234436",m:"3234436"},
    {n:"87654",m:"87654"},
    {n:"6756345",m:"6756345"},

   ];
   bot.on("message", async message => {
       if(message.content == prefix+"ارقام"){
           if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
           UserBlocked.add(message.guild.id)
           var ask = num[Math.floor(Math.random() * num.length)];
           let embed = new Discord.RichEmbed()
           .setTitle('سؤال ارقام')
           .setAuthor(message.author.username, message.author.avatarURL)
           .setColor("RANDOM")
           .setDescription(ask.n);
           message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
           const msgs = await message.channel.awaitMessages(msg => msg.author.id !== bot.user.id ,{maxMatches:1,time:10000});
               UserBlocked.delete(message.guild.id)
           msgs.forEach(result => {
              if(result.author.id == bot.user.id) return;
              if(result.content == "اراقام") return
              if(result.content == ask.m){
                var embedx = new Discord.RichEmbed()
                .setTitle(':x:خطاء')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** الإجابة خاطئة`);
                let embeds = new Discord.RichEmbed()
                .setTitle(':white_check_mark: اجابة صحيحة')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                   message.channel.sendEmbed(embeds);                return;
              } else {
                   message.channel.sendEmbed(embedx);
              }
        });
     }
   });

//فكك

var fkk =[
    {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
    {f:"فكك باص",k:"ب ا ص"},
    {f:"فكك عربة ",k:"ع ر ب ة"},
    {f:"فكك سيارة",k:"س ي ا ر ة"},
    {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
    {f:"فكك العنود ",k:"ا ل ع ن و د"},
    {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
    {f:"فكك دحوم",k:"د ح و م"},
    {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
    {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
    {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
    {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
    {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
    {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
    {f:"فكك زنديق  ",k:"ز ن د ي ق"},
    {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
   ];


   bot.on("message", async message => {
       if(message.content == prefix+"فكك"){
           if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
           UserBlocked.add(message.guild.id)
           var ask = fkk[Math.floor(Math.random() * fkk.length)];
           let embed = new Discord.RichEmbed()
           .setTitle('سؤال فكك')
           .setAuthor(message.author.username, message.author.avatarURL)
           .setColor("RANDOM")
           .setDescription(ask.f);
           message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
           const msgs = await message.channel.awaitMessages(msg => msg.author.id !== bot.user.id ,{maxMatches:1,time:10000});
               UserBlocked.delete(message.guild.id)
           msgs.forEach(result => {
              if(result.author.id == bot.user.id) return;
              if(result.content == "فكك") return
              if(result.content == ask.k){
                var embedx = new Discord.RichEmbed()
                .setTitle(':x:خطاء')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** الإجابة خاطئة`);
                let embeds = new Discord.RichEmbed()
                .setTitle(':white_check_mark: اجابة صحيحة')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                   message.channel.sendEmbed(embeds);                return;
              } else {
                   message.channel.sendEmbed(embedx);
              }
        });
     }
   });


bot.login(process.env.BOT_TOKEN);







//end the game
