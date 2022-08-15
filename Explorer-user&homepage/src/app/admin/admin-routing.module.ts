import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { SearchbynameComponent } from './pages/searchbyname/searchbyname.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';


const routes: Routes = [
  {path: 'admin/userlist', component:UserListComponent},
  {path: 'admin/searchbyname', component:SearchbynameComponent},
  {path:'', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
