import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/stateService.service';
import {TodosUtilsService} from 'src/app/services/todosUtils.service'
import { TodoModel } from '../../models/todoModel';
import { UserModel } from '../../models/userModel';
@Component({
  selector: 'app-toDos',
  templateUrl: './toDos.component.html',
  styleUrls: ['./toDos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: TodoModel[] = []
  
  constructor(private utils: TodosUtilsService, private state: AppStateService) { }

  ngOnInit() {
    this.state.getCurrentUser().subscribe((user: UserModel) => {
      if (!user) {
        return;
      }
      this.utils.getTodosById(user.id).subscribe((todos: TodoModel[]) => {
        this.todos = todos;
      });
    });
  }

  markTodoCompleted(index: number, id: number) {
    this.utils.markTodoCompleted(this.todos[index].id).then(() => {
      this.todos[index].completed = true;
      this.state.setCheckTodos()
    });
  }
  
}