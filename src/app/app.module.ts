import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { PostNotFoundComponent } from './components/post-not-found/post-not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PrimeComponentsModule } from './prime-components.module';
import { BlogStoreModule } from './blog-store.module';
import { StripHtmlPipe } from './utils/strip-html.pipe';
import { SafeHtmlPipe } from './utils/safe-html.pipe';
import { LoadMoreDirective } from './utils/load-more.directive';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ViewPostComponent,
    PostNotFoundComponent,
    PostEditorComponent,
    MastheadComponent,
    StripHtmlPipe,
    SafeHtmlPipe,
    LoadMoreDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    BlogStoreModule,
    TimeagoModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
