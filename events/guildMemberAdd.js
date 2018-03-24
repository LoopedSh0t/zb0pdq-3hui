const Discord = require('discord.js'); // I'm requiring discord.js since we will be using Embeds.

exports.run = (client, member, message, args, tools) => {

    console.log('User ' + member.user.username + ' has joined the server')
    console.log(member)

const embed = new Discord.RichEmbed()
    .setColor(0xFFF00)
    .setTitle(`**${member.user.username}**, has joined the server! :white_check_mark:`)
    .setAuthor(member.user.tag, member.user.displayAvatarURL)
    .setTimestamp()
    .setFooter("New member")
    .setDescription("Member have been added to **Player/Joueur**")
    client.channels.get('426990832294428673').send(embed);
}