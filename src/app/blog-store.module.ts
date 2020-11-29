import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostEffects } from './store/effects/post.effects';
import { postsReducer } from './store/reducers/post.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({ postsState: postsReducer }),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreRouterConnectingModule.forRoot(),
  ]
})
export class BlogStoreModule {}
