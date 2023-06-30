require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandler(client);

//method for role selection.
client.on('interactionCreate', async (interaction) => {
  if(interaction.isButton()) {
      await interaction.deferReply({ ephemeral: true });

      const role = interaction.guild.roles.cache.get(interaction.customId);
      if (!role) {
        interaction.editReply({
          content: "I couldn't find that role",
        });
        return;
      }
      const hasRole = interaction.member.roles.cache.has(role.id);
  
      if (hasRole) {
        await interaction.member.roles.remove(role);
        await interaction.editReply(`The role ${role} has been removed.`);
        return;
      }
      await interaction.member.roles.add(role);
      await interaction.editReply(`The role ${role} has been added.`);
  }
  if(!interaction.isChatInputCommand()) return;
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if(message.content === 'bruh') {
    message.channel.send('these nuts');
  }

  if(message.content ==="RAHHHH") {
    message.channel.send('https://media3.giphy.com/media/BGPkJPn38HC5E44NgC/200w.gif?cid=6c09b952x9pq6067za440c9r4wgjnfnvizqzy26y36tfvgsw&ep=v1_gifs_search&rid=200w.gif&ct=g');
  }
});

client.login(process.env.TOKEN);