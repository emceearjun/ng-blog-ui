import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { IPostResponseModel, IResponseModel } from 'src/app/models/post.model';
import { BlogService } from '../../services/blog.service';
import { PostActions } from '../actions/post.actions';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private blogService: BlogService,
    private router: Router,
    private messageService: MessageService
  ) {}

  savePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.savePost),
      switchMap((props) => {
        return this.blogService.savePost(props.post).pipe(
          map((response: IResponseModel<IPostResponseModel>) => {
            console.log(response);
            return PostActions.savePostSuccess({ response });
          }),
          catchError((err: HttpErrorResponse) => {
            console.log(err);
            return of(
              PostActions.savePostFailure({ response: err.error as IResponseModel<IPostResponseModel> })
            );
          })
        );
      })
    )
  );

  editPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.editPost),
      switchMap((props) => {
        return this.blogService.editPost(props.post, props.id).pipe(
          map((response: IResponseModel<IPostResponseModel>) => {
            console.log(response);
            return PostActions.savePostSuccess({ response });
          }),
          catchError((err: HttpErrorResponse) => {
            console.log(err);
            return of(
              PostActions.savePostFailure({ response: err.error as IResponseModel<IPostResponseModel> })
            );
          })
        );
      })
    )
  );

  savePostSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.savePostSuccess),
        tap((props) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: props.response.message,
          });
          return this.router.navigate([`/view/${props.response.payload.slug}`]);
        })
      ),
    {
      dispatch: false,
    }
  );

  savePostFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.savePostFailure),
        tap((props) => {
          return this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: props.response.message
          });
        })
      ),
    {
      dispatch: false,
    }
  );

  fetchAllPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.fetchAllPosts),
      switchMap(() => {
        return this.blogService.viewAllPosts().pipe(
          map((response: IResponseModel<IPostResponseModel[]>) => {
            console.log(response);
            return PostActions.fetchAllPostsSuccess({ response });
          }),
          catchError((err: HttpErrorResponse) => {
            console.log(err);
            return of(
              PostActions.fetchAllPostsFailure({ response: err.error as IResponseModel<any> })
            );
          })
        );
      })
    )
  );

  fetchAllPostsFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.fetchAllPostsFailure),
        tap((props) => {
          return this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: props.response.message
          });
        })
      ),
    {
      dispatch: false,
    }
  );
}
