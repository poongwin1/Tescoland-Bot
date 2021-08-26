const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })
const config = require("./config.json");
const welcome = require("./welcome");

client.on("ready", () => {
  console.log("Our Discord bot is online");

  welcome(client);
});

client.login(config.token);