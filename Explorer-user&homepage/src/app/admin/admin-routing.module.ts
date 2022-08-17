import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { LoginComponent } from '../login/login/login.component';
import { HeaderComponent } from '../shared/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';

import { AddEditComponent } from './pages/user/add-edit/add-edit.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'admin',component:AdminComponent,
  children:[
  {path: 'userlist', component:UserListComponent},
  {path:'newUser',component:CreateUserComponent},
  {path: 'edit/:id', component: AddEditComponent}, 
  {path:'login',component:LoginComponent}
 
  ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
