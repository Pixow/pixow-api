import * as qs from "qs";
import { Base } from "../base";
import { Avatar, CreateOrUpdateAvatarDto, SearchAvatarsParams } from "./types";

const resourceName = "avatar";

export class Avatars extends Base {
  public getUserAvatars(userId: string, params?: SearchAvatarsParams) {
    let query = `${resourceName}/${userId}/list?`;

    if (params) {
      query += qs.stringify(params);
    }

    return this.request<Avatar[]>(query);
  }

  public getAllAvatars(params?: SearchAvatarsParams) {
    let query = `${resourceName}/list?`;

    if (params) {
      query += qs.stringify(params);
    }
    return this.request<Avatar[]>(query);
  }

  public createAvatar(params: CreateOrUpdateAvatarDto) {
    return this.request(`${resourceName}/create`, {
      method: "POST",
      body: JSON.stringify(params),
    });
  }

  public updateAvatar(params: CreateOrUpdateAvatarDto) {
    return this.request(`${resourceName}/update/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params),
    });
  }
}
