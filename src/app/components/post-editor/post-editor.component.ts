import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';
import { IPostResponseModel } from 'src/app/models/post.model';
import { PostActions } from '../../store/actions/post.actions';

@Component({
  selector: 'post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss'],
})
export class PostEditorComponent implements OnInit {
  editPostForm: FormGroup;

  constructor(private route: ActivatedRoute, private store: Store<{ postsState: AppState }>) {}

  post: IPostResponseModel;
  isEdit: boolean = false;


  ngOnInit(): void {

    this.post = this.route.snapshot.data.post?.post as IPostResponseModel;
    this.isEdit = this.route.snapshot.data.post?.edit as boolean;

    this.editPostForm = new FormGroup({
      title: new FormControl(this.post?.title, Validators.required),
      body: new FormControl(this.post?.body, Validators.required),
    });
  }

  onSubmit() {
    // console.log(this.editPostForm.value);
    if (this.isEdit) {
      this.store.dispatch(PostActions.editPost({
        post: this.editPostForm.value,
        id: this.post.postId
      }));
    }
    else {
      this.store.dispatch(PostActions.savePost({
        post: {
          ...this.editPostForm.value,
          author: "Arjun Chokkamaman"
        }
      }));
    }
  }
}
