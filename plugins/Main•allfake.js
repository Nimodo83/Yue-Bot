/* ARCHIVO EDITADO , CREADO O MEJORADO
POR EL CUERVO 
CUERVO-TEAM-SUPREME 
SE DEJAN CREDITOS PERRAS ES DE CUERVO 
USO NO PRIVADO ES PUBLICO
PERO CUERVO SE ENCARGA 
*/
import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador y otros
global.creador = 'https://api.whatsapp.com/send/?phone=5213318360934&text=Hola+𓆰ࣩ፝֟𓆪͜︵֟፝᷼꯬ઈ𓅇︱ꦾꦼ۪۠+𝕮︩︪۪𝖀້︩︪݊𝕰͠ຼ݂𝕽້︩︪݊𝓥້︩︪𝕺͠ຼ+۪۫ઉ۟︵֟፝᷼꯬+࣭᷼𓆰ࣩ֟፝𓆪&type=phone_number&app_absent=0'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'https://api.whatsapp.com/send/?phone=5213316932903&text=Hola+☆⃞⃟ᬼ𝕮⃬ࣼ𝖀𝕰⃬ࣼ𝕽𝖁⃬ࣼ𝕺☆⃞⃟ᬼ&type=phone_number&app_absent=0'
global.namechannel = 'ཱི⃢ ✮ᬽ⃝ 𝓨𝓪𝓶𝓪𝓭𝓪-𝓑𝓸𝓽 ✞⃟⃢ꪶ ⁶⃘⃟⃤꙰/By: 𓆰ࣩ፝֟𓆪͜︵֟፝᷼꯬ઈ𓅇︱ꦾꦼ۪۠ 𝕮︩︪۪𝖀້︩︪݊𝕰͠ຼ݂𝕽້︩︪݊𝓥້︩︪𝕺͠ຼ ۪۫ઉ۟︵֟፝᷼꯬ ࣭᷼𓆰ࣩ֟፝𓆪'
global.namechannel2 = '𝗠𝗼𝗼𝗻𝗹𝗶𝗴𝗵𝘁 - 𝗧𝗲𝗮𝗺'
global.namegrupo = '⁝̵̓ᝒ̷̸͙🌸̶̩ܻᝒ̷̸꯭͙𝝡꯭𝝣꯭𝗚꯭𝗨꯭𝗠꯭𝗜꯭𝗡'
global.namecomu = '𝗖𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱 𝝡𝝣𝗚𝗨𝗠𝗜𝗡'
global.namecomu2 = '𝗖𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱 𝗠𝗼𝗼𝗻𝗹𝗶𝗴𝗵𝘁'
global.colab1 = 'Miguelon'
global.colab2 = 'Steven'
global.colab3 = 'Dino'

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de Ai Yaemori
global.emoji = '🔥'
global.emoji2 = '💥'
global.emoji3 = '❤️‍🔥'
global.emoji4 = '🍭'
global.emojis = [emoji, emoji2, emoji3, emoji4].getRandom()

//mensaje en espera
global.wait = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗮 ...*';
global.waitt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗮 ...*';
global.waittt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗮 ...*';
global.waitttt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗮 ...*';

//Enlaces
var grupo = 'https://atom.bio/cuervo-team-supreme'
var canal = 'https://atom.bio/cuervo-team-supreme'  
var git = 'https://atom.bio/cuervo-team-supreme' 
var youtube = 'https://atom.bio/cuervo-team-supreme' 
var github = 'https://atom.bio/cuervo-team-supreme' 
let correo = 'https://atom.bio/cuervo-team-supreme'

global.redes = [canal, grupo, git, youtube, github, correo].getRandom()

//Imagen
let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

// global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363229122990393@newsletter', newsletterName: "ཱི⃢ ✮ᬽ⃝Yamada-Bot✞⃟⃢ꪶ ⁶⃘⃟⃤꙰/By:𓆰ࣩ፝֟𓆪͜︵֟፝᷼꯬ઈ𓅇︱ꦾꦼ۪۠ 𝕮︩︪۪𝖀້︩︪݊𝕰͠ຼ݂𝕽້︩︪݊𝓥້︩︪𝕺͠ຼ ۪۫ઉ۟︵֟፝᷼꯬ ࣭᷼𓆰ࣩ֟፝𓆪", serverMessageId: -1 }
}}, { quoted: estilo }

global.icono = [ 
'https://qu.ax/EKcDO.jpg',
'https://qu.ax/udazG.jpg',
'https://qu.ax/ZcOjD.jpg',
'https://qu.ax/sAsPx.jpg'
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: "120363229122990393@newsletter", serverMessageId: 100, newsletterName: namechannel, }, externalAdReply: { showAdAttribution: true, title: textbot, body: 'By: 𓆰ࣩ፝֟𓆪͜︵֟፝᷼꯬ઈ𓅇︱ꦾꦼ۪۠ 𝕮︩︪۪𝖀້︩︪݊𝕰͠ຼ݂𝕽້︩︪݊𝓥້︩︪𝕺͠ຼ ۪۫ઉ۟︵֟፝᷼꯬ ࣭᷼𓆰ࣩ֟፝𓆪', mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler
