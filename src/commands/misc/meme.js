const {EmbedBuilder} = require('discord.js');

module.exports = {
    name: 'meme',
    description: 'generates a random meme.',
	
    callback: (client, interaction) => {
        const memes = [
            'https://programmerhumor.io/wp-content/uploads/2022/12/programmerhumor-io-cloud-memes-programming-memes-7ef72214ef97c9e-758x743.jpg',
            'https://qph.cf2.quoracdn.net/main-qimg-17c26e995a1534b31b0c00414c1bc0ac-lq',
            'https://imgix.ranker.com/user_node_img/50100/1001983281/original/recursion-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
            'https://imgix.ranker.com/user_node_img/50100/1001983271/original/why-programmers-like-cooking-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
            'https://imgix.ranker.com/user_node_img/50100/1001983254/original/it-makes-you-a-programmer-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
            'https://imgix.ranker.com/user_node_img/50106/1002119094/original/1002119094-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
            'https://imgix.ranker.com/user_node_img/50106/1002119113/original/1002119113-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
            'https://imgix.ranker.com/user_node_img/50100/1001983288/original/how-times-change-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
            'https://i.chzbgr.com/full/9688234496/h8C70E819/is-unacceptable-university-plagiarism-is-unacceptable-work-programmers-man-stole-code-s-not-my-code',
            'https://i.redd.it/hoe18u8uj0a21.jpg',
            'https://preview.redd.it/vl7ryutz1a441.jpg?auto=webp&s=5ba36f4ef13b865fe3ab42999652fe2c60143b70',
            'https://i.imgflip.com/4e9t0j.jpg',
            'https://pbs.twimg.com/media/FTnsNENUUAAepWy.jpg:large',
            'https://i.stack.imgur.com/K1pbr.png',
            'https://i.redd.it/b9z9s9hhe8d81.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv3lbZrVCZtMU_SkdROScw_fZeJBs4pPDFg&usqp=CAU',
            'https://algebra1resources.files.wordpress.com/2018/07/math-meme-math-test-easy-or-wrong1.png',
            'https://st1.latestly.com/wp-content/uploads/2022/03/Funny-Maths-Memes.jpg',
            'https://www.scrolldroll.com/wp-content/uploads/2022/01/funny-maths-memes-17.jpg',
            'https://brighterly.com/wp-content/uploads/2022/03/math-memes-for-kids-14.png',
            'https://www.weareteachers.com/wp-content/uploads/after-sub-meme.png',
            'https://www.weareteachers.com/wp-content/uploads/recess-nice-day-meme.png',
            'https://i.ytimg.com/vi/Ovxrh6Ysh20/maxresdefault.jpg',
            'https://i.ytimg.com/vi/P0ADL0_-Cag/maxresdefault.jpg',
            'https://img.universitystudent.org/1/4/3174/why-are-we-wearing-lab-coat-at-school-lab-protect-from-chemicals-feel-like-a-scientist-feel-like-a-memes.jpg',
            'https://www.boredpanda.com/blog/wp-content/uploads/2022/09/10-63175e4dddb7c__700.jpg',
            'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/14+Hilarious+Memes/back-to-school-memes+front.jpg',
            'https://assets-global.website-files.com/6142245093315b0f29d7878a/615c58004662dd17f3da8499_CS%20memes%201.jpg'
        ];   

        var index = Math.floor(Math.random() * memes.length);   
        const meme = new EmbedBuilder()
            .setImage(memes[index])
        
        interaction.reply({ embeds: [meme] });
	},
};