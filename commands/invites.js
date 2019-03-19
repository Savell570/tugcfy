const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');

exports.run = async (client, message, args, tools) => {
  let invites = await message.guild.fetchInvites();
  invites = invites.array();
  arraySort(invites, 'uses', { reverse: true });
  let possibleInvites = [['User', 'Uses']];
  invites.forEach(function(invite) {
       possibleInvites.push([invite.inviter.username, invite.uses]);
  })
  const embed = new Discord.RichEmbed()
  .setColor('ORANGE')
  .setTitle('Server Invites', message.author.avatarURL)
  .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\`\``)
  .setTimestamp()
  .setFooter(`Generated by: ${message.author.tag}`);
  
  message.channel.send(embed);
}