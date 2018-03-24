const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
const aysync = require('async');


const config = require("./config.json");

client.on("ready", function() {
    console.log("life-bot-v2-moderation");
});

client.on("ready", () => {
    console.log("Server Count: " + client.guilds.size);
client.user.setPresence({
afk: false,
status: 'online',
game: {
    name: "life bot moderation | -moderation | " + client.guilds.size + " servers.",
    type: 3,
    url: "https://www.twitch.tv/l00py1"
}
})
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
  });
  
  client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
      
    // This is the best way to define args. Trust me.
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // The list of if/else is replaced with those simple 2 lines:
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.error(err);
    }

  });

client.login(process.env);
