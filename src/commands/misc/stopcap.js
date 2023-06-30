module.exports = {
    name: 'stopthecap',
    description: 'deny all allegations',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    deleted: false,
  
    callback: (client, interaction) => {
      interaction.reply(`https://media.tenor.com/0R2mKr3h3gEAAAAC/stop-the-cap-cap.gif`);
    },
  };