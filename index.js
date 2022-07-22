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

bot.login("OTkxMTk4Njk0NTQyMTY4MTc0.G5LjBa.ngK7QlkRTizlwASO11Njv6ZxC8C5sadlPC_A-I") //Your own token, thus one sadly won't work :P
