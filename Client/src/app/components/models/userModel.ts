export class UserModel {
 
  id?: number; 
  address?: {
    city: string;
    street: string;
  }
  name: string;
  username: string;
  email: string;
  isSelected?: boolean;
}
