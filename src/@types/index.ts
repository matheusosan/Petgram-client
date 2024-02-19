export interface IUser {
  username: string;
  id: number;

  posts?: IPosts[];
}

export interface IAuthenticatedUser {
  id: number;
  username: string;
}
export interface IPosts {
  id: number;
  filename: string;
  description?: string;
  photoUrl: string;
  createdAt: string;
  author: IUser;
}

export interface IProfile {
  id: number;
  username: string;
  posts: IPosts[];
  followedBy?: IFollowers[];
  following?: IFollowing[];
}

export interface IFollowing {
  id: number;
  username: string;
}

export interface IFollowers {
  id: number;
  username: string;
}
