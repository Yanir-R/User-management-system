import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from 'src/environments/environment'
import {TodoModel} from 'src/app/components/models/todoModel'
import { UserModel } from '../components/models/userModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppStateService } from '../services/stateService.service';
@Injectable({
  providedIn: 'root'
})
export class TodosUtilsService {
  currentUser : UserModel = null;
  todos: TodoModel[] = [];
  constructor(private http: HttpClient, private state: AppStateService) {
    this.state.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
  })
  }
  userId = new BehaviorSubject(0);

//Get all todos:
  getTodosById(userid: number): Observable<TodoModel[]> {
    return new Observable<TodoModel[]>((observer) => {
      this.http.get<TodoModel[]>(`${environment.urlApi}/todos`).subscribe((todos: TodoModel[]) => {
        observer.next(todos.filter((x) => x.userId === userid));
      });
    });
  }
//Add single todo:
  addTodo(title: string):Promise<void> {
    return new Promise((resolve) => {
      const todo: TodoModel = {
        title,
        userId: this.currentUser.id,
        completed: false
      };
      this.http.post<TodoModel>(`${environment.urlApi}/todos/${todo.userId}`, todo).toPromise().then(() =>
        this.state.setCheckTodos());
      resolve();
  })
  }
 
//Update single todo:
markTodoCompleted( id:number): Promise<TodoModel> {
  return this.http.patch<TodoModel>(`${environment.urlApi}/todos/${id}`, null).toPromise()
  } 
}
