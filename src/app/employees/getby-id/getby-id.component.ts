import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getby-id',
  templateUrl: './getby-id.component.html',
  styleUrls: ['./getby-id.component.css']
})
export class GetbyIdComponent implements OnInit {
empId=0;
constructor(private activatedroute: ActivatedRoute){}
ngOnInit(): void {
  this.activatedroute.params.subscribe(data =>
  {
    this.empId = data['id'];
  })
}
}
