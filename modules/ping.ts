import { Command } from "../utilities/command";
import { CommandBase } from "./base/commandbase";

/**
 * a simple command that just responds pong!
 */
export class PingCommand extends CommandBase {
	public run(message: Command): void {
		message.channel.send("Pong!");
	}
	constructor() {
		super("ping");
	}
}
