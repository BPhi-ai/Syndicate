const {ActivityType} = require('discord.js');

let status = [
    {
      name: 'stress-free playlist',
      type: ActivityType.Streaming,
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
];

module.exports = (client) => {
    console.log(`✅ ${client.user.username} is online.`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000);
}
