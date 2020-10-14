import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {UsersUtilsService} from 'src/app/services/usersUtils.service'
import { UserModel } from '../../models/userModel';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {

  mouseOver: Boolean = false;
  isRed: Boolean = false
  users: UserModel[] = [];
  searchText = '';

  @Output() addUserEvent: EventEmitter<null> = new EventEmitter();

  constructor(private utils: UsersUtilsService) { }

  async ngOnInit() {
    this.users = await this.utils.getUsers();
  }
  
    deleteUser(user: UserModel) {
      this.users = this.users.filter(x => x !== user)
    }
  
  addNewUser() {
    this.addUserEvent.emit();
    }
}
