import {MessageMentions} from "discord.js";
import {stringify} from "querystring";
import {client} from "../..";
import {ArgumentBase} from "../../dependencies";

/**
 * This argument type checks if a provided string is a channel
 */
export class ChannelArgument extends ArgumentBase {
	constructor() {
		super("Expected a channel.");
	}

	async check(argument: string) {
		const regex = /[^<#>]/g;
		const match = argument.match(regex);
		if (match?.length == 1) {
			return await client.users.fetch(match[0]) || false;
		}
		return false;
	}
}
