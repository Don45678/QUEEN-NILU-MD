/*
WHATSAPP BOT BY Ansh King 
WHATSAPP - 263710299896
SUPPORT GROUP - https://t.me/Ansh_king_md_whatsapp
YOUTUBE - http://youtube.com/MRANSHOFC
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = '' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'mongodb+srv://anshking:anshking@cluster0.kiyxdxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '263773992855'

global.OWNER_NAME = 'Ansh_X_King'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'BLOCK !!!' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝙰𝙽𝚂𝙷 𝙺𝙸𝙽𝙶'

global.FOOTER = 'Ansh King 2024'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Ansh 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '𝙰𝙽𝚂𝙷 𝙺𝙸𝙽𝙶  © 2024' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IVvGoarnJdR5J97tPSMvK9' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: mranshofc" //ur yt chanel name
global.socialm = "GitHub: Don45678" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
