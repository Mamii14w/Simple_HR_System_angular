import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteFramworkModule } from './site-framwork/site-framwork.module';
import { AppRoutingModule } from './app-routing.module';
import { MockData } from 'src/assets/data/MockData';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CompanyModule } from './company/company.module';
import { CompanySevicesService } from './services/company-sevices.service'; 

const routeArray = [

]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SiteFramworkModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    CompanyModule,
    FormsModule,
    RouterModule.forRoot(routeArray),
    HttpClientInMemoryWebApiModule.forRoot(MockData,{delay:500})
  ],
  providers: [CompanySevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
