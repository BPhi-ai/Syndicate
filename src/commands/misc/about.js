const {EmbedBuilder} = require('discord.js');
module.exports = {
    name: 'about',
    description: 'sends a description about what this bot is, including all commands.',
    // devOnly: Boolean,
    testOnly: true,
    deleted: false,
  
    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
          .setTitle('The Syndicate')
          .setDescription('Ajimin Society`s first discord bot in development!')
          .setThumbnail('https://i.imgur.com/AfFp7pu.png')
          .setColor('Random')
          .addFields(
            {
              name: 'Commands',
              value:'These will be the commands for this server (FYI: changes may be implemented in a future update.)',
            },
            { name: '\u200B', value: '\u200B' },
            {
              name: '/memes',
              value: 'generates a random meme',
              inline: true,
            },
            {
              name: '/cute',
              value: 'generates a random cute animal pic',
              inline: true,
            },
            {
              name:'/ping',
              value:'posts current ping value (latency)',
              inline: true,
            },
            {
              name:'/spotify',
              value:'posts spotify playlist of entire server.',
              inline: true,
            },
            {
              name:'/ban',
              value:'bans a player from the server',
              inline: true,
            },
            {
              name:'/timeout',
              value:'timeouts a player from the server temporary.',
              inline: true,
            }
          )
        .setImage('https://i.imgur.com/AfFp7pu.png');
        interaction.reply({ embeds: [embed] });
    },
  };