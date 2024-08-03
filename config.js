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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_07_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICA2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICAyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJabnNSRE9SYXhYWk1BV1h6S0FqOW9OZkw4UFVpUStlQnVaaUlWWk1kNDZrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIteW1HSnRWR1NBZWpnX1VTcHBuWlBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyZmRjOTQxLWMwY2EtNDdjYy05NjVjLTY4NzQyOWNmZjQyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDQsXG4gICAgICAxMjcsXG4gICAgICA4NSxcbiAgICAgIDE5OCxcbiAgICAgIDIwMCxcbiAgICAgIDEyNyxcbiAgICAgIDEzNyxcbiAgICAgIDE4LFxuICAgICAgNzYsXG4gICAgICAyMzUsXG4gICAgICA0NCxcbiAgICAgIDIxOSxcbiAgICAgIDI0MSxcbiAgICAgIDE0NixcbiAgICAgIDE0MCxcbiAgICAgIDEyMyxcbiAgICAgIDI0NixcbiAgICAgIDI1NSxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAyMjQsXG4gICAgICAzNixcbiAgICAgIDE0NSxcbiAgICAgIDEwOCxcbiAgICAgIDIwNCxcbiAgICAgIDg0LFxuICAgICAgMTkwLFxuICAgICAgMTg0LFxuICAgICAgMjM1LFxuICAgICAgNTAsXG4gICAgICA2OCxcbiAgICAgIDE2LFxuICAgICAgMyxcbiAgICAgIDE4MixcbiAgICAgIDMzLFxuICAgICAgMjIzLFxuICAgICAgMjUwLFxuICAgICAgMTgyLFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZFWEJKMko0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ3ODY3Nzg1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdW5hYyBTdG9yZVwiLFxuICAgIFwibGlkXCI6IFwiMjc3MTkzMjEzMDg3OTg0OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlNGb3pNUTBwNjR0UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6OUFua3lmeXZlU2YzRk5SMnk4VjhWbysydWR4dmxUWjhrVXdNWVd1eVgwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImduYUpPQmlab2FRZ05tRGVkcjc0UkNqQ0V2SmhucklXMnlEbm9sWTJkQnZjeHdqTHlHTmVaN2lFMmhzWlZwMFhETzFLVnlBUlV2NlVFeUJFUW5UYUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImU2OHQ4N3VqcTIvQUVtalRmTzVZakJ0S3l2R0FhUVBLR25aREpkRlJmSVU3SXk2dGU3SEdmZDBrdW91NHl6ek51ZmIxTjg5QVV5OStkM3g4aFNhb2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDc4Njc3ODU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY4MzIyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQWdBQVBkM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBZ0FBUGQzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNkk3dDUvSUt1dEZ0NzZXV2FKTGFrWnVHQVY5Nm9mYnFYOUxzU1hBSUdBST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc1Mjg4NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOls4LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTY0OTQyNDkzM1wifSIKfQ=="  // PUT your SESSION_ID 


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
