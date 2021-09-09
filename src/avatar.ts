import { AxiosInstance } from "axios";
import * as qs from "qs";
import { QueryParams } from "./type";

export interface CreateOrUpdateAvatarDto {
	name: string;
	parts: string[];
	type: string;
	avatar_slot?: string;
	tags?: string[]
}


export class AvatarApi {
  constructor(private _axios: AxiosInstance) {}

  public listUserAvatars(
    userId: string,
    query: QueryParams = { page: 1, pageSize: 20 }
  ) {
    const q = qs.stringify(Object.assign(query, { archive: false }));
    return this._axios
      .get(`/avtar/${userId}/list?${q}`)
      .then((res) => res.data);
  }

  public listAvatars(query: QueryParams = { page: 1, pageSize: 20 }) {
    const q = qs.stringify(query);

    return this._axios.get(`/avatar/list?${q}`).then((res) => res.data);
  }

  public createAvatar(avatar: CreateOrUpdateAvatarDto) {
    return this._axios.post("/avatar/create", avatar).then(res => res.data)
  }

  public updateAvatar(id: string, updateDto: CreateOrUpdateAvatarDto) {
	  return this._axios.post(`/avatar/update/${id}`, updateDto).then(res => res.data)
  }
}
