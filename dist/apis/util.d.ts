import { SdkClient } from "../common/sdkclient";
export interface GetQiniuTokenDto {
    name: string;
}
export declare class UtilApi {
    private client;
    constructor(client: SdkClient);
    getQiniuToken(data: GetQiniuTokenDto): Promise<any>;
}
