const Discord = require("discord.js")
const fs = require("fs")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)
            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);h
            let embed = new Discord.RichEmbed()
            .setTitle('Donate!')
            .addField(`✔️Donate to keep this project **__Alive__*qnq*!`, `[***Here!!***](https://discord.com/channels/815962135469228102/821783378638274640/821810474365485056)`, true)
            .setThumbnail(message.author.avatarURL)
            .setColor(hex)
            .setTimestamp()
            .setFooter(`Generated by: ${message.author.tag}`)
            message.channel.send(embed)
}