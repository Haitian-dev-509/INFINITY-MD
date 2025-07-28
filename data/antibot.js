const fs = require("fs");

const antibotPath = "./lib/setantibot.json";

function getAntibot() {
  try {
    const data = fs.readFileSync(antibotPath, "utf8");
    return JSON.parse(data).enabled || "off";
  } catch (err) {
    return "off";
  }
}

function setAntibot(mode) {
  const valid = ["off", "warn", "delete", "kick"];
  if (!valid.includes(mode)) return false;

  fs.writeFileSync(antibotPath, JSON.stringify({ enabled: mode }, null, 2));
  return true;
}

module.exports = { getAntibot, setAntibot };