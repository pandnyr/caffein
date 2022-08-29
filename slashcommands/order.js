const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")

const drinks = [
     { name: "Latte", value: "latte"},
     { name: "Espresso", value: "espresso" },
     { name: "Cold Brew", value: "cold brew"},
     { name: "Classic Tea", value: "classic tea"},
     { name: "Sakura Tea", value: "sakura tea"},

 ]


const run = async (client, interaction) => {
    
    let drink = interaction.options.getString('drink')
    let member = interaction.options.getMember('member')
    
 
    if (!drink) return interaction.reply("There is no such drink...")
    
    try {
       // await interaction.channel.send(`${interaction.member.tag} ordered ${drink}`)
        return interaction.reply(`${interaction.user.tag} **ordered** ${drink} for ${member.user.tag}`)
    }
    catch(err){
        if (err){
            console.error(err)
            return interaction.reply(`Failed to order`)
        }
    }
 }
 
//  const order = new SlashCommandBuilder()
//     .setName('order')
//     .setDescription('Order your caffein!')
//     .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages || PermissionFlagsBits.ViewChannel)
//     .addStringOption(option =>
//         option
//         .setName('drink')
//         .setDescription('Select your fav drink...')
//         .setRequired(true)
//         .Choices(
//             { name: "Latte", value: "latte"},
//             { name: "Espresso", value: "espresso" },
//             { name: "Cold Brew", value: "cold_brew"},
//             { name: "Classic Tea", value: "classic_tea"},
//             { name: "Sakura Tea", value: "sakura_tea"},
//         )
//         )



 module.exports = {
    name: "order",
    description: "Order your caffein!",
    default_member_permissions: ([PermissionFlagsBits.SendMessages || PermissionFlagsBits.ViewChannel]),
    // perm: "GUILD_MEMBERS",
    options: [
        {
            name: "drink",
            description: "Select your favorite drink!",
            required: true,
            choices: drinks,
            type: '3',
        },
        {
            name: "member",
            description: "Who are you ordering for?",
            required: true,
            type: '6',
        }
    ],
    run
 }

