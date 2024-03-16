//base by DGXeon
//recode by Rapikz
//YouTube: @rapikgimangYT
//Instagram: Rapik_Gimang
//Telegram: t.me/6281312651566

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: Rapik Gimang" //ur yt chanel name
global.socialm = "IG: Rapik_Gimang" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'XC Pikz Bot' //ur bot name
global.ownernumber = '6282121015252' //ur owner number
global.ownername = 'Rapikz' //ur owner name
global.websitex = "wa.me/6282121015252"
global.wagc = "https://chat.whatsapp.com/LYWMworE2DwHow8pPbWRZy"
global.themeemoji = '🪀'
global.wm = "Pikz-MD"
global.botscript = 'https://chat.whatsapp.com/DLQyuhJnDTw0JBwR9UXJLf' //script link
global.packname = "-"
global.author = "-"
global.creator = "6282121015252@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6282121015252"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Succes'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})