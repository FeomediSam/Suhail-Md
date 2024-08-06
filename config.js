const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_23_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICA0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTeVJqYWQyMERUOTIvTkQ4aWhKVGJMWXRuQWl4RWhCc1FEVTBWZ0Y1ZU9BPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJva0tETTNVc1NLS2RRNFZMMlJOUE1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmY2JkNjBmLTQ4MTEtNDk5Ni04N2I4LTYyMjIzYjFlYzY0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDE0MyxcbiAgICAgIDE2MCxcbiAgICAgIDEwLFxuICAgICAgMTI1LFxuICAgICAgMTYsXG4gICAgICAyMDUsXG4gICAgICAxNjAsXG4gICAgICAxNTQsXG4gICAgICA0MCxcbiAgICAgIDI0MCxcbiAgICAgIDQwLFxuICAgICAgMTgsXG4gICAgICAxNzEsXG4gICAgICAyMTksXG4gICAgICAyMTQsXG4gICAgICAyLFxuICAgICAgNTgsXG4gICAgICAyMTMsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDQxLFxuICAgICAgMTAyLFxuICAgICAgMjUyLFxuICAgICAgMjQwLFxuICAgICAgMjgsXG4gICAgICA2MyxcbiAgICAgIDIwNyxcbiAgICAgIDIzMixcbiAgICAgIDkzLFxuICAgICAgMTMxLFxuICAgICAgMjAxLFxuICAgICAgNDEsXG4gICAgICAxOTksXG4gICAgICAxOCxcbiAgICAgIDE3LFxuICAgICAgMjA0LFxuICAgICAgNzAsXG4gICAgICAxNjEsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUJKNTQ3TlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDkzNjQwMTM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDMwODI5ODQ3MzkwNTM6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVHA0OUlGRUxMSHlMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhscGt2NXBCVExzSUtxZVM0bE0zNU1EWkE3b1J6Y2RFbjRyVHVGM1pnWE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidXV0ZEwrdy84UkxVSjBBUWgzbVJPcGZhZDI1eldJUGxrSTJ4STY4aFZ0MThHUlRWZGlWeFlzSlREbEtrUk1sTlNGbGQrY0hEeGI3dFdGZFNNQW1MQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidUlmTnAvSzhGR1ZYODA2TnlBUm5FRnBNWGx2RmRCYmpaWmRYY2EvUU9aYzEralVMeE9LV2NUVnhOMHB1WWZPaUVqQTk0WDdSOFlGeTRZYWdPRE0zQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwOTM2NDAxMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk1MDU4MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
