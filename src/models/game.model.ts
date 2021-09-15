import { User } from "./user.model";

export enum Visibility {
  Private = "Private",
  Internal = "Internal",
  Public = "Public",
}

export class GameVersion {
  gameConfig: string[];
  createdAt: string;
  version: string;
  commit: string;

  constructor(init?: Partial<GameVersion>) {
    Object.assign(this, init);
  }
}

export class Game {
  _id: string;
  serverStatus: number;
  cover: string; // 封面图
  tags: string[];
  visibility: Visibility;
  template: boolean;
  thumbnails: string[];
  version: string; // 当前运行的发布版本
  lastVersion: string; // 最后修改版本
  liked_count: number;
  unliked_count: number;
  recommendedLevel: number;
  owner: User;
  name: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  releaseVersions: GameVersion[];
  pastVersions: GameVersion[];
  visitsUpdateAt: string;
  positiveRateUpdateAt: string;
  incomeTuDingUpdateAt: string;

  constructor(data?: Partial<Game>) {
    Object.assign(this, data);
  }

  public getUri(version: string) {
    // mjxmjx\game\5f1a49e2b5ad7b67aae31170\0.0.4\5f1a49e2b5ad7b67aae31170.zip
    return `${this.owner.username}/game/${this._id}/${version}/${this._id}.zip`;
  }

  public get directory() {
    return `${this.owner.username}/game/${this._id}`;
  }

  public get pi() {
    return `${this.directory}/${this._id}.pi`;
  }

  public get package() {
    return `${this.directory}/package.json`;
  }
}
