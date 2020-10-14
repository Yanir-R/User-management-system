import { UserModel } from './../components/models/userModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(users: UserModel[], ...args: unknown[]): UserModel[] {
    if (!users) {
      return null;
    }
    return users.sort((a, b) => a.id - b.id);
  }

}
