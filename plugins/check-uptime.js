const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
  pattern: "uptime",
  alias: ["up"],
  desc: "Affiche le temps d’activité du bot",
  category: "main",
  react: "⏱️",
  filename: __filename
}, async (message, match, m, { from, reply }) => {
  try {
    const up = runtime(process.uptime());
    const startedAt = new Date(Date.now() - process.uptime() * 1000);
    const sinceDate = startedAt.toLocaleDateString();
    const sinceTime = startedAt.toLocaleTimeString();
    const fullSince = startedAt.toLocaleString();
    const version = "4.0.0"; // ou dynamiquement depuis version.json

    const credit = `\n\n> 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙎𝙄𝙍𝙄𝙐𝙎🧃`;

    const formats = [

`╭─────〔 *🧃 UPTIME STATUS* 〕─────╮
│ 🟢 *Online since:* ${fullSince}
│ ⏱️ *Duration:* ${up}
│ 🤖 *Bot:* ${config.BOT_NAME}
│ 🔖 *Version:* ${version}
╰──────────────────────────────╯${credit}`,

`╔══ ⏱️ 𝙄𝙉𝙁𝙄𝙉𝙄𝙏𝙔 𝙐𝙋𝙏𝙄𝙈𝙀 ══╗
║ 📆 Date : ${sinceDate}
║ 🕒 Heure : ${sinceTime}
║ ⏳ Uptime : ${up}
║ 🤖 Bot : ${config.BOT_NAME}
╚════════════════════════════╝${credit}`,

`🌐 *INFINITY-MD Uptime Report*

⏳ *Actif depuis* : ${up}
🕒 *Démarré à* : ${fullSince}
🤖 *Bot* : ${config.BOT_NAME}
📌 *Version* : ${version}${credit}`,

`🎯 *État actuel du bot :*

⏱️ *Durée* : ${up}
📆 *Depuis* : ${sinceDate}
🕒 *À* : ${sinceTime}
🤖 *Nom* : ${config.BOT_NAME}
🧾 *Version* : ${version}${credit}`,

`•─────[ *⏱️ BOT UPTIME* ]─────•
│ ⌛ *Temps écoulé* : ${up}
│ 📅 *Date* : ${sinceDate}
│ 🕓 *Heure* : ${sinceTime}
│ 🤖 *Nom* : ${config.BOT_NAME}
│ 🧃 *Version* : ${version}
•─────────────────────────────•${credit}`
    ];

    const pick = formats[Math.floor(Math.random() * formats.length)];

    await message.sendMessage(from, {
      text: pick,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363328294650605@newsletter",
          newsletterName: config.OWNER_NAME || "INFINITY",
          serverMessageId: 143
        }
      }
    }, { quoted: match });

  } catch (err) {
    console.error("Uptime Error:", err);
    reply("❌ Une erreur est survenue :\n" + err.message);
  }
});
