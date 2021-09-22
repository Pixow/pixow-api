import { User } from "./user.model";

export class Plugin {
	pid: string;
	name: string;
	description: string;
	owner: User;
	author: string;
	version: string;
}