import {MessageMentions} from "discord.js";
import {ArgumentBase} from "./argumentinfo";

/**
 * This argument type checks if a provided string is a string
 */
export class StringArgument extends ArgumentBase {
	constructor() {
		super("Expected a string.");
	}

	async check(argument: string) {
		return true;
	}
}
