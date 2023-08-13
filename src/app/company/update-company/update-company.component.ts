import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanySevicesService } from 'src/app/services/company-sevices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  companyId = 0;
  CompanyList: Company[] = [];
  constructor(private compservice: CompanySevicesService,
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder) { }
  registerForm: FormGroup;

  submitted: boolean = false;
  btntxt: string = "submit";

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>
      {
        this.companyId = data['id'];

        //this.compservice.getCompany(this.companyId).subscribe()
      })
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }


  }
  oncancel() {
    this.registerForm.reset();
  }
  SetFromState(){
    this.registerForm = this.fb.group({
      id : [0],
      company_name : ['',Validators.compose ([Validators.required, Validators.minLength(3),Validators.maxLength(15)])],
      //email: ['', Validators.compose([Validators.required,Validators.email])],
      //DOB: ['', Validators.compose([Validators.required,Validators.pattern(d-m-y)])],
    })
    }
}
