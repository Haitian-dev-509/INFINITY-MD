const fs = require('fs');
const os = require('os');
const moment = require('moment-timezone');
const config = require('../config');
const { cmd, commands } = require('../command');

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

cmd({
    pattern: "menu",
    desc: "Show interactive menu system",
    category: "menu",
    react: "♾️",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        moment.tz.setDefault("America/Port-au-Prince");

        const temps = moment().format('HH:mm:ss');
        const date = moment().format('DD/MM/YYYY');

        let cm = Object.values(commands);

        let coms = {};
        cm.forEach(com => {
            if (!coms[com.category]) coms[com.category] = [];
            coms[com.category].push(com.pattern || com.nomCom || 'unknown');
        });

        const mode = (config.MODE && config.MODE.toLowerCase() === "yes") ? "🌍 Public" : "🔒 Privé";

        let infoMsg = `
┌───⭓ 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘-𝐌𝐃
│ 👤 𝐔𝐒𝐄𝐑: *${m.pushName || 'Unknown'}*
│ 📅 𝐃𝐀𝐓𝐄: *${date}*
│ ⏰ 𝐓𝐈𝐌𝐄: *${temps}*
│ 📳 𝐌𝐎𝐃𝐄: *${mode}*
│ 🔧 𝐏𝐑𝐄𝐅𝐈𝐗: *${config.PREFIX}*
│ 💻 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: *${os.platform()}*
│ 📊 𝐑𝐀𝐌: *${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB*
│ 🔢 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒: *${cm.length}*
│ 🧃 𝐃𝐄𝐕: *SIRIUS*
└────────────⭓

${readMore}`;

        // Nouveau style pour le menu
        let menuMsg = "";

        for (const cat in coms) {
            menuMsg += `\n┌── 『  *${cat.toUpperCase()}* 』`;
            coms[cat].forEach(cmdName => {
                menuMsg += `\n├→ ${cmdName}`;
            });
            menuMsg += `\n┗━━━━━━━━━━━━━\n`;
        }

        menuMsg += `\n> 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙎𝙄𝙍𝙄𝙐𝙎🧃`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363328294650605@newsletter',
                newsletterName: '𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘-𝐌𝐃',
                serverMessageId: 143
            }
        };

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/rxuedn.jpg' },
            caption: infoMsg + menuMsg,
            contextInfo
        }, { quoted: mek });

    } catch (e) {
        console.log('Menu error:', e);
    }
});
