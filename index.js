const Discord = require("discord.js")
require("dotenv").config()
const akaneko = require("akaneko")


const client = new Discord.Client({
    intents:[
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "GuildMembers",
        "GuildVoiceStates",
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

//////////// NSFW /////////////

client.on("messageCreate", async message => {
    if (!message.channel.nsfw) return message.channel.send("Sorry, Not NSFW Channel!")

    const hentai = new Discord.EmbedBuilder().setTitle('NSFW')
    const ass = new Discord.EmbedBuilder().setTitle('NSFW')
    const cum = new Discord.EmbedBuilder().setTitle('NSFW')
    const thighs = new Discord.EmbedBuilder().setTitle('NSFW')
    const masturbation = new Discord.EmbedBuilder().setTitle('NSFW')
    const gifs = new Discord.EmbedBuilder().setTitle('NSFW')
    const bdsm = new Discord.EmbedBuilder().setTitle('NSFW')
    const blowjob = new Discord.EmbedBuilder().setTitle('NSFW')
    const feet = new Discord.EmbedBuilder().setTitle('NSFW')
    const doujin = new Discord.EmbedBuilder().setTitle('NSFW')
    const foxgirl = new Discord.EmbedBuilder().setTitle('NSFW')
    const femdom = new Discord.EmbedBuilder().setTitle('NSFW')
    const glasses = new Discord.EmbedBuilder().setTitle('NSFW')
    const netorare = new Discord.EmbedBuilder().setTitle('NSFW')
    const maid = new Discord.EmbedBuilder().setTitle('NSFW')
    const orgy = new Discord.EmbedBuilder().setTitle('NSFW')
    const pussy = new Discord.EmbedBuilder().setTitle('NSFW')
    const panties = new Discord.EmbedBuilder().setTitle('NSFW')
    const school = new Discord.EmbedBuilder().setTitle('NSFW')
    const succubus = new Discord.EmbedBuilder().setTitle('NSFW')
    const tentacles = new Discord.EmbedBuilder().setTitle('NSFW')
    const uglybastard = new Discord.EmbedBuilder().setTitle('NSFW')
    const uniform = new Discord.EmbedBuilder().setTitle('NSFW')
    const yuri = new Discord.EmbedBuilder().setTitle('NSFW')
    const zettaryouiki = new Discord.EmbedBuilder().setTitle('NSFW')
    const neko = new Discord.EmbedBuilder().setTitle('NSFW')
    const sfwwallpaper = new Discord.EmbedBuilder().setTitle('NSFW')
    const sfwwallpapermobile = new Discord.EmbedBuilder().setTitle('NSFW')
    const nsfwwallpaper = new Discord.EmbedBuilder().setTitle('NSFW')
    const nsfwwallpapermobile = new Discord.EmbedBuilder().setTitle('NSFW')


    var command = message.content.toLowerCase().slice(bot.prefix.length)
    
    if (!message.content.startsWith(bot.prefix) || message.author.bot) return



    if (command == 'hentai'){
        hentai.setImage(await akaneko.nsfw.hentai()).setColor('Random').setDescription("Your hentai is here!")
        message.channel.send({embeds: [hentai]})
    }
    else if (command == 'ass'){
        ass.setImage(await akaneko.nsfw.ass()).setColor('Random').setDescription("I know you like anime ass~ uwu")
        message.channel.send({embeds: [ass]})
    }
    else if (command == 'cum'){
        cum.setImage(await akaneko.nsfw.cum()).setColor('Random').setDescription("Basically sticky white stuff that is usually milked from sharpies.")
        message.channel.send({embeds: [cum]})
    }
    else if (command == 'thighs'){
        thighs.setImage(await akaneko.nsfw.thighs()).setColor('Random').setDescription("The top part of your legs, very hot, isn't it?")
        message.channel.send({embeds: [thighs]})
    }
    else if (command == 'masturbation'){
        masturbation.setImage(await akaneko.nsfw.masturbation()).setColor('Random').setDescription("Solo Queue in CSGO!")
        message.channel.send({embeds: [masturbation]})
    }
    else if (command == 'gifs'){
        gifs.setImage(await akaneko.nsfw.gifs()).setColor('Random').setDescription("Basically an animated image, so yes :3")
        message.channel.send({embeds: [gifs]})
    }
    else if (command == 'foxgirl'){
        foxgirl.setImage(await akaneko.nsfw.foxgirl()).setColor('Random').setDescription("Girl's that are wannabe foxes, yes")
        message.channel.send({embeds: [foxgirl]})
    }
    else if (command == 'bdsm'){
        bdsm.setImage(await akaneko.nsfw.bdsm()).setColor('Random').setDescription("If you don't know what it is, search it up")
        message.channel.send({embeds: [bdsm]})
    }
    else if (command == 'blowjob'){
        blowjob.setImage(await akaneko.nsfw.bdsm()).setColor('Random').setDescription("Basically an image of a girl sucking on a sharp blade!")
        message.channel.send({embeds: [blowjob]})
    }
    else if (command == 'doujin'){
        doujin.setImage(await akaneko.nsfw.doujin()).setColor('Random').setDescription("It's here your doujin!")
        message.channel.send({embeds: [doujin]})
    }
    else if (command == 'feet'){
        feet.setImage(await akaneko.nsfw.feet()).setColor('Random').setDescription("So you like smelly feet huh?")
        message.channel.send({embeds: [feet]})
    }
    else if (command == 'femdom'){
        femdom.setImage(await akaneko.nsfw.femdom()).setColor('Random').setDescription("Female Domination?")
        message.channel.send({embeds: [femdom]})
    }
    else if (command == 'glasses'){
        glasses.setImage(await akaneko.nsfw.glasses()).setColor('Random').setDescription("Girls that wear glasses, uwu~")
        message.channel.send({embeds: [glasses]})
    }
    else if (command == 'netorare'){
        netorare.setImage(await akaneko.nsfw.netorare()).setColor('Random').setDescription("Wow, I won't even question your fetishes.")
        message.channel.send({embeds: [netorare]})
    }
    else if (command == 'maid'){
        maid.setImage(await akaneko.nsfw.maid()).setColor('Random').setDescription("Maids, Maid Uniforms, etc, you know what maids are :3")
        message.channel.send({embeds: [maid]})
    }
    else if (command == 'orgy'){
        orgy.setImage(await akaneko.nsfw.orgy()).setColor('Random').setDescription("Group Lewd Acts")
        message.channel.send({embeds: [orgy]})
    }
    else if (command == 'pussy'){
        pussy.setImage(await akaneko.nsfw.pussy()).setColor('Random').setDescription("The genitals of a female, or a cat, you give the meaning.")
        message.channel.send({embeds: [pussy]})
    }
    else if (command == 'panties'){
        panties.setImage(await akaneko.nsfw.panties()).setColor('Random').setDescription("I mean... just why? You like underwear?")
        message.channel.send({embeds: [panties]})
    }
    else if (command == 'school'){
        school.setImage(await akaneko.nsfw.school()).setColor('Random').setDescription("School Uniforms!~ Yatta~!")
        message.channel.send({embeds: [school]})
    }
    else if (command == 'succubus'){
        succubus.setImage(await akaneko.nsfw.succubus()).setColor('Random').setDescription("Spooky Succubus, oh I'm so scared~ Totally don't suck me~")
        message.channel.send({embeds: [succubus]})
    }
    else if (command == 'tentacles'){
        tentacles.setImage(await akaneko.nsfw.tentacles()).setColor('Random').setDescription("I'm sorry but, why do they look like intestines?")
        message.channel.send({embeds: [tentacles]})
    }
    else if (command == 'uglybastard'){
        uglybastard.setImage(await akaneko.nsfw.uglyBastard()).setColor('Random').setDescription("The one thing most of us can all agree to hate :)")
        message.channel.send({embeds: [uglybastard]})
    }
    else if (command == 'uniform'){
        uniform.setImage(await akaneko.nsfw.uniform()).setColor('Random').setDescription("Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~")
        message.channel.send({embeds: [uniform]})
    }
    else if (command == 'yuri'){
        yuri.setImage(await akaneko.nsfw.yuri()).setColor('Random').setDescription("Girls on Girls, and Girl's only!<3")
        message.channel.send({embeds: [yuri]})
    }
    else if (command == 'zettaryouiki'){
        zettaryouiki.setImage(await akaneko.nsfw.zettaiRyouiki()).setColor('Random').setDescription("That one part of the flesh being squeeze in thigh-highs~<3")
        message.channel.send({embeds: [zettaryouiki]})
    }
    else if (command == 'neko'){
        neko.setImage(await akaneko.neko()).setColor('Random').setDescription("Meow!")
        message.channel.send({embeds: [neko]})
    }
    else if (command == 'neko'){
        neko.setImage(await akaneko.neko()).setColor('Random').setDescription("Meow!")
        message.channel.send({embeds: [neko]})
    }
    else if (command == 'sfwwallpaper'){
        sfwwallpaper.setImage(await akaneko.wallpapers()).setColor('Random').setDescription("Meow!")
        message.channel.send({embeds: [sfwwallpaper]})
    }
    else if (command == 'sfwwallpapermobile'){
        sfwwallpapermobile.setImage(await akaneko.mobileWallpapers()).setColor('Random').setDescription("Meow!")
        message.channel.send({embeds: [sfwwallpapermobile]})
    }
    else if (command == 'nsfwwallpaper'){
        nsfwwallpaper.setImage(await akaneko.nsfw.wallpapers()).setColor('Random').setDescription("Meow!")
        message.channel.send({embeds: [nsfwwallpaper]})
    }
    else if (command == 'nsfwwallpapermobile'){
        nsfwwallpapermobile.setImage(await akaneko.nsfw.mobileWallpapers()).setColor('Random').setDescription("Meow!")
        message.channel.send({embeds: [nsfwwallpapermobile]})
    }

})

//////////////////////////
const welcomeChannelId = "1011930095507750912"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)
    member.guild.channels.cache.get(welcomeChannelId).send(" https://c.tenor.com/TTUYiUL3h5kAAAAC/goku-son.gif")
})


client.slashcommands = new Discord.Collection() 

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadSlashCommands(bot, false)
 
client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return 
    if (!interaction.inGuild()) return interaction.reply("This command can only be used in a server")

    const slashcmd = client.slashcommands.get(interaction.commandName)

    if (!slashcmd) return interaction.reply("Invalid slash command")

    if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
        return interaction.reply("You do not have permission for this command")

    slashcmd.run(client, interaction)
})

client.login(process.env.TOKEN)