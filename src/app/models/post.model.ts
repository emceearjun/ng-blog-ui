export interface IResponseModel<T> {
  payload: T,
  success: boolean;
  message: string;
}

export interface IPostRequestModel {
  title: string;
  body: string;
  author: string;
}

export interface IPostResponseModel {
  _id: string;
  postId: string;
  title: string;
  body: string;
  author: string;
  createdAt: number;
  lastModified: number;
  slug: string;
}
