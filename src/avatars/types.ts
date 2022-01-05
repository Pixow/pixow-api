import { Pagination } from "../base";

export type SearchAvatarsParams = Pagination & {
  keyword?: string;
  sorts?: string[];
};

export enum AvatarVisibility {
  PRIVATE = "Private",
  PUBLIC = "Public",
}

export type Owner = {
  _id: string;
  username: string;
  nickname: string;
};

export type Avatar = {
  _id: string;
  owner: Owner;
  tags: string[];
  name: string;
  description: string;
  visibility: AvatarVisibility;
  createdAt: Date;
  updatedAt: Date;
  parts: string[];
  archive: boolean;
  type: string;
  version?: number;
  avatar_slot?: string;
};

export type CreateOrUpdateAvatarDto = {
  id?: string;
  name: string;
  type?: string;
  version?: number;
  parts?: string[];
  avatar_slot?: string;
  tags?: string[];
};
