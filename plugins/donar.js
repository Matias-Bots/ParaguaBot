// NO QUITES NI CAMBIES NADA DE AQUI POR FAVOR
// AGREGA TUS DATOS SI QIERES, PERO NO QUITES LOS MIOS
let handler = async m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*
*┇                         「 DONAR 」*  
*┣ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*
*┇❖SIGUEME EN INSTAGRAM*
*┃https://www.instagram.com/matiass.zzz*
*┣ ┅ ━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
//PUEDES AGREGAR TUS DATOS, PERO NO QUITES LOS QUE YA ESTÁN PUESTOS
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(dona|donar|apoyar|dardinero|apoyo)$/i

module.exports = handler
