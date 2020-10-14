import { Component, OnInit } from '@angular/core';
import { UserModel } from './components/models/userModel';
import { AppStateService } from './services/stateService.service';
import { UsersUtilsService } from './services/usersUtils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  addUser = false;
  addTodo = false;
  addPost = false;
  currentUser: UserModel = null;

  constructor(private state: AppStateService, private userUtils: UsersUtilsService) { }
  
  ngOnInit(): void {
    this.state.getCurrentUser().subscribe((user: UserModel) => {
      if (!user) {
        this.userUtils.singleUserShow().then(() => {
          this.currentUser = null;
        });
      }
      this.currentUser = user;
    });
  }

  
}
