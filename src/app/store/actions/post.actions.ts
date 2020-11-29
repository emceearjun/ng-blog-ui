import { createAction, props } from '@ngrx/store';
import {
  IPostRequestModel,
  IPostResponseModel,
  IResponseModel,
} from '../../models/post.model';
import { PostActionTypes } from './action-types';

const fetchAllPosts = createAction(PostActionTypes.FETCH_ALL_POSTS);

const fetchAllPostsSuccess = createAction(
  PostActionTypes.FETCH_ALL_POSTS_SUCCESS,
  props<{ response: IResponseModel<IPostResponseModel[]> }>()
);

const fetchAllPostsFailure = createAction(
  PostActionTypes.FETCH_ALL_POSTS_FAILURE,
  props<{ response: IResponseModel<any> }>()
);

const savePost = createAction(
  PostActionTypes.SAVE_POST,
  props<{ post: IPostRequestModel }>()
);

const editPost = createAction(
  PostActionTypes.EDIT_POST,
  props<{ post: IPostRequestModel, id: string }>()
);

const savePostSuccess = createAction(
  PostActionTypes.SAVE_POST_SUCCESS,
  props<{ response: IResponseModel<IPostResponseModel> }>()
);

const savePostFailure = createAction(
  PostActionTypes.SAVE_POST_FAILURE,
  props<{ response: IResponseModel<IPostResponseModel> }>()
);

export const PostActions = {
  fetchAllPosts,
  fetchAllPostsSuccess,
  fetchAllPostsFailure,
  savePost,
  editPost,
  savePostSuccess,
  savePostFailure,
};
