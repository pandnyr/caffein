const { Collection } = require("discord.js")
const { client } = require(".")
const Discord = require("discord.js")



let bot = {
    client
}



const guildId = "1010145083028406342"

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)



client.on("ready", async () => {
  const guild = client.guilds.cache.get(guildId)
  if (!guild)
    console.error("Target guild not found")

    await guild.commands.set([...client.slashcommands.values()])
    console.log(`Succsessfully loaded in ${client.slashcommands.size}`)
    process.exit(0)
})



client.login(process.env.TOKEN)

