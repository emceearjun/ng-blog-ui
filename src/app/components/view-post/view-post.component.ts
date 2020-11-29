import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/models/app-state.model';
import { IPostResponseModel } from 'src/app/models/post.model';
import { PostActions } from 'src/app/store/actions/post.actions';
import { selectAllPosts, selectRecentPosts } from 'src/app/store/selectors/post.selector';

@Component({
  selector: 'view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,

    private store: Store<{ postsState: AppState }>
  ) {
    this.store.dispatch(PostActions.fetchAllPosts());
  }

  post$: Observable<any>;
  recentPosts$: Observable<IPostResponseModel[]>;

  ngOnInit(): void {
    this.recentPosts$ = this.store.select(selectRecentPosts);
    this.post$ = this.route.data.pipe(
      map((params) => {
        return params.post.post;
      })
    );
  }
}
