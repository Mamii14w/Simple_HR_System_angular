import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CreateCompanyComponent } from "./company/create-company/create-company.component";
import { GetallCompanyComponent } from "./company/getall-company/getall-company.component";
import { UpdateCompanyComponent } from "./company/update-company/update-company.component";
import { GetbyidCompanyComponent } from "./company/getbyid-company/getbyid-company.component";

const approutes: Routes = [{ path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }, 
{ path: 'salary', loadChildren: () => import('./salary/salary.module').then(m => m.SalaryModule) },

{ path: 'company', component:GetallCompanyComponent},
{ path: 'create-company', component:CreateCompanyComponent},
{ path: 'update-company/:id', component:UpdateCompanyComponent},
{ path: 'getbyid-company/:id', component:GetbyidCompanyComponent},
];


@NgModule({ 
imports: [RouterModule.forRoot(approutes)], 
exports:[RouterModule]
})
export class AppRoutingModule{}