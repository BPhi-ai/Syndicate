const {EmbedBuilder} = require('discord.js');
module.exports = {
    name: 'embed',
    description: 'sends an example embed.',
    // devOnly: Boolean,
    testOnly: true,
    deleted: false,
  
    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
          .setTitle('Embed title')
          .setDescription('This is an embed description')
          .setColor('Random')
          .addFields(
            {
              name: 'Field title',
              value: 'Some random value',
              inline: true,
            },
            {
              name: '2nd Field title',
              value: 'Some random value',
              inline: true,
            }
          );
    
        interaction.reply({ embeds: [embed] });
    },
  };