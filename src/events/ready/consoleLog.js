const {ActivityType} = require('discord.js');

let status = [
    {
      name: 'Under Ctrl',
      type: ActivityType.Streaming,
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Chaos`s League Twitch Stream',
      type: ActivityType.Streaming,
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      name: 'Brozty`s Music Video',
      type: ActivityType.Watching,
    },
    {
      name: 'Spotify',
      type: ActivityType.Listening,
    },
];

module.exports = (client) => {
    console.log(`✅ ${client.user.username} is online.`);

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000);
}
