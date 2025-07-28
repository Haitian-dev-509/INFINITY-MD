const mongoose = require('mongoose');

const pluginSchema = new mongoose.Schema({
    id: String,
    url: String,
    installedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Plugin', pluginSchema);
