import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from 'src/environments/environment'
import { UserModel } from 'src/app/components/models/userModel'
import { AppStateService } from './stateService.service';

@Injectable({
  providedIn: 'root'
})
export class UsersUtilsService {
  users: UserModel[] = [];
constructor(private http : HttpClient, private state: AppStateService) { }


// Get all users:  
  getUsers() {
    return this.http.get<UserModel[]>(`${environment.urlApi}/users`).toPromise()
    
  }

// Get Single user:
  getSingleUser(id:String) {
   return this.http.get<UserModel>(`${environment.urlApi}/users/${id}` ).toPromise()
  }

//Add  user:
  addUser(user: UserModel): Promise<void> {
    return new Promise((resolve) => {

      user['address'] = {
        city: '',
        street: '',
      };

      this.http.post(`${environment.urlApi}/users`, user).subscribe((newUser: UserModel) => {
        newUser.isSelected = true;
        this.users.push(newUser);
        this.state.setCurrentUser(newUser);
        resolve();
      });
    });
  } 

//Update user:
updateUser(user: UserModel): void
{
  this.http.patch(`${environment.urlApi}/users/${user.id}`, user  ).subscribe(
    res => { console.log('user Updated!') }
    )
  } 
  
//Delete user:
  deleteUser(userid:number) {
    return this.http.delete(`${environment.urlApi}/users/${userid}`).subscribe()
  }

  singleUserShow(): Promise<void> {
    return new Promise((resolve) => {
      this.users.forEach(user => user.isSelected = false);
      resolve();
    });   
  }
}
