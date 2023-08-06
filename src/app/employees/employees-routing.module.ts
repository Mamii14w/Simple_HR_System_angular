import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';

const emproutes: Routes = [
  {path: "",component: ViewAllEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(emproutes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
