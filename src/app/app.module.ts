import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    PostsComponent,
    UserComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
