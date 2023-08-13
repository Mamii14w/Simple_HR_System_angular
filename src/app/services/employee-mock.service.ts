import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class EmployeeMockService {

  constructor(private http: HttpClient) { }

  private basurl: string = 'http://localhost:4200/api/';
  
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.basurl + "employees");
  }
  getEmployeeById(id: number) {
    return this.http.get(`${this.basurl}employees/${id}`);
  }
  AddEmployee(employeeOb: Employee) {
    return this.http.post(`${this.basurl}employees`, employeeOb);
  }
  updateEmployee(employeeOb: Employee) {
    return this.http.put(`${this.basurl}employees/${employeeOb.id}`, employeeOb);
  }
  deleteEmploye(id: number) {
    return this.http.delete<any>(`${this.basurl}employees/${id}`);
  }


  /*constructor(private http: HttpClient){}

  createEmployee(employeesBody): Observable<Employee>{
    const empUrl = 'http://localhost:3000/company';
    //const empUrl = 'http://jsonplaceholder.com/';
     return this.http.post<Employee>(empUrl,employeesBody); //returns an observable
   }
   getAllEmployees(): Observable<Employee[]>{
     const empUrl = 'http://localhost:3000/employees';
     return this.http.get<Employee[]>(empUrl);
   }
   getbyidEmployee(empid): Observable<Employee>{
      const empUrl = 'http://localhost:3000/company/'+empid;
      return this.http.get<Employee>(empUrl);
    }
    updateEmployee(employeesBody,empid): Observable<Employee>{
     const empUrl = 'http://localhost:3000/company'+empid;
      return this.http.put<Employee>(empUrl,employeesBody); //returns an observable
    }
    DeleteEmployee(empid):Observable<Employee>{
     const empUrl = 'http://localhost:3000/company'+empid;
      return this.http.delete<Employee>(empUrl); //returns an observable 
    }
    SearchByNameEmployee(empid): Observable<Employee>{
     const empUrl = 'http://localhost:3000/company/name='+empid;
      return this.http.get<Employee>(empUrl); //returns an observable
    }
    */

}
