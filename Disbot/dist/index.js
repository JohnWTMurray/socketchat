"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dontenv = __importStar(require("dotenv"));
dontenv.config();
const client = new discord_js_1.Client({
    intents: [
        "DirectMessages", "Guilds", "MessageContent",
        "GuildVoiceStates", "GuildModeration", "GuildMessages",
        "GuildMembers", "GuildBans"
    ]
});
client.on('messageCreate', (msg) => {
    msg.reply("hi");
});
client.on('ready', () => {
    console.log("live");
    client.guilds.client.users.cache.each(user => console.log(user.displayName));
    // client.guilds.cache.forEach(guild => {
    //   guild.members.cache.forEach(member => {
    //     console.log(member.user.username);
    //   })
    // });
});
client.login(process.env.TOKEN);
