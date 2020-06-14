const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const embedcolors = require("../colors.json");
const moment = require("moment");

module.exports = {
    name: "rules",
    description: "server rules",
    category: "null",
    run: async (bot, message, args) => {
      let sEmbed = new Discord.MessageEmbed()
      .setColor(embedcolors.GREEN)
      .setTitle("Discord/Server Rules")
      .setAuthor(`${message.guild.name} rules`)
      .addFields(
        {name: ''}
      )
      .setFooter(`Bot Created by | SnakeGames#1437`, bot.user.displayAvatarURL());
      message.channel.send({embed: sEmbed});
      message.channel.send("@everyone READ THE RULES!")
    }
}
module.exports.config = {
    name: "rules",
    aliases: ["rules"]
  }
