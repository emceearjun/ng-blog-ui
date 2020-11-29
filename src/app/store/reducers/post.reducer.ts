import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import {
  IPostRequestModel,
  IPostResponseModel,
  IResponseModel,
} from '../../models/post.model';
import { PostActions } from '../actions/post.actions';

export const initialState: AppState = {
  allPosts: [],
  loaded: false,
  loading: false,
};

const _postsReducer = createReducer(
  initialState,
  on(PostActions.savePost, onSavePost),
  on(PostActions.editPost, onEditPost),
  on(PostActions.fetchAllPostsSuccess, onFetchAllPostsSuccess)
  //   on(PostActions.savePostSuccess, onSavePostSuccess),
  //   on(PostActions.savePostFailure, onSavePostFailure)
);

export function postsReducer(state: AppState, action: Action) {
  return _postsReducer(state, action);
}

function onSavePost(
  state: AppState,
  props: { post: IPostRequestModel }
): AppState {
  return {
    ...state,
    loading: true,
  };
}

function onEditPost(
  state: AppState,
  props: { post: IPostRequestModel, id: string }
): AppState {
  return {
    ...state,
    loading: true,
  };
}

function onFetchAllPostsSuccess(
  state: AppState,
  props: { response: IResponseModel<IPostResponseModel[]> }
): AppState {
  return {
    ...state,
    allPosts: props.response.payload
  };
}

/* function onSavePostSuccess(
  state: AppState,
  props: { response: IResponseModel<IPostResponseModel> }
): AppState {
  return {
    ...state,
    loading: false,
    loaded: true,
    saveSuccess: true,
    allPosts: [...state.allPosts, props.post],
  };
}

function onSavePostFailure(
  state: AppState,
  props: { response: IResponseModel<IPostResponseModel> }
): AppState {
  return {
    ...state,
    loading: false,
    loaded: true,
    saveSuccess: false,
    error: props.error,
  };
}
 */
