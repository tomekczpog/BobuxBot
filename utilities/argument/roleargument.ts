import {Client, MessageMentions} from "discord.js";
import {client} from "../..";
import {ArgumentBase, Discord} from "../../dependencies";
import {checks} from "../commandchecks";
import {value} from "./argumentinfo";

/**
 * This argument type checks if a provided string is a role
 */
export class RoleArgument extends ArgumentBase {
	constructor() {
		super("Expected a role.");
	}

	async check(argument: string): Promise<boolean | value> {
		const regex = /[^<@&>]/g;
		const match = argument.match(regex);
		if (match?.length == 1) {
			return await client.users.fetch(match[0]) || false;
		}
		return false;
	}
}
