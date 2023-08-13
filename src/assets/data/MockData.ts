import { InMemoryDbService,RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { Employee } from 'src/app/models/employee';

export class MockData implements InMemoryDbService { createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}>{
    const company : Company[]= [
        { id: 1, Cname: 'XOKA',Description:'A software company that i want to join' },
        { id: 2, Cname: 'CNET',Description: 'Its is a best software company' },
        { id: 3, Cname: 'RedCloud',Description: 'Its is a clouding company' },
        { id: 4, Cname: 'Ethsiwch',Description: 'Its is a software company' }
 ];
    const employees : Employee[] = [
        {id:1,fname:'Daniel',lname:'Worku',sex:'male',"Email":"dani@gmail.com",companyId:1,role:'admin'},
        {id:2,fname:'Zelalem',lname:'Jemere',sex:'male',"Email":"dani@gmail.com",companyId:1,role:'manager'},
        {id:3,fname:'yordanos',lname:'abera',sex:'female',"Email":"dani@gmail.com",companyId:2,role:'employee'}
    ];
    return {employees,company};
 
}
}
 