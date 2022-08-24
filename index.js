const Discord = require("discord.js")
require("dotenv").config()



const client = new Discord.Client({
    intents:[
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "GuildMembers"
    ]
})

let bot = {
    client,
    prefix: "!",
    owners: ["672896669058203726"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

 client.on("messageCreate", (message) => {
     if (message.content == "hi"){
         message.reply("Hello There!")
         message.react("👋🏻")
     }
    else if (message.content == "hello"){
        message.reply("Hello mate!")
        message.react("👋🏻")
    }
    else if (message.content == "ey"){
        message.reply("yo!")
        message.react("👊🏻")
    }
    else if (message.content == "wubba"){
        message.reply("lubba")
        message.react("🥒")
    }
    else if (message.content == "dub"){
        message.reply("dub!")
    }
    else if (message.content == "who are you?"){
        message.reply("I am vengeance...")
        message.react("😜")
        message.channel.send("https://c.tenor.com/EalRM1BllpoAAAAC/the-batman-pattinson2021.gif")
    }
    else if (message.content == "legend"){
        message.reply("wait for it...")
        message.channel.send("-DARY!")
        message.channel.send("https://c.tenor.com/nJ3EeUPhVKkAAAAC/barny-stinson.gif")
        
  }

})

const welcomeChannelId = "1011930095507750912"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
    member.guild.channels.cache.get(welcomeChannelId).send(" https://c.tenor.com/TTUYiUL3h5kAAAAC/goku-son.gif")
})

client.login(process.env.TOKEN)