let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*_â¡ï¸ GRUPO OFICIAL DE PARAGUA - BOT_*
ð° https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R
*_â¡ï¸ INSTAGRAM DE PROPIETARIO_*
 ð°https://www.instagram.com/matiass.zzz
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'ð·ð¨ð¹ð¨ð®ð¼ð¨ - ð©ð¶ð»', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
