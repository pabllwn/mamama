const { Client } = require('discord.js-selfbot-v13');
const mySecret = process.env['DISCORD_TOKEN']; // تأكد من تعيين DISCORD_TOKEN في بيئة التشغيل

const client = new Client();

let flag = false;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`); // تأكيد تسجيل الدخول في الكونسول عند الاتصال بـ Discord
});

client.on("messageCreate", message => {
    // تحقق من معرفات القنوات الصحيحة
    const channel = client.channels.cache.get('1123064802361753632'); // قناة ROB
    const channel1 = client.channels.cache.get('1123064802361753632'); // قناة FIN TATl3b
    const rob = client.channels.cache.get('1123064802361753632'); // قناة CHAT FIN trobi

    if (flag) return;

    // تحقق من الرسالة والمستخدم المحدد
    if (message.content.toLowerCase().replace(/\s+/g, '').startsWith('!withall') &&
        (message.author.id === "826571466815569970")) {
        flag = true;

        // إرسال الأوامر بشكل متتالي مع التأكد من التنفيذ الصحيح
        channel.send('!rob 1076271692424433774').then(() => console.log('Sent !rob command'));
        setTimeout(() => {
            channel1.send('!bal').then(() => console.log('Sent !bal command'));
        }, 4000);
        setTimeout(() => {
            channel1.send('!buy K').then(() => console.log('Sent !buy command'));
        }, 6500);
        setTimeout(() => {
            channel1.send('!with 500').then(() => console.log('Sent !with 500 command'));
        }, 8000);
        setTimeout(() => {
            channel1.send('!cf 100').then(() => console.log('Sent !cf 100 command'));
        }, 9000);
        setTimeout(() => {
            channel1.send('!dep all').then(() => console.log('Sent !dep all command'));
        }, 10000);
        setTimeout(() => {
            rob.send('!dep all').then(() => console.log('Sent !dep all command for rob'));
        }, 12000); // تأكد من أن الزمن هنا أطول إذا لزم الأمر
    }
}); 
client.login(mySecret).catch(console.error); // تسجيل الدخول والتعامل مع الأخطاء إذا حدثت 
