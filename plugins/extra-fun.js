const { cmd } = require("../command");
const config = require('../config');

cmd({
  pattern: "compatibility",
  alias: ["friend", "fcheck"],
  desc: "Calculate the compatibility score between two users.",
  category: "fun",
  react: "💖",
  filename: __filename,
  use: "@tag1 @tag2",
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (args.length < 2) {
      return reply("Please mention two users to calculate compatibility.\nUsage: `.compatibility @user1 @user2`");
    }

    let user1 = m.mentionedJid[0]; 
    let user2 = m.mentionedJid[1]; 

    const specialNumber = config.DEV ? `${config.DEV}@s.whatsapp.net` : null;

    // Calculate a random compatibility score (between 1 to 1000)
    let compatibilityScore = Math.floor(Math.random() * 1000) + 1;

    // Check if one of the mentioned users is the special number
    if (user1 === specialNumber || user2 === specialNumber) {
      compatibilityScore = 1000; // Special case for DEV number
      return reply(`💖 Compatibility between @${user1.split('@')[0]} and @${user2.split('@')[0]}: ${compatibilityScore}+/1000 💖`);
    }

    // Send the compatibility message
    await conn.sendMessage(mek.chat, {
      text: `💖 Compatibility between @${user1.split('@')[0]} and @${user2.split('@')[0]}: ${compatibilityScore}/1000 💖`,
      mentions: [user1, user2],
    }, { quoted: mek });

  } catch (error) {
    console.log(error);
    reply(`❌ Error: ${error.message}`);
  }
});

  cmd({
  pattern: "aura",
  desc: "Calculate aura score of a user.",
  category: "fun",
  react: "💀",
  filename: __filename,
  use: "@tag",
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (args.length < 1) {
      return reply("Please mention a user to calculate their aura.\nUsage: `.aura @user`");
    }

    let user = m.mentionedJid[0]; 
    const specialNumber = config.DEV ? `${config.DEV}@s.whatsapp.net` : null;

    // Calculate a random aura score (between 1 to 1000)
    let auraScore = Math.floor(Math.random() * 1000) + 1;

    // Check if the mentioned user is the special number
    if (user === specialNumber) {
      auraScore = 999999; // Special case for DEV number
      return reply(`💀 Aura of @${user.split('@')[0]}: ${auraScore}+ 🗿`);
    }

    // Send the aura message
    await conn.sendMessage(mek.chat, {
      text: `💀 Aura of @${user.split('@')[0]}: ${auraScore}/1000 🗿`,
      mentions: [user],
    }, { quoted: mek });

  } catch (error) {
    console.log(error);
    reply(`❌ Error: ${error.message}`);
  }
});

cmd({
    pattern: "roast",
    desc: "Roast someone in Hindi",
    category: "fun",
    react: "🔥",
    filename: __filename,
    use: "@tag"
}, async (conn, mek, m, { q, reply }) => {
    let roasts = [
        "Abe frère, ton QI est plus faible qu’un signal WiFi !",
"Frère, ta pensée c’est comme un statut WhatsApp, elle disparaît après 24 heures !",
"Abe, tu réfléchis trop, t’es un scientifique de la NASA ou quoi ?",
"Abe, t’es qui ? Même Google ne te trouve pas !",
"Ton cerveau fonctionne en 2G ou quoi ?",
"Ne pense pas autant, frère, ta batterie va vite se vider !",
"Ta pensée c’est comme un match de cricket, dès qu’il pleut, ça s’arrête !",
"T’es un VIP : 'Very Idiotic Person' !",
"Abe frère, ton QI est plus faible qu’un signal WiFi !",
"Frère, ta pensée c’est comme un statut WhatsApp, elle disparaît après 24 heures !",
"Abe, tu viens de quelle planète ? Ce monde n’est pas pour les aliens comme toi !",
"Il y a beaucoup à chercher dans ton cerveau, mais aucun résultat ne sort !",
"Ta vie c’est comme un statut WhatsApp, elle peut être supprimée à tout moment !",
"Ton style c’est comme un mot de passe WiFi, personne ne le connaît !",
"Abe, t’es le genre de mec qui cherche le plot twist de sa vie sur Google !",
"Abe, t’es comme une mise à jour logicielle impossible à lancer, complètement bloqué !",
"Penser à toi me fait perdre plus de temps que faire une recherche Google !",
"J’ai pas manqué de mots, juste pas envie de te clasher !",
"Ta personnalité c’est comme une batterie morte, faut penser à te recharger !",
"Frère, ta pensée mérite un serveur dédié tellement elle est lente !",
"Abe, t’es dans quel jeu où tu perds tout le temps ?",
"Tes blagues sont comme des mises à jour logicielles, elles reviennent souvent mais servent à rien !",
"À cause de toi, même la mémoire de mon téléphone est pleine !",
"Abe frère, t’es devenu un mème ambulant !",
"T’as l’air de te croire intelligent, mais ton cerveau est en surcharge !",
"À cause de toi, on pense à couper les notifs du groupe !",
"Les gens comme toi se croient des héros, alors qu’en vrai ce sont des méchants !",
"Il faudrait un bouton rewind et fast forward juste pour ta vie !",
"Chaque mot qui sort de ta bouche est un nouveau bug !",
"Abe, t’as pas pu gérer ta propre vie, et tu donnes des conseils aux autres ?",
"T’es le plus gros virus de ta propre existence !",
"Abe, t’es une appli bugguée ou quoi ?",
"Il faudrait un CPU pour ta pensée, mais ton CPU est grillé depuis longtemps !",
"Abe, t’es devenu un message d’erreur sur pattes !",
"Tes compliments ont l’air beaux, mais tout le monde connaît ta vraie valeur !",
"Ton cerveau est comme un lien cassé, tu peux chercher, tu trouveras rien !",
"Frère, même Netflix bugue à cause de toi !",
"Ton visage, c’est comme un screenshot — en vrai t’es personne !",
"Abe frère, t’as l’air d’un iPhone, mais à l’intérieur t’es un vieux Android !",
"Abe, avec une pensée comme la tienne, même Google doit te haïr !",
"Frère, utilise ton visage pour créer une ambiance, peut-être que quelqu’un te remarquera !",
"Tes actions, c’est comme une appli qui crash quand on en a le plus besoin !",
"Le plus grand hack de ta vie c’est : 'Attendez rien de moi' !",
"Abe, tu te regardes dans le miroir et tu crois que tout va bien ?",
"Abe, tu fonctionnes en mode économie d’énergie mentale !",
"T’as des idées, mais elles sont aussi obsolètes que Windows XP !",
"Ta pensée c’est comme une erreur système, faut redémarrer tout !",
"Ta personnalité c’est comme un disque dur vide — rien d’utile dedans !",
"Abe, tu viens de quelle planète ? Ce monde n’est pas pour les gens comme toi !",
"Quelqu’un a écrit 'loading' sur ton visage, mais ça ne finit jamais de charger !",
"Ton cerveau c’est comme un lien cassé, ça ne connecte jamais !",
"Abe, même l’algorithme de Google se perd avec ta logique !",
"Un gars comme toi avec ce genre d’idées ? On voit ça que dans la science-fiction !",
"Abe, fais-toi tatouer 'not found', au moins ce sera clair pour tout le monde !",
"Ta pensée est si lente que même Google abandonne !",
"Abe, t’es un exemple vivant de '404 not found' !",
"Ton cerveau c’est comme une batterie de téléphone, toujours à plat !",
"Abe, t’es celui qui oublie même le mot de passe de sa propre vie !",
"Ce que tu crois être de la réflexion, c’est juste du buffering !",
"Tes décisions sont si confuses que même l’animateur de KBC serait perdu !",
"Frère, il faut une page d’erreur rien que pour les gens comme toi !",
"Ta vie a reçu le message 'user not found' !",
"Tes paroles ont autant de valeur que la qualité photo des téléphones des années 90 !",
"Abe frère, t’es toujours 'under construction' !",
"Avec toi, la vie c’est une 'erreur inconnue', y’a pas de solution !",
"Frère, il faut un panneau d’avertissement sur ton visage : 'Attention, stupidité en approche' !",
"À chaque mot que tu dis, on sent que le système va planter !",
"T’as une idée, mais elle est toujours 'en attente de validation' !"
];               
        
    let randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    let sender = `@${mek.sender.split("@")[0]}`;
    let mentionedUser = m.mentionedJid[0] || (mek.quoted && mek.quoted.sender);

    if (!mentionedUser) {
        return reply("Usage: .roast @user (Tag someone to roast them!)");
    }

    let target = `@${mentionedUser.split("@")[0]}`;
    
    // Sending the roast message with the mentioned user
    let message = `${target} :\n *${randomRoast}*\n> This is all for fun, don't take it seriously!`;
    await conn.sendMessage(mek.chat, { text: message, mentions: [mek.sender, mentionedUser] }, { quoted: mek });
});

cmd({
    pattern: "8ball",
    desc: "Magic 8-Ball gives answers",
    category: "fun",
    react: "🎱",
    filename: __filename
}, 
async (conn, mek, m, { from, q, reply }) => {
    if (!q) return reply("Ask a yes/no question! Example: .8ball Will I be rich?");
    
    let responses = [
        "Yes!", "No.", "Maybe...", "Definitely!", "Not sure.", 
        "Ask again later.", "I don't think so.", "Absolutely!", 
        "No way!", "Looks promising!"
    ];
    
    let answer = responses[Math.floor(Math.random() * responses.length)];
    
    reply(`🎱 *Magic 8-Ball says:* ${answer}`);
});

cmd({
    pattern: "compliment",
    desc: "Give a nice compliment",
    category: "fun",
    react: "😊",
    filename: __filename,
    use: "@tag (optional)"
}, async (conn, mek, m, { reply }) => {
    let compliments = [
        "You're amazing just the way you are! 💖",
        "You light up every room you walk into! 🌟",
        "Your smile is contagious! 😊",
        "You're a genius in your own way! 🧠",
        "You bring happiness to everyone around you! 🥰",
        "You're like a human sunshine! ☀️",
        "Your kindness makes the world a better place! ❤️",
        "You're unique and irreplaceable! ✨",
        "You're a great listener and a wonderful friend! 🤗",
        "Your positive vibes are truly inspiring! 💫",
        "You're stronger than you think! 💪",
        "Your creativity is beyond amazing! 🎨",
        "You make life more fun and interesting! 🎉",
        "Your energy is uplifting to everyone around you! 🔥",
        "You're a true leader, even if you don’t realize it! 🏆",
        "Your words have the power to make people smile! 😊",
        "You're so talented, and the world needs your skills! 🎭",
        "You're a walking masterpiece of awesomeness! 🎨",
        "You're proof that kindness still exists in the world! 💕",
        "You make even the hardest days feel a little brighter! ☀️"
    ];

    let randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    let sender = `@${mek.sender.split("@")[0]}`;
    let mentionedUser = m.mentionedJid[0] || (mek.quoted && mek.quoted.sender);
    let target = mentionedUser ? `@${mentionedUser.split("@")[0]}` : "";

    let message = mentionedUser 
        ? `${sender} complimented ${target}:\n😊 *${randomCompliment}*`
        : `${sender}, you forgot to tag someone! But hey, here's a compliment for you:\n😊 *${randomCompliment}*`;

    await conn.sendMessage(mek.chat, { text: message, mentions: [mek.sender, mentionedUser].filter(Boolean) }, { quoted: mek });
});

cmd({
    pattern: "lovetest",
    desc: "Check love compatibility between two users",
    category: "fun",
    react: "❤️",
    filename: __filename,
    use: "@tag1 @tag2"
}, async (conn, mek, m, { args, reply }) => {
    if (args.length < 2) return reply("Tag two users! Example: .lovetest @user1 @user2");

    let user1 = args[0].replace("@", "") + "@s.whatsapp.net";
    let user2 = args[1].replace("@", "") + "@s.whatsapp.net";

    let lovePercent = Math.floor(Math.random() * 100) + 1; // Generates a number between 1-100

    let messages = [
        { range: [90, 100], text: "💖 *A match made in heaven!* True love exists!" },
        { range: [75, 89], text: "😍 *Strong connection!* This love is deep and meaningful." },
        { range: [50, 74], text: "😊 *Good compatibility!* You both can make it work." },
        { range: [30, 49], text: "🤔 *It’s complicated!* Needs effort, but possible!" },
        { range: [10, 29], text: "😅 *Not the best match!* Maybe try being just friends?" },
        { range: [1, 9], text: "💔 *Uh-oh!* This love is as real as a Bollywood breakup!" }
    ];

    let loveMessage = messages.find(msg => lovePercent >= msg.range[0] && lovePercent <= msg.range[1]).text;

    let message = `💘 *Love Compatibility Test* 💘\n\n❤️ *@${user1.split("@")[0]}* + *@${user2.split("@")[0]}* = *${lovePercent}%*\n${loveMessage}`;

    await conn.sendMessage(mek.chat, { text: message, mentions: [user1, user2] }, { quoted: mek });
}); 

cmd(
    {
        pattern: "emoji",
        desc: "Convert text into emoji form.",
        category: "fun",
        react: "🙂",
        filename: __filename,
        use: "<text>"
    },
    async (conn, mek, m, { args, q, reply }) => {
        try {
            // Join the words together in case the user enters multiple words
            let text = args.join(" ");
            
            // Map text to corresponding emoji characters
            let emojiMapping = {
                "a": "🅰️",
                "b": "🅱️",
                "c": "🇨️",
                "d": "🇩️",
                "e": "🇪️",
                "f": "🇫️",
                "g": "🇬️",
                "h": "🇭️",
                "i": "🇮️",
                "j": "🇯️",
                "k": "🇰️",
                "l": "🇱️",
                "m": "🇲️",
                "n": "🇳️",
                "o": "🅾️",
                "p": "🇵️",
                "q": "🇶️",
                "r": "🇷️",
                "s": "🇸️",
                "t": "🇹️",
                "u": "🇺️",
                "v": "🇻️",
                "w": "🇼️",
                "x": "🇽️",
                "y": "🇾️",
                "z": "🇿️",
                "0": "0️⃣",
                "1": "1️⃣",
                "2": "2️⃣",
                "3": "3️⃣",
                "4": "4️⃣",
                "5": "5️⃣",
                "6": "6️⃣",
                "7": "7️⃣",
                "8": "8️⃣",
                "9": "9️⃣",
                " ": "␣", // for space
            };

            // Convert the input text into emoji form
            let emojiText = text.toLowerCase().split("").map(char => emojiMapping[char] || char).join("");

            // If no valid text is provided
            if (!text) {
                return reply("Please provide some text to convert into emojis!");
            }

            await conn.sendMessage(mek.chat, {
                text: emojiText,
            }, { quoted: mek });

        } catch (error) {
            console.log(error);
            reply(`Error: ${error.message}`);
        }
    }
);
