import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { GetallCompanyComponent } from './getall-company/getall-company.component';
import { SearchbyIdComponent } from './searchby-id-company/searchby-id.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { GetbyidCompanyComponent } from './getbyid-company/getbyid-company.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { ToastrModule}  from 'ngx-toaster';


@NgModule({
  declarations: [
    CreateCompanyComponent,
    GetallCompanyComponent,
    SearchbyIdComponent,
    UpdateCompanyComponent,
    GetbyidCompanyComponent,

    
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [GetallCompanyComponent,CreateCompanyComponent, 
    SearchbyIdComponent,UpdateCompanyComponent,GetbyidCompanyComponent]
})
export class CompanyModule { }
