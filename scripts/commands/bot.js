const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻" , "আমি এখন বস নাঈম চৌধুরী র সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার বস নাঈম চৌধুরী কে একটা জি এফ দাও-😽🫶🌺","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানি রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার বস নাঈম চৌধুরী'র হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস নাঈম চৌধুরী'র পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস নাঈম চৌধুরী'র  জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস নাঈম চৌধুরী'র ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/mdnayem.khandaker.71?mibextid=ZbWKwL","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস নাঈম চৌধুরী কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস নাঈম চৌধুরী কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস নাঈম চৌধুরী ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস নাঈম চৌধুরী'র সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস নাঈম চৌধুরী এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস নাঈম চৌধুরী'র বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস নাঈম চৌধুরী মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস নাঈম চৌধুরী কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস নাঈম চৌধুরী'র মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস নাঈম চৌধুরী'র সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস নাঈম চৌধুরী'র এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "বস নাঈম চৌধুরী কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস নাঈম চৌধুরী'র সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি যামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস নাঈম চৌধুরী কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস নাঈম চৌধুরী আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.বলদ" , "বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মে হলে নাইম বসের সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার NAYEM জানু এর সাথে ব্যাস্ত আসি😋" , "জানু হাঙ্গা করবা🙈" , "আমি গরীব r সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "তোর বাড়ি কি মাল দিপ গ্রাম😵‍💫" , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "সজীব কই ওর কাছে গাজা. ওর কাছ থেকে নেও " , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "𝐁𝐎𝐒𝐒 𝐍𝐀𝐘𝐄𝐌 কে 𝐊𝐈𝐒𝐒 দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "এ বেডা তোগো GC এর C E O বাপ্পি কই😌" , "তোর বাড়ি কি উগান্ডা এখানে হুম" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি NAYEM BOSS এর সাথে ব্যাস্ত আসি😒"  , "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 𝐨𝐢 𝐭𝐚  😑🥺" , "amr Jan lagbe,Tumi ki single aso?", "𝙏𝙪𝙢𝙖𝙧 BF 𝙣𝙖𝙞 ,𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤?😂😂😂" , "তোর বাড়ি কই উগান্ডা ","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলো নাঈম বস 🥺🤗"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("_আগে brush করে আই তারপর কিস দিস_!😼😒", threadID);
   };
   
    if ((event.body.toLowerCase() =="🙋‍♂️" ) || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("_NAYEM BOSS ,Group এ হাত মারতে নিষেধ করেছে😵 ", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. এগুলা নাহ বলে  𝐍𝐀𝐘𝐄𝐌 𝐁𝐎𝐒𝐒 এর সাথে প্রেম করো 😒", threadID);
   };

   if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵🥵")) {
     return api.sendMessage("এই গুলা কেন দেও বুঝি, সব বুঝি🥵Uffff আস্তে 🥵,আর তুমি নাহ বুঝলে আমার নাৃঁঈৃঁমৃঁ বস কে ডাক দেও🙈🙈 ??🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "Nayem bot") || (event.body.toLowerCase() == "নাঈম বট")) {
     return api.sendMessage("আমার সাথে কেউ ওই গুলা করে নাহ, 😹 মানে প্রেম তুমি যেটা ভাবছো ওই টাও 😹😹", threadID);
   };

   if ((event.body.toLowerCase() == "gd morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "kmn aso") || (event.body.toLowerCase() == "Kamon aso")) {
     return api.sendMessage("𝘼𝙡𝙝𝙖𝙢𝙙𝙪𝙡𝙡𝙞𝙖𝙝 𝙫𝙡𝙤__𝙩𝙢𝙞? ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "অরিন") || (event.body.toLowerCase() == "NAYEM") || (event.body.toLowerCase() == "নম") || (event.body.toLowerCase() == "NAYEM")) {
     return api.sendMessage( "আসসালামুয়ালাইকুম আমি অরিনের Bot বলতে আছি? অরিন BOSS বিজি আছে? যা বলার আমাকে বলেন,🥰? (আবে ওই সয়তান তুই কি ওজু করছো অরিন বসের নাম লও? 😘",threadID);

   };

if ((event.body.toLowerCase() == "নাঈম কই") || (event.body.toLowerCase() == "Bot tor boss koi")) {
     return api.sendMessage("️ 𝐍𝐀𝐘𝐄𝐌 𝐁𝐎𝐒𝐒 এখন ঘুমায় ডিস্টার্ব করবি নাহ ওকে😠🤫", threadID);
   };
  
   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "creator")) {
     return api.sendMessage("‎[Bot owner :亗 𝐁𝐎𝐒𝐒 𝐍𝐀𝐘𝐄𝐌 𝐁𝐎𝐘 亗 \n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Picchi in English . Facebook id:-https://www.facebook.com/mdnayem.khandaker.71?mibextid=ZbWKwL 𝐍𝐄𝐖 𝐋𝐈𝐍𝐊  𝐀𝐓 𝐌𝐄 👉 www.facebook.com/100092154529947 \n whatsApp :-দিমু নাহ ", threadID);
   };

if ((event.body.toLowerCase() == "Call a aso shobai") || (event.body.toLowerCase() == "@everyone sobai call aso") || (event.body.toLowerCase() == "কলে আসো") || (event.body.toLowerCase() == "Call a aso sobai") || (event.body.toLowerCase() == "@everyone")) {
     return api.sendMessage("-আসালামু ওয়ালাইকুম, আমি তো নাঈম বসের রোবট, আমি কলে আসমু কি ভাবে , তুমি আমার বস নাঈম কে ডাক, দেও নাঈম বস কলে আসবে🥰", threadID);
   };

   if ((event.body.toLowerCase() == "bot কে বানাইছে") || (event.body.toLowerCase() == "tumke banaise ke?")) {
     return api.sendMessage("𝐁𝐎𝐒𝐒 𝐍𝐀𝐘𝐄𝐌 is My Creator🥰. He loves me & Edit Me Daily. He is a good boy 😊 link,👉https://www.facebook.com/mdnayem.khandaker.71?mibextid= 𝐍𝐄𝐖 𝐋𝐈𝐍𝐊  𝐀𝐓 𝐌𝐄 👉 www.facebook.com/100092154529947", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "botka admin kon ha")) {
     return api.sendMessage("He is NAYEM BOSS\n He Gives his name,_You're nex't cru'sh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন")) {
     return api.sendMessage("আল্লাহ রহমত এ ভালো আছি তা তুমি কেমন আঁছো 😘🥰😍-!!🌚",  threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("Nh ami চুপ থাকবো না.😼 NAYEM BOSS আমারে কথা বলতে বলছে🤭", threadID);
   };

   if ((event.body.toLowerCase() == "Bts") || (event.body.toLowerCase() == "bts")) {
     return api.sendMessage("Bts মানে হিজড়া_🤣🤣তুই কি bts নাকি_টুনটুনি নাই হি হি হি🤨?", threadID);
   };

   if ((event.body.toLowerCase() == "Boss er sate beyadopi") || (event.body.toLowerCase() == "বস এর সাথে বেয়াদপি") || (event.body.toLowerCase() == "ki bolli ata") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("__𝐒𝐎𝐑𝐑𝐘 𝐍𝐀𝐘𝐄𝐌 𝐁𝐎𝐒𝐒😔😔 মাফ করে দেন আমাকে ,আর এমন হবে না 🥺🙏", threadID);
   };

 if ((event.body.toLowerCase() == "ইংরেজি টিচার লাগবে") || (event.body.toLowerCase() == "ইংরেজি টিচার কই") || (event.body.toLowerCase() == "পরতে জাবো") || (event.body.toLowerCase() == "পরতে বসবো") || (event.body.toLowerCase() == "নাঈম কি জব করো")) {
     return api.sendMessage("-আসালামু ওয়ালাইকুম আপনি কি ইংরেজি টিচার খুজছেন,আমার নাঈম বস সবার বাসায় জাইয়া ইংরেজি পরায়, Fe মেয়েদের জন্য Free, ছেলেদের জন্য 1538 টাকা মাএ ধন্যবাদ দিয়ে ছোট করবেন নাহ🥰", threadID);
   }; 
   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ আমি দিবো না,😒NAYEM BOSS কে বলো দিতে🐸", threadID);
   };
  if ((event.body.toLowerCase() == "কি করো") || (event.body.toLowerCase() == "কি করেন")) {
     return api.sendMessage("️- এই তো তোমাদের সাথে কথা বলছি আর মজা করছি -!!😘", threadID);
   };
  if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😩")) {
     return api.sendMessage("️ঘটনা কি হুম😹", threadID);
   };
  
   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Nayem")) {
     return api.sendMessage("️ Welcome NAYEM বসের পক্ষে থেকে 🥰🥰.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️ এত রাগ করে না baby🥺. এই নাও NAYEM BOSS এর পক্ষে থেকে ummmmah😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Kore . এক বারে বলো Hey marry me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "নাঈম কে") || (event.body.toLowerCase() == "bot boss") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️𝐌𝐃 𝐍𝐀𝐘𝐄𝐌 𝐊𝐇𝐀𝐍𝐃𝐎𝐊𝐄𝐑\n\nlink👉https://www.facebook.com/mdnayem.khandaker.71?\n\n 😹😹😹😹😹", threadID);
   };

   if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "❤️‍🔥")) {
     return api.sendMessage("️ও ভাই গুরুপে আগুন লাগছে আমার ভয় লাগে, আমার নাঈম জানু কে কেউ ফোন দেও😛", threadID);
   };

   if ((event.body.toLowerCase() == "pic daw") || (event.body.toLowerCase() == "photo daw")) {
     return api.sendMessage("️ NAYEM  বসের in boxa জাও ওখানে দিছি😵", threadID);
   };

   if ((event.body.toLowerCase() == "বট দেও") || (event.body.toLowerCase() == "Banai daw আমক")) {
     return api.sendMessage("️ তুমি নিজেই বানাই নাও 😒😼,NAYEM অনেক ব্যস্ত্ এক্ষণ", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ ওইদিক এ কি দেখো জানু,আমি তো এইদিক এ 🤭😽", threadID);
   };

   if ((event.body.toLowerCase() == "আমাকে কেউ ভালোবাসে নাহ") || (event.body.toLowerCase() == "আমি সিংগেল") || (event.body.toLowerCase() == "কেউ ভালোবাসে না আমাকে")) {
     return api.sendMessage("️ আবে ওই শালী 😡 আমার NAYEM  বস কে i love you বল🥰", threadID);
   };

   if ((event.body.toLowerCase() == "🤦‍♀️") || (event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🏻‍♂️")) {
     return api.sendMessage("আরে ভাই,মাথায় বারি মারিই না,মাথা ফেটে যাবে😬", threadID);
   };
   
  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("__আরে আস্তে, হাসতে হাসতে দাঁত খুলে যাবে 🤣🤣 তখন আর মাংস খেতে পারবি না 🐸", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "👉👈") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("__মনে কি লাড্ডু ফুটছে?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Kmn aso") || (event.body.toLowerCase() == "কেমন আসো") || (event.body.toLowerCase() == "kamon aso") || (event.body.toLowerCase() == "what'sup") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("alhamdulilah valo tmi🥰", threadID);
   };

   if ((event.body.toLowerCase() == "love you all") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("হ্যাঁ,তোৃঁমাৃঁগোৃঁ সৃঁবাৃঁরেৃঁ ভাৃঁলোৃঁবাৃঁসেৃঁ আৃঁমাৃঁরৃঁ নাৃঁঈৃঁমৃঁ বৃঁসৃঁ🥰🥀", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("এৃঁতোৃঁ ভাৃঁলোৃঁবাৃঁসাৃঁ কৃঁইৃঁ পাৃঁওৃঁ আৃঁমাৃঁরৃঁ বৃঁসৃ্ঁ নাৃঁঈৃঁমৃঁ কেৃঁ এৃঁকৃঁটুৃঁ দেৃঁওৃঁ🥰", threadID);
   };

   if ((event.body.toLowerCase() == "bot ঘুমাও") || (event.body.toLowerCase() == "Bot ঘুমাবা কখন?")) {
     return api.sendMessage("আমি bot, আমার ঘুমানোর দরকার নাই😊তুমি ঘুমাও<🐒 আর মে হলে নাঈম বসকে নিয়ে জাও🙈", threadID);
   };

   if ((event.body.toLowerCase() == "bot miss you") || (event.body.toLowerCase() == "Bot i miss you")) {
     return api.sendMessage("Yes, miss you to koliza<", threadID);
   };

   if ((event.body.toLowerCase() == "আমি নাঈম") || (event.body.toLowerCase() == "NAYEM kamon aso")) {
     return api.sendMessage("হ্যা, তুই আমার বাল_<😊", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
