import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPostResponseModel } from '../models/post.model';
import { BlogService } from './blog.service';

@Injectable({
  providedIn: 'root',
})
export class ViewPostResolver implements Resolve<{ post: IPostResponseModel, edit: boolean }> {
  constructor(private blogService: BlogService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ post: IPostResponseModel, edit: boolean }> {
    return this.blogService.viewPostsById(route.paramMap.get('postId')).pipe(
      map((post) => {
        return {
          post: post.payload,
          edit: (route.url[0].path === "edit")
        }
      }),
      catchError((error) => {
        this.router.navigate(['/post-not-found']);
        return EMPTY;
      })
    );
  }
}
