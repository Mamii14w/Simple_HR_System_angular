import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeMockService } from 'src/app/services/employee-mock.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  constructor(private service:EmployeeMockService,private fb: FormBuilder,
    private router: Router,private http:HttpClient){
  }
  registerForm: FormGroup;
ngOnInit(){
  this.service.getEmployee();
   } 
AddnewEmployee(form){

  let newEmp={
 id:6,
 empnamef: form.value.emp_fname,
 empnamel: form.value.emp_lname,
 gender : form.value.gender,
 email: form.value.email,
 uname: form.value.uname,
 role: form.value.role,
 cname: form.value.cname,
};
//  this.service.AddEmployee(newEmp).subscribe(data=>{
//  console.log(data);
//  this.service.getEmployee();
// })
 }
oncancel(){
  this.registerForm.reset();
 }
}
 