module.exports = {
    name: 'nowords',
    description: 'when you have no words to describe anything imaginable',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    deleted: false,
  
    callback: (client, interaction) => {
      interaction.reply(`https://i.imgflip.com/g9954.jpg?a468840`);
    },
  };