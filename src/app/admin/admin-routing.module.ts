import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AddEditComponent } from './pages/attraction/add-edit-component/add-edit.component';
import { AttractionListComponent } from './pages/attraction/attraction-list/attraction-list.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children :[
        { path:'attractionlist',component:AttractionListComponent},
        { path:'newAttraction',component:AddEditComponent},
        {path: 'edit/:id', component: AddEditComponent}
    ]
  } 
  //{ path:'admin/attractionlist',component:AttractionListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
