const Discord = require("discord.js")
const fs = require("fs")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)
            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle('__Help Command!__')
            .addField('***Awesome alts that you can get:***', '­­­')
            .addField('`MC Java Edition:`', `*>mcgen*`)
            .addField('`Spotify:`', `*>spotifygen*`)
            .addField('`Steam:`', `*>steamgen [NEW]*`)
            .addField('`Origin:`', `*>origingen*`)
            .addField('`Nordvpn:`', `*>nordvpngen*`)
            .addField('`Hulu:`', `*>hulugen*`)
            .addField('`Disney+:`', `*>disneygen*`)
            .addField(`Donate to help the Owner!!\nDo: **>donate**`, '­­­')
            .addField(`You can suggest your accounts idea!\nDo: **>suggest [alts idea]**`, '­­­')
            .setThumbnail(message.author.avatarURL)
            .setColor(hex)
            .setTimestamp()
            .setFooter(`Generated by: ${message.author.tag}`)
            message.channel.send(embed)
}