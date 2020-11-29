import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IPostRequestModel, IPostResponseModel, IResponseModel } from '../models/post.model';
import { ApiConstants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  viewPostsById(id: string): Observable<IResponseModel<IPostResponseModel>> {
    return this.http.get<IResponseModel<IPostResponseModel>>(ApiConstants.VIEW_POSTS_BY_ID(id));
  }

  viewAllPosts(): Observable<IResponseModel<IPostResponseModel[]>> {
    return this.http.get<IResponseModel<IPostResponseModel[]>>(ApiConstants.VIEW_ALL_POSTS());
  }

  savePost(post: IPostRequestModel): Observable<IResponseModel<IPostResponseModel>> {
    return this.http.post<IResponseModel<IPostResponseModel>>(ApiConstants.SAVE_POST(), post);
  }

  editPost(post: IPostRequestModel, id: string): Observable<IResponseModel<IPostResponseModel>> {
    return this.http.put<IResponseModel<IPostResponseModel>>(ApiConstants.EDIT_POST(id), post);
  }
}
