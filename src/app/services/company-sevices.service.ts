import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanySevicesService {
  constructor(private http: HttpClient){} 

 
  /*
      createCompany(companyBody): Observable<Company>{
        const empUrl = 'http://localhost:3000/company';
        //const empUrl = 'http://jsonplaceholder.com/';
         return this.http.post<Company>(empUrl,companyBody); //returns an observable
       }
       getAllcompany():Observable<Company>{
       const urls="http://localhost:3000/company"
         return this.http.get<Company>(urls);
       }
       getbyidcompany(cid): Observable<Company>{
          const empUrl = 'http://localhost:3000/company/'+cid;
          return this.http.get<Company>(empUrl);
        }
        updatecompany(companyBody,cid): Observable<Company>{
         const empUrl = 'http://localhost:3000/company'+cid;
          return this.http.put<Company>(empUrl,companyBody); //returns an observable
        }
        Deletecompany(cid):Observable<Company>{
         const empUrl = 'http://localhost:3000/company'+cid;
          return this.http.delete<Company>(empUrl); //returns an observable 
        }
        SearchByNamecompany(cid): Observable<Company>{
         const empUrl = 'http://localhost:3000/company/name='+cid;
          return this.http.get<Company>(empUrl); //returns an observable
        }*/
        private basurl = "api/company";
       getCompany(): Observable<Company[]>{
         return this.http.get<Company[]>(this.basurl);
       }
       getCampanyById = (id: number) =>{
         return this.http.get<Company>(`${this.basurl}/${id}`);
       }
       addCompany = (company:Company) =>{
        return this.http.post<Company>(this.basurl,company);
      }
      updateCompany = (company:Company) =>{
        return this.http.put<any>(`${this.basurl}/${company.id}`,company);
      }
      deleteCompany = (id:number) =>{
        return this.http.delete<any>(`${this.basurl}/${id}`);
      }
}
