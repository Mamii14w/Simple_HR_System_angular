import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeMockService } from 'src/app/services/employee-mock.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  
  constructor(private activatedroute: ActivatedRoute,private empservice: EmployeeMockService
    ,private fb: FormBuilder){}
  empId=0;
  registerForm: FormGroup;

  submitted: boolean = false;
  btntxt: string = "submit";
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
  }
  oncancel() {
    this.registerForm.reset();
  }
  
  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>
    {
      this.empId = data['id'];
    })
  }
}