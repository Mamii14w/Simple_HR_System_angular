import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { HeaderEmpComponent } from './header-emp/header-emp.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { GetbyIdComponent } from './getby-id/getby-id.component';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { FormsModule } from '@angular/forms';
//import { EmployeeMockService } from '../services/employee-mock.service';

@NgModule({
  declarations: [
    EmployeesComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    GetbyIdComponent,
    ViewAllEmpComponent,
    HeaderEmpComponent,
    SearchByNameComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeesRoutingModule,
  ]
})
export class EmployeesModule { }
