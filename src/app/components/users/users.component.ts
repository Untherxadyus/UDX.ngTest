import { User } from './../../models/User';
import { UsersService } from '../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  expanded: boolean;

  constructor(private usersService: UsersService) {
    this.expanded = false;
  }

  ngOnInit() {
    this.usersService.getAll().subscribe(eList => {
      this.users = eList;
      console.log(eList);
    });
  }

  toggle(user: User) {
    const self = this;
    user.expanded = !user.expanded;

    for (const e of this.users) {
      if (e.expanded) {
        self.expanded = true;
        return;
      }
    }

    self.expanded = false;
  }

  toggleAll() {
    this.users.forEach(e => {
      e.expanded = !this.expanded;
    });

    this.expanded = !this.expanded;
  }
}
