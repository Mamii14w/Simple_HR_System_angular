import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

const approutes: Routes = [{path: 'employees', loadChildren: () => import ( './employees/employees.module').then(m => m.EmployeesModule)}];

@NgModule({ 
imports: [RouterModule.forRoot(approutes)], 
exports:[RouterModule]
})
export class AppRoutingModule{}