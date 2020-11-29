import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { PostNotFoundComponent } from './components/post-not-found/post-not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ViewPostResolver } from './services/view-post.resolver';

export const appRoutes: Routes = [
  {
    path: 'create',
    component: PostEditorComponent,
  },
  {
    path: 'view/:postId',
    component: ViewPostComponent,
    resolve: {
      post: ViewPostResolver,
    },
  },
  {
    path: 'edit/:postId',
    component: PostEditorComponent,
    resolve: {
      post: ViewPostResolver,
    },
  },
  {
    path: 'post-not-found',
    component: PostNotFoundComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blog',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
