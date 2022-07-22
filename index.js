const discord = require("discord.js")
const bot = new discord.Client()

bot.on('ready', () => {
    bot.user.setActivity("Something....")
    console.log("Logged in successfully :D")
})

bot.on('message', message => {
    if(message.content === "!ping") {
        message.channel.send("pong!")
    }
})

bot.login("OTkxMTk4Njk0NTQyMTY4MTc0.GKL9gv.HftQN9FX1JHuaUJS7l3dgCm_WAYQOdgdYDJ5pw") //Your own token, thus one sadly won't work :P
