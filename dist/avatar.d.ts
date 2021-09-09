import { AxiosInstance } from "axios";
import { QueryParams } from "./type";
export interface CreateOrUpdateAvatarDto {
    name: string;
    parts: string[];
    type: string;
    avatar_slot?: string;
    tags?: string[];
}
export declare class AvatarApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    listUserAvatars(userId: string, query?: QueryParams): Promise<any>;
    listAvatars(query?: QueryParams): Promise<any>;
    createAvatar(avatar: CreateOrUpdateAvatarDto): Promise<any>;
    updateAvatar(id: string, updateDto: CreateOrUpdateAvatarDto): Promise<any>;
}
