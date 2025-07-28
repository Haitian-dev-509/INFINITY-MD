const fs = require('fs');
const axios = require('axios');
const path = require('path');

const TMP_DIR = './tmp';
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR);

async function downloadTempMedia(url, filename) {
  const tempPath = path.join(TMP_DIR, filename);
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  fs.writeFileSync(tempPath, response.data);
  return tempPath;
}

function cleanupTemp(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

module.exports = { downloadTempMedia, cleanupTemp };
