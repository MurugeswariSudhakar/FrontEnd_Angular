import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';



const routes: Routes = [
  // {path: 'userlist', component:UserListComponent},
  // {path:'', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
