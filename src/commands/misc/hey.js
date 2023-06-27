module.exports = {
  name: 'hey',
  description: 'replies with hey!',
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    interaction.reply(`Hey!`);
  },
};