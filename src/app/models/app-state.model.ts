import { IPostResponseModel } from './post.model';

export interface AppState {
  allPosts: IPostResponseModel[];
  loading: boolean;
  loaded: boolean;
}
