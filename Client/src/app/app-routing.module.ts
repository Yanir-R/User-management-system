import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/Main/Main/Main.component';
import { UserComponent } from './components/Users/User/User/User.component';
import { UsersComponent } from './components/Users/Users/Users.component';
// import { UpdateComponent } from './components/Users/update/update/update.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
