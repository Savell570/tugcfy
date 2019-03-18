 let suggest = args.split().join(' ');
    if(!suggest) return message.channel.send(`Hey ${message.author.username}, you must specify a suggestion!`)

    let suggestChannel = message.guild.channels.find(`name`, 'suggestions');
    
    
    
    
                            var embed = new Discord.RichEmbed()
                               .setTitle('📝Suggestion📝')
                               .setThumbnail(message.author.avatarURL)
                               .addField(`**Suggestion:** *${suggest}*`, '­­­', true)
                               .addField(`**Suggested by:** *${message.author.tag}*`, '­­­', true)
                               .addField(`**Sent in:** *${message.channel.name}*`, '­­­', true)
                               .setColor('PURPLE')
                               .setTimestamp()
                               .setFooter(`Suggestion generated by: ${message.author.username}`, message.author.avatarURL)
                               
    
    let msg = await suggestChannel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
    
    if(!suggestChannel) return message.channel.send({embed: new Discord.RichEmbed()
                                                     .addField(`Hey ${message.author.username}, you must create a channel named: #suggestions !`)
                                                     .setThumbnail(message.author.avatarURL)
                                                     .setColor('PURPLE')
                                                     .setTimestamp()
                                                     .setFooter(`Generated by: ${message.author.username}`, message.author.avatarURL)
                                                    });
    
    
  
  }