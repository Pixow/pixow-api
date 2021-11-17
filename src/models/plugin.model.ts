import { User } from "./user.model";

export class PluginRecord {
	pid: string;
	name: string;
	description: string;
	owner: User;
	author: string;
	version: string;
}