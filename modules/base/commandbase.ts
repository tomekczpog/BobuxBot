/**
 * @class CommandBase is used when creating a new command
 * @see ping.ts in modules for a example
 */

import {Message, PermissionResolvable, User} from "discord.js";
import {ArgumentBase} from "../../utilities/argument/argumentinfo";
import {Command} from "../../utilities/command";
import {checks} from "../../utilities/commandchecks";

export abstract class CommandBase {
    name: string;
    arguments: checks[];
    permission: PermissionResolvable | undefined;


    /**
     *
     * @param name the name of the command
     * @param commandArguments command's arguments
     */
    constructor(name: string, ...commandArguments: checks[]) {
    	this.name = name.toLocaleLowerCase();
    	this.arguments = commandArguments;
    }

    /**
     * sets permission to execute command
     * @param permission the permission to be set
     */
    public setPermission(permission: PermissionResolvable) {
    	this.permission = permission;
    }


    /**
     * Is message provided a proper command invocation
     */
    public async checkMessage(message: Message) {
    	const args: string[] = message.content.split(" ");
    	const channel = message.channel;
    	const command = message as Command;


    	/**
         *
         */

    	if (this.permission &&
             message.member?.hasPermission(this.permission)
    	) return;

    	/**
         * if there are no arguments
         */
    	if (this.arguments.length == 0 &&
            args.length == 1
    	) return this.run(command);

    	/**
         * If provided arguments differ in length
         */
    	if (args.length != this.arguments.length) {
    		return channel.send("Invalid arguments length");
    	}

    	/**
         * Check all arguments
         */
    	for (let i = 0; i < this.arguments.length; i++) {
    		const userInput = args[i];
    		const argument = this.arguments[i];
    		const result = await argument.check(userInput);
    		if (typeof result == "boolean") {
    			return channel.send(argument.getErrorMessage(userInput));
    		}
    		command.addToArgs(result, userInput);
    	}

    	return this.run(command);
    }

    public abstract run(message: Command): void
}
