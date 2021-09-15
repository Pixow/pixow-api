export interface CreateOrUpdateAvatarDto {
  name: string;
  parts: string[];
  type: string;
  avatar_slot?: string;
  tags?: string[];
}

export enum AvatarVisibility {
  PRIVATE = "Private",
  PUBLIC = "Public",
}

export class Avatar {
  owner: string;
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
}
