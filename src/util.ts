import { AxiosInstance } from "axios";

export interface GetQiniuTokenDto {
  name: string;
}

export class UtilApi {
  constructor(private _axios: AxiosInstance) {}

  public getQiniuToken(data: GetQiniuTokenDto): Promise<any> {
    return this._axios.post("/qiniu_token", data);
  }
}
