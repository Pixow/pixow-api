import { SdkClient } from "../common/sdkclient";

export interface IAuthApi {
  editorSignin(account: string, password: string): Promise<any>;
  refreshToken(token: string, refreshToken: string): Promise<any>;
}

export class AuthApi {
  constructor(private client: SdkClient) {}

  public editorSignin(account: string, password: string): Promise<any> {
    return this.client.post("/account/editor_signin", {
      account,
      password,
    })
  }

  public refreshToken(token: string, refreshToken: string): Promise<any> {
    return this.client.post("/account/refresh_token", {
      token,
      refreshToken,
    })
  }
}
