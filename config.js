const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SAYAN/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923020696857";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923020696857,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_05_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAwLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyT2tEdVFkbzFjSHZ2azlmc2IyYXNSZHFXVkVnQk5MN3dvYjYxbTIyOGxrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyMDY5Njg1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUY1MzVGNkYzRTY1OUEzMjFGREUwMTVFNUM0Q0RBNzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNzQyMzQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDIwNjk2ODU3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RThENjg2REJFMTc2QzBCQzc4Q0VDNTlDNjk2N0UwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM3NDIzNDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnU3WU9jcHNUZFcwS3BjbzMtVmdyUVwiLFxuICBcInBob25lSWRcIjogXCIwN2Q4OWVjYS02YjBiLTQ1MGItYTNkMi1hZTlmZjMyYWE3NDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxNCxcbiAgICAgIDIxMCxcbiAgICAgIDIyNyxcbiAgICAgIDExOSxcbiAgICAgIDEwOSxcbiAgICAgIDI0NyxcbiAgICAgIDE5MixcbiAgICAgIDEwLFxuICAgICAgNTgsXG4gICAgICA2NSxcbiAgICAgIDQ4LFxuICAgICAgOTgsXG4gICAgICAyNDMsXG4gICAgICAxMyxcbiAgICAgIDcxLFxuICAgICAgMjIxLFxuICAgICAgMTI4LFxuICAgICAgMTk0LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxMzMsXG4gICAgICAxMTIsXG4gICAgICA5NSxcbiAgICAgIDQsXG4gICAgICAxMDYsXG4gICAgICA0MixcbiAgICAgIDIzMCxcbiAgICAgIDExOSxcbiAgICAgIDE2MCxcbiAgICAgIDE0OSxcbiAgICAgIDIxOSxcbiAgICAgIDcyLFxuICAgICAgMTIxLFxuICAgICAgNDUsXG4gICAgICA3OCxcbiAgICAgIDI4LFxuICAgICAgMTE4LFxuICAgICAgMjIsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTRDU5RE5BRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDIwNjk2ODU3OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQwODQ3NDA3Njc3OTU6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4Y6g6qudybTJouG0h8qAIOODoSDhj4PhtI/JtOG0h+OFpOuqqFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIQm1OVUdFUDZkMjdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNlB2ajVuRnUyeEtRcElxV3VHTGpaSmVydlMzaWlxTjg0cXZXMENKVjlRST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxMWhhbjg4Zms5dU05Ky9QeXhxazVhS0tDRWtZK2p3RW5oN3FkT3hBODliNnJNeUV6T1ozMlZQYVdxSE5qOUthNFhrTm9iNlF1eVpmb08rSTlvcUhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVT0xVbkd4K0IyaVNXYU5xL1dIaVF0RVNLTm4zY1FVcFRTczJHUmVaYjNjWVFUZ0VDTERGZW5GU2FiUHRFdCs2OXl6VjlFRTBORWI3OXB0Skdqc2FBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjA2OTY4NTc6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzc0MjMzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNOeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ055Lmpzb24iOiAie1wia2V5RGF0YVwiOlwid2NMVTBUbnFTamxUNVo2ZVhXZ3ZDWUp2TTFRcXBhSnlTTXA1Q2t4THUzUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzg5MjcyMjQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM3NDIzNDE5MTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Sayan Bhadra",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SAYAN"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
