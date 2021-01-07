import { AxiosInstance } from "axios";

export interface IAuthApi {
  editorSignin(account: string, password: string): Promise<any>;
  refreshToken(token: string, refreshToken: string): Promise<any>;
}

export class AuthApi {
  constructor(private _axios: AxiosInstance) {}

  public editorSignin(account: string, password: string): Promise<any> {
    return this._axios.post("/account/editor_signin", {
      account,
      password,
    });
  }

  public refreshToken(token: string, refreshToken: string): Promise<any> {
    return this._axios.post("/account/refresh_token", {
      token,
      refreshToken,
    });
  }
}
