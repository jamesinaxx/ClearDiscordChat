const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
require('dotenv').config();


client.on('ready', () => {
    client.user.setActivity('Why do I exist?')
    console.log('Logged in as ' + client.user.tag);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.member.hasPermission('ADMINISTRATOR') || message.channel.type === 'dm') return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    async function clear() {
        if (command === 'clear') {
            console.log(`Clearing the chat in ${message.channel.name}`);
            var message_size = 100;
            while (message_size == 100) {
                await message.channel.bulkDelete(100)
                    .then(messages => message_size = messages.size)
                    .catch(console.error);
            }
            message.channel.send(`<@${message.author.id}>\n Thou chat hath been cleareth!`);
            console.log(`Cleared chat in ${message.channel.name}`);
        };
    };
    clear();
});

client.login(process.env.TOKEN)