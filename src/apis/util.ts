import { SdkClient } from "../common/sdkclient";

export interface GetQiniuTokenDto {
  name: string;
}

export class UtilApi {
  constructor(private client: SdkClient) {}

  public getQiniuToken(data: GetQiniuTokenDto): Promise<any> {
    return this.client.post("/qiniu_token", data);
  }
}
