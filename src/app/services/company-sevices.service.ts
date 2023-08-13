import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanySevicesService {
  constructor(private http: HttpClient) { }

  private basurl: string = 'http://localhost:4200/api/';
  getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(this.basurl + "company");
  }
  getCampanyById(id: number) {
    return this.http.get(`${this.basurl}company/${id}`);
  }
  AddCompany(companyOb: Company) {
    return this.http.post(`${this.basurl}company`, companyOb);
  }
  updateCompany(companyOb: Company) {
    return this.http.put(`${this.basurl}company/${companyOb.id}`, companyOb);
  }
  deleteCompany(id: number) {
    return this.http.delete<any>(`${this.basurl}company/${id}`);
  }
}
