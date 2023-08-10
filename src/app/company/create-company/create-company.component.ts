import { Component,OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanySevicesService } from 'src/app/services/company-sevices.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
constructor(private service:CompanySevicesService){
}
ngOnInit(){
      const company:Company={id:3,Cname:'redcluod',Description:'Its a clouding company'}
      this.service.addCompany(company).subscribe({
        next:(data)=>{
          console.log('New company is added');
          console.log(data);
          
        },
        error:(er)=>console.log(er)
      })
    
   } 
  }