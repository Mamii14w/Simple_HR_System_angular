import { Component, OnInit } from '@angular/core';

import { Company } from 'src/app/models/company';
import { CompanySevicesService } from 'src/app/services/company-sevices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getall-company',
  templateUrl: './getall-company.component.html',
  styleUrls: ['./getall-company.component.css']
})
export class GetallCompanyComponent implements OnInit {
  constructor(private service: CompanySevicesService, private route: ActivatedRoute) {
    // Get the state object from the route
           //const user = this.route.snapshot.state.user;
  // Access the data using the .data attribute
 //      console.log(user.data);
   }
  CompanyList: Company[] = [];
  user : any;
  
  ngOnInit(): void {
   this.get_company();
   
   //this.getCompany_ById(1);
  // this.add_Company();
   //this.update_Company(2);
  }
  get_company(){
  this.service.getCompany().subscribe( (res: Company[]) => {
    this.CompanyList = res;
    console.log(res);
    this
  })
}
// Edit(cid:number){
// alert(cid);
// }
delete(cid:number){
   this.service.deleteCompany(cid).subscribe(res=>{
   alert("you have deleted succesfully!");
     this.get_company();
  });
}
} 
/*
getCompany_ById(id: number) {
  this.service.getCampanyById(id).subscribe({
    next: (d) => console.log(d),
    error: (er) => console.log(er)
  })
}


  
  update_Company = (id: number) => {
    const company: Company = { id: id, Cname: 'ethswitch', Description: 'Its a softwsre company' }
    this.service.updateCompany(company).subscribe({
      next: (data) => {
        console.log('update company with id ' + id);
        this.get_Company();
      },
      error: (er) => console.log(er)
    })
  }
  delete_company = (id: number) => {
    this.service.deleteCompany(id).subscribe({
      next: (data) => {
        console.log('deleted company with id ' + id);
        this.get_Company();
      },
      error: (er) => console.log(er)
    })*/
