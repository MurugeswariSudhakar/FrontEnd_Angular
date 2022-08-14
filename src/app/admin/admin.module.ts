import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AttractionListComponent } from './pages/attraction/attraction-list/attraction-list.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAttractionComponent } from './pages/attraction/create-attraction/create-attraction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './pages/attraction/add-edit-component/add-edit.component';


@NgModule({
  declarations: [
    AttractionListComponent,AdminComponent, CreateAttractionComponent, AddEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
