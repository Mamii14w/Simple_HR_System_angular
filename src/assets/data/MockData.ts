import { InMemoryDbService,RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { Employee } from 'src/app/models/employee';

export class MockData implements InMemoryDbService { createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}>{
    const company : Company[]= [
        { id: 1, Cname: 'XOKA',Description:'A software company that i want to join' },
        { id: 2, Cname: 'CNET',Description: 'Its is a best software company' }
 ];
    const employees : Employee[] = [
        {id:1,fname:'Daniel',lname:'Worku',sex:'male',DOB:"10/12/1999","Email":"dani@gmail.com","phone":979363627,companyId:1,departmentId:1,salaryId:1,expirience:2,education:"degree",file:"dan.pdf"},
        {id:2,fname:'Zelalem',lname:'Jemere',sex:'male',DOB:"15/2/1998","Email":"dani@gmail.com","phone":979363627,companyId:1,departmentId:3,salaryId:2,"expirience":2,"education":"degree","file":"dan.pdf"},
        {id:3,fname:'yordanos',lname:'abera',sex:'female',DOB:"15/12/1999","Email":"dani@gmail.com","phone":979363627,companyId:2,departmentId:2,salaryId:1,"expirience":2,"education":"degree","file":"dan.pdf"}
    ];
    return {employees,company};
 
}
}
 