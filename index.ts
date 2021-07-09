import { Discord, dotenv } from "./dependencies";
import { CommandBase } from "./modules/base/commandbase";
import { PingCommand } from "./modules/ping";

export const client = new Discord.Client()

const prefix = "!";
const modules: [CommandBase] = [
    new PingCommand()
];

client.on('ready', () => {
    console.log(`Succesfully logged in as ${client.user?.tag}`)
})

client.on('message', (message) => {
    let content = message.content;
    let cleanmessage = content
        .substring(prefix.length)
        .toLowerCase()

    if(
        !content.startsWith(prefix) || 
        message.author.bot
    ) return;

    modules.forEach(module => {
        if(cleanmessage.startsWith(module.name))
           module.checkMessage(message)
    });
})

dotenv.config();
client.login(process.env.BOT_TOKEN)