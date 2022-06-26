let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*_➡️ GRUPO OFICIAL DE PARAGUA - BOT_*
🔰 https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R
*_➡️ INSTAGRAM DE PROPIETARIO_*
 🔰https://www.instagram.com/matiass.zzz
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝑷𝑨𝑹𝑨𝑮𝑼𝑨 - 𝑩𝑶𝑻', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
