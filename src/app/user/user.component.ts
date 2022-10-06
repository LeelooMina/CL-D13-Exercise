import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() inputUser: {username: string, Id: number} = {
    username: '',
    Id: 0
  };

  constructor() { }

  ngOnInit(): void {

  }

}
