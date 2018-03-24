const Discord = require('discord.js'); // I'm requiring discord.js since we will be using Embeds.
 
exports.run = (client, message, args, tools) => {

const embed = new Discord.RichEmbed()
                .setColor(0xffb900)
                .addField("Moderation Command List")
                .addField(".", "`kick <username> <reason>` (A kick command, please mention and have a reason to kick, YOU MUST BE ADMIN.)")
                .addField(".", "`ban <username> <reason>` (A ban command, please mention and have a reason to ban, YOU MUST BE ADMIN.)")
                .addField(".", "`purge <number>` (A Purge command, can delete up to a 100 messages, YOU MUST BE ADMIN.)")
                .addField(".", "`report <username> <reason>` (A report command, please mention and have a reason to report.)")
                .addField(".", "`warn <username> <reason>` (A warn command, please mention and have a reason to warn, YOU MUST BE ADMIN.)")
                .addField(".", "`warnlevel <username>` (A warnlevel command, please mention and have a reason to ban, YOU MUST BE ADMIN.)")
                .addField(".", "`tempmute <username> <1s/m/h/d>` (A warn command, please mention and have a reason to ban, YOU MUST BE ADMIN.)")
                .setFooter("Thanks for using Life Bot Moderation", "https://cdn.discordapp.com/attachments/426982569091792907/426982645914664960/th22UTNWTX.jpg")
                message.channel.sendEmbed(embed);
            }
