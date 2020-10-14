import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/components/models/userModel';
import { UsersUtilsService } from 'src/app/services/usersUtils.service';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() submitUserEvent: EventEmitter<null> = new EventEmitter();

  constructor(private userUtils: UsersUtilsService) { }

  ngOnInit() {
  }
  submitUser(user: UserModel) {
    this.userUtils.addUser(user).then(() => {
      this.submitUserEvent.emit();
    });
  }
  cancel() {
    this.submitUserEvent.emit();
  }


}
