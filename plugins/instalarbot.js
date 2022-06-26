let handler = async m => m.reply(`
⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡
_*LO SIENTO😔_*
_*TODAVÍA NO PUEDES INSTALAR A PARAGUA - BOT_*
_*PERO DENTRO DE POCO YA PONDRÁS INSTALAR A PARAGUA - BOT_*
⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡
                            𝑷𝑨𝑹𝑨𝑮𝑼𝑨 - 𝑩𝑶𝑻
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
