const run = async (client, interaction) => {
    let member = interaction.options.getMember("user")
    let reason = interaction.options.getString("reason") || "No reason given"
 
    if (!member) return interaction.reply("Invalid member")
 
    try {
        await interaction.guild.bans.create(member, {
            reason
        })
        return interaction.reply(`${member.user.tag} has been banned out for ${reason}`)
    }
    catch(err){
        if (err){
            console.error(err)
            return interaction.reply(`Failed to ban ${member.user.tag}`)
        }
    }
 }
 
 module.exports = {
    name: "ban",
    description: "Ban-hammer ban from the sky for the member",
    perm: "BAN_MEMBERS",
    options: [
        {
            name: "user", description: "The user to timeout",
            required: true, type: '6'
        },
        {
            name: "reason",
            description: "reason for punishment",
            type: '3',
            required: false
        }
    ],
    run
 }