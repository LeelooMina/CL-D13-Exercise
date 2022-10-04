import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CL-D13-Exercise';

  users: {username: string, Id: number}[] = [
    {
      username: "Crystal",
      Id: 1
    },
    {
      username: "John",
      Id: 2
    },
    {
      username: "Matt",
      Id: 3
    }
  ]

 @Output() myPosts: string[] = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"];
}
