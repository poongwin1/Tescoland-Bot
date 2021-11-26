const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })
const config = require("./config.json");
const welcome = require("./welcome");

client.on("ready", () => {
  client.user.setActivity('Find the shoplifter', { type: 'PLAYING' })
  console.log("Tescobot is online");
  welcome(client);
});

client.login(config.token);