import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: any[];
  constructor(private us: UserService) { }

  ngOnInit() {
   // this.users = this.us.getUsers();
  }

}
