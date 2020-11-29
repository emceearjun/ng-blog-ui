import { createSelector } from '@ngrx/store';
import { IPostResponseModel } from 'src/app/models/post.model';
import { AppState } from '../../models/app-state.model';

export const selectAppState = (state: { postsState: AppState }) =>
  state.postsState;

export const selectAllPosts = createSelector(
  selectAppState,
  (state: AppState) => {
    return state.allPosts;
  }
);

export const selectRecentPosts = createSelector(
  selectAppState,
  (state: AppState) => {
    let newState = [...state.allPosts];
    newState = newState.sort(recentPostsSorter).filter(recentPostsFilter);
    return newState;
  }
);

export const selectLoading = createSelector(
  selectAppState,
  (state: AppState) => {
    return state.loading;
  }
);

export const selectLoaded = createSelector(
  selectAppState,
  (state: AppState) => {
    return state.loaded;
  }
);

function recentPostsSorter(a: IPostResponseModel, b: IPostResponseModel) {
  if (a.lastModified < b.lastModified) {
    return 1;
  }
  else if (a.lastModified > b.lastModified) {
    return -1;
  }
  else {
    return 0;
  }
}
function recentPostsFilter(i: IPostResponseModel, index: number) {
  return index < 3;
}