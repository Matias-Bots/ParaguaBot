function handler(m) {
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, '593993684821', 'OFICIAL - GataBot', m)
  //this.sendContact(m.chat, '595985958156', 'Propietario OFC - ParaguaBot', m)
  //this.sendContact(m.chat, '595985958156', 'Paragua', m)
  }
handler.help = ['contacto'] 
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña)$/i

module.exports = handler
