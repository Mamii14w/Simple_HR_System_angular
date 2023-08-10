import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  empName="";
  constructor(private activatedroute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(data =>
    {
      this.empName = data['name'];
    })
  }
}
