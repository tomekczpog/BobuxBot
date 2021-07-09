import { Channel } from "diagnostic_channel";
import { User } from "discord.js";
export type value = User | Channel | string | number;

/**
 * @class used for storing important data
 */
export abstract class ArgumentBase {
	errorMessage: string;

	/**
	 * @param name the command name
	 * @param errorMessage the message that appears when the argument is invalid
	 */
	constructor(errorMessage: string) {
		this.errorMessage = errorMessage;
	}

	public equals(object: string): boolean {
		if (object == this.errorMessage) {
			return true;
		}
		return false;
	}

	public getErrorMessage(argument: string): string {
		return `${argument} <-- ${this.errorMessage}`;
	}

	/**
	 * check if the argument fits the requirement
	 * @see userarguments.ts for a example
	 * @param argument the string to check
	 */
	abstract check(argument: string): Promise<boolean | value>;
}
