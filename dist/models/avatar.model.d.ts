export interface CreateOrUpdateAvatarDto {
    name: string;
    type?: string;
    version?: number;
    parts?: string[];
    avatar_slot?: string;
    tags?: string[];
}
export declare enum AvatarVisibility {
    PRIVATE = "Private",
    PUBLIC = "Public"
}
export interface Owner {
    _id: string;
    username: string;
    nickname: string;
}
export declare class Avatar {
    _id: string;
    owner: Owner;
    tags: string[];
    name: string;
    description: string;
    visibility: AvatarVisibility;
    createdAt: Date;
    updatedAt: Date;
    parts: string[];
    archive: boolean;
    type: string;
    version?: number;
    avatar_slot?: string;
}
