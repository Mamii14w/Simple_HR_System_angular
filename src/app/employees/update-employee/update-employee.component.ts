import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  empId=0;
  constructor(private activatedroute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>
    {
      this.empId = data['id'];
    })
  }
}