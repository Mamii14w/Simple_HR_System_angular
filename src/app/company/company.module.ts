import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { GetallCompanyComponent } from './getall-company/getall-company.component';
import { GetbyIdComponent } from './getby-id-company/getby-id.component';
import { DeleteComponent } from './delete-company/delete.component';
import { SearchbyIdComponent } from './searchby-id-company/searchby-id.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';



@NgModule({
  declarations: [
    CreateCompanyComponent,
    GetallCompanyComponent,
    GetbyIdComponent,
    DeleteComponent,
    SearchbyIdComponent,
    UpdateCompanyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GetallCompanyComponent]
})
export class CompanyModule { }
