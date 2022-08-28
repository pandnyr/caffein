
const amounts = [
    { name: "1", value: 1},
    { name: "10", value: 10 },
    { name: "20", value: 20 },
    { name: "30", value: 30 },
    { name: "50", value: 50 },
    { name: "70", value: 70 },
    { name: "100", value: 100 },
    { name: "500", value: 500 },
    { name: "750", value: 750 },
    { name: "1000", value: 1000}

]



const run = async (client, interaction) => {
    
    let amount = interaction.options.getNumber('amount')
    
 
    if (!amount) return interaction.reply("Invalid amount")
 
    try {
        await interaction.channel.bulkDelete(amount)
        return interaction.reply(`Deleted ${amount} messages!`)
    }
    catch(err){
        if (err){
            console.error(err)
            return interaction.reply(`Failed to clear`)
        }
    }
 }
 
 
 module.exports = {
    name: "clear",
    description: "Clear the chat!",
    perm: "MANAGE_MEMBERS",
    options: [
        {
            name: "amount",
            description: "Clear the chat",
            required: true,
            choices: amounts,
            type: '10'
        }
    ],
    run
 }