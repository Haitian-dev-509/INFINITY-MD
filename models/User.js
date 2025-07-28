const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    jid: { type: String, required: true, unique: true }, // WhatsApp JID
    banned: { type: Boolean, default: false } // Ban status
});

module.exports = mongoose.model('User', userSchema);
             
