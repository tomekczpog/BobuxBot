import { ArgumentBase } from "./argument/argumentinfo";
import { ChannelArgument } from "./argument/channelargument";
import { RoleArgument } from "./argument/roleargument";
import { StringArgument } from "./argument/stringargument";
import { UserArgument } from "./argument/userargument";

export type checks = (UserArgument | RoleArgument | ChannelArgument | StringArgument)
type CommandChecks = {
    USER: checks,
    ROLE: checks,
    CHANNEL: checks,
    STRING: checks,
}

/**
 * object containing all types of arguments
 */
export const CommandChecks: CommandChecks = {
    USER: new UserArgument(),
    ROLE: new RoleArgument(),
    CHANNEL: new ChannelArgument(),
    STRING: new StringArgument()
}

