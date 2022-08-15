import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SearchbynameComponent } from './pages/searchbyname/searchbyname.component';
import { HeaderComponent } from '../shared/header/header.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { AddEditComponent } from './pages/user/add-edit/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UserListComponent,
    SearchbynameComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
