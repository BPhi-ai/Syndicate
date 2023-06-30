const {EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'cute',
    description: 'endanger chubbs, user beware from maximum cuteness',
    callback: (client, interaction) => {
        const chubb = [
            'https://assets-prd.ignimgs.com/2023/03/31/dqqokoy4tyxphq9evict8kzsohwmxbpa91vw8u2hwby-1680294740156.jpg',
            'https://m.media-amazon.com/images/I/71u80iK7hfL.jpg',
            'https://t3.ftcdn.net/jpg/05/78/05/02/360_F_578050232_C6eX95X0n6m5Mv6GRPSxLhz7ukuAPTif.jpg',
            'https://media2.giphy.com/media/fN535bx9Dv9mckbmIn/giphy.gif',
            'https://media.tenor.com/_SdM0VvbsCUAAAAd/wild-animals-fat.gif',
            'https://media.tenor.com/9rqdeHtSFYQAAAAC/bt21-cute.gif',
            'https://gifdb.com/images/high/chef-kawasaki-and-kirby-mswubkdzyu25mwfn.gif',
            'https://i.gifer.com/3vs.gif',
            'https://dogtime.com/wp-content/uploads/sites/12/2015/05/file_21702_impossibly-cute-puppy-30.jpg',
            'https://dogsnstuff.net/wp-content/uploads/2021/07/Why-are-dogs-so-cute.jpg'
        ];   

        var index = Math.floor(Math.random() * chubb.length);   
        const chubbs = new EmbedBuilder()
            .setImage(chubb[index])

        interaction.reply({ embeds: [chubbs] });
	},
};