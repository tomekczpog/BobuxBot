import { Channel } from "diagnostic_channel";
import { Client, DMChannel, Message, NewsChannel, TextChannel, User } from "discord.js";
import { value } from "./argument/argumentinfo";

export class Command extends Message {
    args: argument[] = [];

    constructor(client: Client, data: object, channel: TextChannel | DMChannel | NewsChannel, args: argument[]) {
        super(client, data, channel);
    }

    public addToArgs(object: value, arg: string) {
        var commandArgument = new argument(arg);

        if (typeof object == "string") 
            return

        if (object instanceof MessageChannel)
            commandArgument.channel = object
        if (object instanceof User)
            commandArgument.mention = object
        
        this.args.push(commandArgument)        
    }
}

class argument {
    content: string;
    channel?: MessageChannel
    mention?: User

    /**
     * @param content content of the argument
     */
    constructor(content: string) {
        this.content = content;
    }
}