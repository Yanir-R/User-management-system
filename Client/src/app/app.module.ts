import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { SearchPipe } from './pipes/Search.pipe'
import { AppComponent } from './app.component';
import { PostsComponent } from './components/Posts/Posts/Posts.component';
import { PostComponent } from './components/Posts/Post/Post/Post.component';
import { AddPostComponent } from './components/Posts/addPost/addPost/addPost.component';
import { ToDosComponent } from './components/toDos/toDos/toDos.component';
import { ToDoComponent } from './components/toDos/toDo/toDo/toDo.component';
import { AddTodoComponent } from './components/toDos/addTodo/addTodo/addTodo.component';
import { UsersComponent } from './components/Users/Users/Users.component';
import { UserComponent } from './components/Users/User/User/User.component';
import { AddUserComponent } from './components/Users/addUser/addUser/addUser.component';
import { UpdateComponent } from './components/Users/update/update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AddPostComponent,
    ToDosComponent,
    ToDoComponent,
    AddTodoComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    UpdateComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule, FormsModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
