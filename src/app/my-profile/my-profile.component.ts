import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  @Input() myProfilePosts: string[] = [];



  constructor() { }

  ngOnInit(): void {
  }

}
