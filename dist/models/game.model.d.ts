import { User } from "./user.model";
export declare enum Visibility {
    Private = "Private",
    Internal = "Internal",
    Public = "Public"
}
export declare class GameVersion {
    gameConfig: string[];
    createdAt: string;
    version: string;
    commit: string;
    constructor(init?: Partial<GameVersion>);
}
export declare class Game {
    _id: string;
    serverStatus: number;
    cover: string;
    tags: string[];
    visibility: Visibility;
    template: boolean;
    thumbnails: string[];
    version: string;
    lastVersion: string;
    liked_count: number;
    unliked_count: number;
    recommendedLevel: number;
    owner: User;
    name: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
    releaseVersions: GameVersion[];
    pastVersions: GameVersion[];
    visitsUpdateAt: string;
    positiveRateUpdateAt: string;
    incomeTuDingUpdateAt: string;
    constructor(data?: Partial<Game>);
    getUri(version: string): string;
    get directory(): string;
    get pi(): string;
    get package(): string;
}
