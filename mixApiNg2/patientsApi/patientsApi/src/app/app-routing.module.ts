import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { UsersComponent } from './users/users.component';

const routes : Routes = [
  {path:"",redirectTo:"patients",pathMatch:"full"},
  {path:"patients",component:PatientListComponent},
  {path:"patient/:id",component:PatientFormComponent},
  {path:"users",component:UsersComponent},

]
export const routeme = RouterModule.forRoot(routes);
