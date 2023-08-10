import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { GetbyIdComponent } from './getby-id/getby-id.component';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';

const routes: Routes = [
  { path: '', component: ViewAllEmpComponent },
  { path: 'create_emp', component: CreateEmployeeComponent },
  { path: 'getbyid_emp/:id', component: GetbyIdComponent },
  { path: 'update_emp/:id', component: UpdateEmployeeComponent },
  { path: 'delete_emp/:id', component: DeleteEmployeeComponent },
  { path: 'searchbyname', component: SearchByNameComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
