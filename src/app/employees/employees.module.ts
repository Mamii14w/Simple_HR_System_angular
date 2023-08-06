import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';


@NgModule({
  declarations: [
    CreateEmpComponent,
    ViewAllEmpComponent,
    DeleteEmpComponent,
    UpdateEmpComponent,
    GetByIdComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
