import { Client } from "discord.js";
import * as dontenv from 'dotenv';

dontenv.config();


const client: Client<boolean> = new Client({
  intents: [
    "DirectMessages", "Guilds", "MessageContent",
    "GuildVoiceStates", "GuildModeration", "GuildMessages",
    "GuildMembers", "GuildBans"
  ]
})


client.on('messageCreate', (msg) => {
  msg.reply("hi");
})

client.on('ready', () => {
  client.guilds.client.users.cache.each(user => console.log(user.displayName));
});



client.login(process.env.TOKEN);


