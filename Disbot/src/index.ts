import { Client } from "discord.js";


const client: Client<boolean> = new Client({
    intents: []
})
console.log(client);

const msg: string = "Discord Bot";
console.log(msg);
