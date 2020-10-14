import { UserModel } from './../components/models/userModel';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private currentUser: BehaviorSubject<UserModel> = new BehaviorSubject(null);
  private checkTodos: BehaviorSubject<boolean> = new BehaviorSubject(false);
  

  constructor() { }

  getCurrentUser(): Subject<UserModel> {
    return this.currentUser;
  }
  setCurrentUser(value: UserModel): void {
    this.currentUser.next(value);
  }

  getCheckTodos(): BehaviorSubject<boolean> {
    return this.checkTodos;
  }
  setCheckTodos(): void {
    this.checkTodos.next(true);
  }


}
