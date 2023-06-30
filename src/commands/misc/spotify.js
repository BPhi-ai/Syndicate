module.exports = {
    name: 'spotify',
    description: 'displays server spotify playlist',
    deleted: false,

    callback: (client, interaction) => {
        interaction.reply(`https://open.spotify.com/playlist/0Em5j7xqEUKqQEczoxNfbw?si=3cbd872bcf924960`);
    }
}