import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { CompanySevicesService } from 'src/app/services/company-sevices.service'; 

@Component({
  selector: 'app-getall-company',
  templateUrl: './getall-company.component.html',
  styleUrls: ['./getall-company.component.css']
})
export class GetallCompanyComponent {
  constructor( private service: CompanySevicesService){
   this.get_Company();
}
  CompanyList$ : Observable<Company[]>;
  get_Company(){
    this.service.getCompany().subscribe({
        next:(data)=> console.log(data),
         error:(er)=>er
    })
  }
  // this.getCompany_ById(1);
  // this.add_Company();
  // this.update_Company(2);
  // this.delete_company(2);
  getCompany_ById(id:number){
    this.service.getCampanyById(id).subscribe({
         next:(d)=>console.log(d),
         error:(er)=>console.log(er)
    })
  }
  update_Company=(id:number)=>{
    const company:Company={id:id,Cname:'ethswitch',Description:'Its a softwsre company'}
    this.service.updateCompany(company).subscribe({
      next:(data)=>{
        console.log('update company with id '+id );
        this.get_Company();
      },
      error:(er)=>console.log(er)
    })
  }
  delete_company=(id:number)=>{
    this.service.deleteCompany(id).subscribe({
      next:(data)=>{
        console.log('deleted company with id '+id );
        this.get_Company();
      },
      error:(er)=>console.log(er)
    })
  }

}