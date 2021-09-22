import * as qs from "qs";
import { QueryParams } from "../models/global.model";
import { Avatar, CreateOrUpdateAvatarDto } from "../models/avatar.model";
import { SdkClient } from "../common/sdkclient";
import { plainToClass } from "class-transformer";


export class AvatarApi {
  constructor(private client: SdkClient) {}

  public listUserAvatars(
    userId: string,
    query: QueryParams = { page: 1, pageSize: 20 }
  ) {
    const q = qs.stringify(Object.assign(query, { archive: false }));
    return this.client
      .get(`/avtar/${userId}/list?${q}`)
      .then((res) => {
        const {total, list} = res.data
        return {
          total,
          list: plainToClass(Avatar, list),
        };
      });
  }

  public listAvatars(query: QueryParams = { page: 1, pageSize: 20 }) {
    const q = qs.stringify(query);

    return this.client.get(`/avatar/list?${q}`).then(res => {
      const {total, list} = res.data;
      return {
        total,
        list: plainToClass(Avatar, res.data)
      }
    })
  }

  public createAvatar(avatar: CreateOrUpdateAvatarDto) {
    return this.client.post("/avatar/create", avatar)
  }

  public updateAvatar(id: string, updateDto: CreateOrUpdateAvatarDto) {
	  return this.client.post(`/avatar/update/${id}`, updateDto)
  }
}
