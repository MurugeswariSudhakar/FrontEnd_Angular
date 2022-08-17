import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { AddEditComponent } from './pages/user/add-edit/add-edit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';




@NgModule({
  declarations: [
    UserListComponent,
    AddEditComponent,
    AdminComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[UserListComponent]
})
export class AdminModule { }
