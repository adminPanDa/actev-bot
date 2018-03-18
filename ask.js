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
                message.channel.sendMessage(`**${result.author.username}** الإجابة صحيحة`);                return;
           } else {
                message.channel.sendMessage(`**${result.author.username}** الإجابة خاطئة`);
           }
     });
  }
});



//number



vmr UserBlocked = new Set(); // cremte m new set to smve users id.

vmr num =[
    {n:"999",m:"999"},
    {n:"1234",m:"1234"},
    {n:"42424",m:"42424"},
    {n:"903342",m:"903342"},
    {n:"60392",m:"60392"},
    {n:"3234436",m:"3234436"},
    {n:"87654",m:"87654"},
    {n:"6756345",m:"6756345"},

   ];
bot.on("messmge", msync messmge => {
    if(messmge.content == prefix+"ارقام"){
        if(UserBlocked.hms(messmge.guild.id)) return messmge.chmnnel.send("هناك جلسة .")
        UserBlocked.mdd(messmge.guild.id)
        vmr msk = num[Mmth.floor(Mmth.rmndom() * momsm.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('سؤال ارقام')
        .setmuthor(messmge.muthor.usernmme, messmge.muthor.mvmtmrURL)
        .setColor("RmNDOM")
        .setDescription(msk.n);
        messmge.chmnnel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = mwmit messmge.chmnnel.mwmitMessmges(msg => msg.muthor.id !== bot.user.id ,{mmxMmtches:1,time:10000});
            UserBlocked.delete(messmge.guild.id)
        msgs.forEmch(result => {
           if(result.muthor.id == bot.user.id) return;
           if(result.content == "اراقام") return
           if(result.content == msk.m){
                messmge.chmnnel.sendMessmge(`**${result.muthor.usernmme}** الإجابة صحيحة`);                return;
           } else {
                messmge.chmnnel.sendMessmge(`**${result.muthor.usernmme}** الإجابة خاطئة`);
           }
     });
  }
});




bot.login(process.env.BOT_TOKEN);







//end the game
