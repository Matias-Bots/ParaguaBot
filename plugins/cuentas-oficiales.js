let handler = async m => m.reply(`
*_CUENTAS OFC DE PARAGUA - BOT_*

*Hola, los números Oficiales de Paragua - Bot son:*

🐈 *Paragua - Bot ~ Wa.me/595986731337*

👆 _Para saber si Paragua - Bot está Activada escriba #estado_

👆 _Para ver el menú escriba #menu_

👆 _Puedes ser Bot diciendo #serbot o #jadibot_

👆 _Puedes hacer una solicitud para que los Bots Oficiales se unan diciendo #unete enlace del grupo_

👆 _Puedes Instalar a ParaguaBot diciendo #instalarbot y #procesobot_

_________________________________________________

*GRUPO OFICIAL PARAGUA-BOT*
*https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R*
_________________________________________________


⚠️ *Los Bots Oficiales son temporales en grupos, es preferible que sea Bot o instalar a Paragua - Bot* ⚠️
                            🇵🇾 𝑷𝑨𝑹𝑨𝑮𝑼𝑨 𝑩𝑶𝑻 🇵🇾                    
`.trim()) 
//👽 *ParaguaBot ~ https://wa.me/595985958156*
//*Número del propietario (NO BOT)*

//👽 *Paragua - Bot ~ https://wa.me/595986731337*

//👆 _Solo escríbeme para temas relacionados a Paragua - Bot_
//_________________________________________________
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^cuentasoficiales|cuentaoficial|cuentasofc|cuentasgatabot|Cuentasoficiales|cuentagatabot|cuentasgb|cuentagb|Cuentagb|Cuentasgb$/i

module.exports = handler
