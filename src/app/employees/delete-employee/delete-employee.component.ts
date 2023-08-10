import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  empId=0;
  constructor(private activatedroute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>
    {
      this.empId = data['id'];
    })
  }
  }