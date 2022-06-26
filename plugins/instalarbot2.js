let handler = async m => m.reply(`
⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡
_*LO SIENTO 😔_*
_*AÚN NO PUEDES INSTALAR A PARAGUA - BOT*
_*PERO DENTRO DE POCO YA PODRÁS INSTALAR A PARAGUA - BOT_*
⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡
                            𝑷𝑨𝑹𝑨𝑮𝑼𝑨 - 𝑩𝑶𝑻
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^Procesobot|procesobot|PROCESOBOT|Botproceso|botproceso|BOTPROCESO|procesodelbot$/i

module.exports = handler
