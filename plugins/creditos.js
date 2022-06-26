let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭═════• ೋ•✧๑♡๑✧•ೋ •═════╮ 

*Paragua-Bor tiene funciones que pertenezcan a las siguentes Empresa(s)|Organizacion(es)|Persona(s):*

_*MATIAS_*
 
╰═════• ೋ•✧๑♡๑✧•ೋ •═════╯
`.trim() 
//¡GRACIAS!
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🇵🇾Paragua🇵🇾', 'status@broadcast')
}
handler.command = /^(creditos|CREDITOS|Creditos|Credito|Crédito)$/i

module.exports = handler
