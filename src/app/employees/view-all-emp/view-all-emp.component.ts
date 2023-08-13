import { Component, OnInit } from '@angular/core';
import { EmployeeMockService } from 'src/app/services/employee-mock.service';
import { Employee } from 'src/app/models/employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css'],
  
})
    export class ViewAllEmpComponent implements OnInit{
      
  constructor(private http:HttpClient ,private employeeService: EmployeeMockService){ }
    //this.GetAllEmp();
    employees: Employee[] = []
    ngOnInit(): void{
      this.get_Employee();
      // this.employeeService.getAllEmployees().subscribe((data : Employee[])=>{
      //   // next:(d)=>console.log(d),
      //   // error:(err)=> console.log(err)
      //   console.log('data',data);
      //   this.employees = data;
      // });
    }

    get_Employee(){
      this.employeeService.getEmployee().subscribe( (res: Employee[]) => {
        console.log(res);
        this.employees = res;
        
      })
    }
    // Edit(cid:number){
    // alert(cid);
    // }
    delete(cid:number){
       this.employeeService.deleteEmploye(cid).subscribe(res=>{
       alert("you have deleted succesfully!");
         this.get_Employee();
      });
    }

  /*  <--in-momery web api function -->C
  GetAllEmp(){
    this.employeeservice.getEmployees().subscribe({
      next:(d)=>console.log(d),
      error:(err)=> console.log(err)
    })
  }*/
   
  }
