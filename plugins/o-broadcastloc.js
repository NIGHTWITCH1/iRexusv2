let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://media.discordapp.net/attachments/849188337943969802/1018180867459391629/62_821-1366-5209_20220910_222701.jpg'
       await conn.delay(1500)
       await conn.send2ButtonLoc(id, bcbg,'*——————「 Broadcast 」——————*\n' + text.trim(), wm, 'Menu', '.menu', 'Owner', '.owner', m)
     }
  m.reply('*Broadcast selesai*')
}
handler.help = ['broadcastloc','bcloc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastloc|bcloc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
