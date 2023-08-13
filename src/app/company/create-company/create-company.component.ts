import { Component,OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/company';
import { CompanySevicesService } from 'src/app/services/company-sevices.service';
import { DbOption } from 'src/assets/data/db-option';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
constructor(private service:CompanySevicesService,private fb: FormBuilder,
  private router: Router,private http:HttpClient){
}
registerForm: FormGroup;

submitted: boolean = false;
btntxt : string = "submit";
dopts:DbOption;
ngOnInit(){
  this.service.getCompany();
  this.dopts = DbOption.create;
   } 
    Addnewcompany(form){
 
     let newcompany ={
    id:6,
    Cname: form.value.company_name,
    Description: form.value.company_description
   };
    this.service.AddCompany(newcompany).subscribe(data=>{
    console.log(data);
    this.service.getCompany();
   })
  }
  onSubmit(formValue: any) {
    // Send the form data to the in-memory web api
    this.http.post('/api/compay', formValue).subscribe((data: any) => {
      // Redirect to another component with the data
      this.router.navigate(['/company'], { state: { user: data } });
    });
  }
  // onSubmit(){
  //   this.submitted =true;
  //   if (this.registerForm.invalid){return;}
  // }
  oncancel(){
    this.registerForm.reset();
   }
 
  // SetFromState(){
  //   this.registerForm = this.fb.group({
  //     id : [0],
  //     company_name : ['',Validators.compose ([Validators.required, Validators.minLength(3),Validators.maxLength(15)])],
      //email: ['', Validators.compose([Validators.required,Validators.email])],
      //DOB: ['', Validators.compose([Validators.required,Validators.pattern(d-m-y)])],
  //  });
    //}
  }
   // const company:Company={id:3,Cname:'redcluod',Description:'Its a clouding company'}
      // this.service.addCompany(company).subscribe({
      //   next:(data)=>{
      //     console.log('New company is added');
      //     console.log(data);
          
      //   },
      //   error:(er)=>console.log(er)
      // })
    