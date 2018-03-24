const Discord = require("discord.js");
const aysync = require('async');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);

    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");
    let banEmbed = new Discord.RichEmbed()

    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);
  
    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find reports channel.");
  
    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}