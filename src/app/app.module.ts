import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    PostsComponent,
    UserComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
