import { QueryParams } from "src";
import { Avatar, CreateOrUpdateAvatarDto } from "src/models/avatar.model";
import { SdkClient } from "../common/sdkclient";
export declare class AvatarApi {
    private client;
    constructor(client: SdkClient);
    listUserAvatars(userId: string, query?: QueryParams): Promise<{
        total: any;
        list: Avatar;
    }>;
    listAvatars(query?: QueryParams): Promise<{
        total: any;
        list: Avatar;
    }>;
    createAvatar(avatar: CreateOrUpdateAvatarDto): Promise<any>;
    updateAvatar(id: string, updateDto: CreateOrUpdateAvatarDto): Promise<any>;
}
