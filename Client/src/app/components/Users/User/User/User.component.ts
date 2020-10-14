import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { UserModel } from 'src/app/components/models/userModel';
import { UsersUtilsService } from 'src/app/services/usersUtils.service';
import { TodosUtilsService } from 'src/app/services/todosUtils.service';
import { AppStateService } from 'src/app/services/stateService.service';
import { TodoModel } from 'src/app/components/models/todoModel';


@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit{ 
 
  click: number = 0;
  mouseOver: Boolean = false;
  unCompletedTodos: Boolean = false;
  choosenUser: Boolean = false;
  todos: TodoModel[];

  @Input() userInput: UserModel;
  @Output() delete: EventEmitter<UserModel> = new EventEmitter();
 
  constructor(private utils: UsersUtilsService,
    private todoUtils: TodosUtilsService,
    private state: AppStateService
  ) { }

  ngOnInit(): void {
    this.state.getCheckTodos().subscribe((val) => {
      this.checkTodos();
    })  
  } 

 

  updateVal(user) {  
    const updatedUser: UserModel = {    
      id: this.userInput.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address :{
        city: user.city,
        street: user.street,
      }
    };
    this.utils.updateUser(updatedUser) 
  }

  deleteVal(id) {
    this.delete.emit(this.userInput)
    this.utils.deleteUser(id) 
  }
  showInfo() {
    this.utils.singleUserShow().then(() => {
      this.click++
      this.userInput.isSelected = true;
      this.state.setCurrentUser(this.userInput)
      if (this.click % 2 === 0) {
        return this.choosenUser = false;
      }
      else {
        return this.choosenUser = true   
      }
    });  
  }
  checkTodos(){
    this.unCompletedTodos = false;
    this.todoUtils.getTodosById(this.userInput.id).subscribe((todos: TodoModel[]) => {
      todos.forEach((todo: TodoModel) => {
        if (!todo.completed) {
          this.unCompletedTodos = true;
        }
      })
    })
  }
}
