import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../components/models/userModel';

@Pipe({name: 'appSerach'
  
})
export class SearchPipe implements PipeTransform {

    
  transform(users: UserModel[], searchText: string) {
      if (!users) {
        return [];
      }
      if (!searchText) {
          return users
      }
      return users.filter(user => {
      return (user.name + user.email).toLowerCase().includes(searchText.toLowerCase())
      
       
      })   
  
    
  }
  
 

}
