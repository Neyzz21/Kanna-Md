// Fitur By Zivsan And Haori Kasih Credits Dong Stah
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/70f562feddbdd1f37a360.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6283160327945|Hi 𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙 Hehehe 🌹', body: '𝘼𝙎𝙀𝙋𝘽𝙊𝙏𝙕 By 𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙', thumbnail: await (await fetch('https://telegra.ph/file/70f562feddbdd1f37a360.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/70f562feddbdd1f37a360.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6283160327945|Hi  𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙 Hehehe 🌹', body: '𝘼𝙨𝙚𝙥 𝙗𝙤𝙩𝙯 By 𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙', thumbnail: await (await fetch('https://telegra.ph/file/70f562feddbdd1f37a360.jpg')).buffer(),}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/70f562feddbdd1f37a360.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6283160327945|Hi 𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙 Hehehe 🌹', body: '𝘼𝙎𝙀𝙋𝘽𝙊𝙏𝙕 By 𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙', thumbnail: await (await fetch('https://telegra.ph/file/70f562feddbdd1f37a360.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

⬡──⬡─────────⬡──⬡

💌 Pesan : ${pesan}

⬡──⬡─────────⬡──⬡

Maaf Anda Belum Bisa Membalas ke Pengirim`

let aritube = `▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .chat nomor|pesan untuknya

Contoh: #chat 628xxxxxxxxxx|hai owner`

    conn.send2ButtonImg(chat + '@s.whatsapp.net', await(await fetch('https://telegra.ph/file/70f562feddbdd1f37a360.jpg')).buffer(), chat1, aritube, 'Menu', '.menu', 'Donasi', '.donasi', m)
    
    let logs = `BOT AKAN BLOKIR KONTAKMU JIKA?
    
≫ Spam
≫ Chat Aneh Aneh
≫ Berantem`

 let haori1 = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

⬡──⬡─────────⬡──⬡

Isi Pesan : ${pesan}

⬡──⬡─────────⬡──⬡`
    conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/70f562feddbdd1f37a360.jpg')).buffer(), logs, haori1, 'Owner', '.owner', 'Donasi', '.donasi', m)
}
handler.help = ['menfess <nomor|pesan>']
handler.tags = ['main']
handler.command = /^(menfess|chat)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
